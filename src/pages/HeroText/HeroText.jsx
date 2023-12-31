import React from "react";
import Ellipse from "../../assets/heroPics/Ellipse-64.png"
import Star from "../../assets/heroPics/Star-2.png"

const HeroText = () => {
  return (
    <div className="w-full h-full md:p-20 lg:p-32 text-center items-center  ">
        <div className="relative mb-20 md:ml-12">
        <img src={Star} alt="" className="ml-24 md:ml-44 lg:ml-72 lg:pl-12" />
        <h1 className="text-white text-3xl w-80">Hey There, I’m Uchewa Emmanuel</h1>
        <img src={Star} alt="" className="lg:-ml-14 pl-12 mb-0"  />
        <div className="absolute">
            <img src={Ellipse} alt="" className="-mt-20"/>
        </div>
        </div>

        <div className="mb-12   lg:flex">
            <p className="text-white"> 
           As a seasoned senior full stack developer with eight 
           years of professional experience, I bring a wealth of expertise and comprehensive knowledge 
           to the realm of software development. Over the years, I have honed my skills in both front-end and back-end technologies, 
           allowing me to proficiently navigate through the entire spectrum of application development.
            </p>
        </div>

        <div className="grid place-content-center lg:flex gap-7">
          <button className="rounded-full lg:rounded-full bg-yellow-400 w-32 h-12  lg:w-1/2 lg:h-12">Say Hello</button>
          <button className=" rounded-full lg:rounded-full border border-yellow-400 w-32 h-12 lg:w-1/2 lg:h-12 text-white">Explore Project</button>
            <div></div>
        </div>
   
    </div>
  );
};

export default HeroText;
