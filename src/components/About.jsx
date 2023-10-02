import React from "react";

const About = () => {
  return (
    <div className="grid w-full h-full place-content-center  bg-[#23252A]">

      <div className="w-96  h-12 mt-14">
        <h2 className="text-white text-3xl text-center">About ME</h2>
      </div>

      <div className="w-96  h-48 mt-14 text-white text-xl text-center">
        <p>
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectmetus, eget. Id eleifend arcu consectetur nunc.
        </p>
      </div>
               <button className=" place-content-center p-8 text-center hover:bg-blue-300 rounded-full bg-yellow-300 w-full h-12"><p className="-mt-2">Download CV</p></button>
    </div>
  );
};

export default About;
