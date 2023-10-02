import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Layout = () => {
  return (
    <div className=" lg:grid grid-cols-2  bg-black lg:w-full lg:h-screen">
        <HeroText />
        <HeroImg />
    </div>
  );
};

export default Layout;
