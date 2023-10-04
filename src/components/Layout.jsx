import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Layout = () => {
  return (
    <div className="py-8 lg:grid grid-cols-2  bg-black lg:w-full lg:h-screen">
        <div className=" grid text-center place-content-center">
        <HeroText />
        </div>
        <div className="grid place-content-center">
        <HeroImg />
        </div>
      
    </div>
  );
};

export default Layout;
