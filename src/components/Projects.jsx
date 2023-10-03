import React, { useState } from "react";
 import ecom1 from "../assets/portfolioPics/e-com1.png"
 import ecom2 from "../assets/portfolioPics/e-com2.png"
 import ecom3 from "../assets/portfolioPics/e-com3.png"
 import ecom4 from "../assets/portfolioPics/e-com4.png"

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Projects = () => {
  const slides = [
    {
      Img: ecom1,
    },{
      Img:ecom2,
    },
    {
      Img:ecom3,
    },
    {
      Img:ecom4,
    },
  ];

  const [currentIndex , setCurrentIndex] = useState(0)

  const prevSlide = () =>{
          const isfirstSlide = currentIndex === 0
          const newIndex = isfirstSlide ? slides.length - 1 : currentIndex - 1
          setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div className="lg:w-full lg:h-full lg:p-28 bg-black">
      <div className="lg:flex justify-center text-center ">
        <div className="text-white text-3xl lg:p-28">
          <h1 className="lg:w-72 p-8">All Creative Works Selected Project</h1>
        </div>
        <div className="text-white text-xl mt-24">
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcuA
          tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectmetus, eget. Id eleifend arcu consectetur nunc. consectmetus,
          eget. Id eleifend arcu consectetur nunc.
        </div>
      </div>

      <div className="lg:w-full lg:h-full flex justify-center gap-2 py-16  lg:mt-8 group cursor-pointer">
        <FaArrowAltCircleLeft
          style={{ color: "white", fontSize: "2rem", marginTop:"9rem"}}
          className="lg:hidden group-hover:block "
          onClick={prevSlide}
        />
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].Img}`,
            backgroundColor: "#000",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            width: "900px",
          }}
          className=" w-full h-96 bg-no-repeat  bg-center bg-contain rounded-lg  duration-200"
        ></div>
        <FaArrowAltCircleRight
          style={{ color: "white", fontSize: "2rem", marginTop:"9rem" }}
          className="lg:hidden group-hover:block "
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Projects;