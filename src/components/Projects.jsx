import React, { useState } from "react";
import Vector from "../assets/heroPics/Layer0-1.png";
import Sun from "../assets/portfolioPics/sun.jpg";
import dope from "../assets/portfolioPics/dope.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Projects = () => {
  const slides = [
    {
      Img: Vector,
    },{
      Img:Sun,
    },
    {
      Img:dope,
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
    <div className="lg:w-full lg:h-full p-28 bg-black">
      <div className="lg:flex justify-center text-center ">
        <div className="text-white text-3xl p-28">
          <h1 className="w-72">All Creative Works Selected Project</h1>
        </div>
        <div className="text-white text-xl mt-24">
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcuA
          tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectmetus, eget. Id eleifend arcu consectetur nunc. consectmetus,
          eget. Id eleifend arcu consectetur nunc.
        </div>
      </div>

      <div className="w-full h-full flex justify-center gap-2 py-16 relative mt-8 group cursor-pointer">
        <FaArrowAltCircleLeft
          style={{ color: "white", marginTop: "9rem", fontSize: "2rem" }}
          className="hidden group-hover:block"
          onClick={prevSlide}
        />
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].Img}`,
            backgroundColor: "white",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            width: "900px",
          }}
          className=" w-full h-96 bg-no-repeat  bg-center bg-contain rounded-2xl duration-200"
        ></div>
        <FaArrowAltCircleRight
          style={{ color: "white", marginTop: "9rem", fontSize: "2rem" }}
          className="hidden group-hover:block"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Projects;
