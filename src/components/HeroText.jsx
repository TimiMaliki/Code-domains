import React from "react";
import Ellipse from "../assets/heroPics/Ellipse-64.png"
import Star from "../assets/heroPics/Star-2.png"

const HeroText = () => {
  return (
    <div className="border w-1/2 h-full justify-center p-36 text-center items-center  ">
        <div className="relative mb-20">
        <img src={Star} alt="" className="ml-96 pl-12" />
        <h1 className="text-white text-3xl w-80">Hey There, I’m Timi</h1>
        <img src={Star} alt="" className="-ml-14 pl-12 mb-0"  />
        <div className="absolute">
            <img src={Ellipse} alt="" className="-mt-20"/>
        </div>
        </div>

        <div>
            <p className="text-white"> 
            A tristique nulla faucibus in quam metus, eget.
             Id eleifend arcu consectetur nunc, quam adipiscing.A tristique nulla 
            faucibus in quam metus, eget. Id eleifend arcu consectetur nunc.
            </p>
        </div>
   
    </div>
  );
};

export default HeroText;
