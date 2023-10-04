import React from "react";

const About = () => {
  return (
    <div className="grid w-full text-center h-screen place-content-center  bg-[#23252A]">
      <div className=" text-center ">
        <h2 className="text-white text-3xl text-center mt-8">About ME</h2>
      </div>

      <div className="   h-full lg:mt-14 lg:grid lg:place-content-center lg:ml-20 text-white text-xl text-center">
        <p className="mb-14">
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectmetus, eget. Id eleifend arcu consectetur nunc.
        </p>
            
      <button className=" place-content-center p-8 text-center hover:bg-blue-300 rounded-full bg-yellow-300  lg:ml-96  lg:w-64 lg:h-12">
        <p className="-mt-4">Download CV</p>
      </button>
      </div>
  

<div className="lg:flex justify-between w-1/2 lg:w-full  px-8 lg:gap-28 h-full  mt-20 lg:mt-32 lg:mt-14 mb-32"> 
<div className="text-white text-3xl cursor-pointer"><p className="hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-500 duration-200">Skills</p></div>
<div className="text-white text-3xl cursor-pointer"><p className="hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-500 duration-200">Experience</p></div>
<div className="text-white text-3xl cursor-pointer"><p className="hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-500 duration-200">Education</p></div>
</div>

    </div>
  );
};

export default About;
