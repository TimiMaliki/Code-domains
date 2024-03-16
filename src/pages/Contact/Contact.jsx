import React from "react";
import Image from "../../assets/Contact/Image.png";

const Contact = () => {
  return (
    <div className="lg:grid grid-cols-2 p-44 py-24 bg-black lg:w-full lg:h-screen">
      <div>
        <img src={Image} alt="" className="px-14" />
      </div>

      <div className="text-white  text-center   py-14">
        <h1 className="text-white text-4xl">Contact</h1>

        <div className="lg:grid lg:grid-cols-2 gap-10 h-full  mt-20 ">

          <div className="visit px-16">
              <h3 className="text-white  text-4xl  mt-2 ">Visit</h3>
              <p className="h-24 mt-8">
              2972 Westheimer Rd. Santa Ana, Illinois 85486 
              </p>
          </div>

          <div className="contact"> 
             <h3 className="text-white text-4xl  mt-2">Contact</h3>
                <p className="mt-8">contact@company.com</p>
             <p className=" h-24 mt-8">
              2972 Westheimer Rd. Santa Ana, Illinois 85486 
              </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
