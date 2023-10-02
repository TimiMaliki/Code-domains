import React from "react";
import Fiverr from "../assets/LogoPics/Fiverr.png";
import Github from "../assets/LogoPics/Github.png";
import Top from "../assets/LogoPics/Top.png";
import Upwork from "../assets/LogoPics/Upwork.png";

const Logo = () => {
  return <div className="lg:w-full h-32 bg-blue-900 flex justify-between items-center p-8">
<img src={Fiverr} alt=""  width={90} height={90}/>
<img src={Github} alt=""  width={90} height={90}/>
<img src={Top} alt=""  width={90} height={90}/>
<img src={Upwork} alt="" width={90} height={90}/>

  </div>;
};

export default Logo;
