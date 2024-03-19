import React from 'react'
import { useState } from "react";
import rectangleOrange from "../../assets/blogpics/Rectangle-orange.png"
const FunFun = () => {
    const [blogs, setBlogs] = useState([
        { icon: rectangleOrange, title: "Maximizing Conversion Rates with Effective Web Design",
         id: 2 , 
         body:"Having an effective and well-designed website is critical to maximizing conversion rates and improving Return on Investment (ROI). From incorporating directional cues to collecting visitor data, there are a lot of different strategies for optimizing web design for the purpose of increasing conversions.Understanding key elements of web design, such as user experience and layout, will help businesses make more informed decisions when creating their websites and therefore boost conversion rates."},
    ])
  return (
    <div className="w-full h-full mt-8 ">
    {blogs.map((blog) =>(
        <div className="p-20">

          <div className='w-full h-full flex justify-center mb-10'>
          <img src={blog.icon} alt="" srcset="" />
          </div>
       
              <div className='text-center'>
              <h2 className='mb-4'>{blog.title}</h2>
              <p>{blog.body}</p>
              </div>
        </div>
    ))}
  </div>
  )
}

export default FunFun