import React from "react";
import Layer from "../assets/heroPics/Layer0-1.png";
import Vector from "../assets/heroPics/Vector-2.png";
import Card from "../assets/heroPics/Card-2.png";
import Card1 from "../assets/heroPics/Card-1.png";
import Card3 from "../assets/heroPics/Card-3.png";
import Star1 from "../assets/heroPics/Star-1.png";

const HeroImg = () => {
  return (
    <div className="lg:w-full lg:h-full ">
      <img src={Star1} alt=""  className=' ml-4 lg:ml-80  lg:-mt-8 w-10 h-10'/>
      <img src={Vector} alt="" className=" -mt-16 w-20 h-12" />
      <img
        src={Layer}
        alt=""
        width={350}
        height={300}
        style={{ borderRadius: "13rem",}}
      />
      <img src={Card1} alt=""  style={{width:"150px", marginTop:"-9rem"}}/>
      <img src={Star1} alt="" className="ml-60 mt-16  w-10 h-10 " />
      <img src={Card3} alt="" width={150} height={80}  className=' md:-mt-36 lg:ml-56'/>

    </div>
  );
};

export default HeroImg;


