import React from 'react'
import { useState } from "react";
import rectangle from "../../assets/blogpics/Rectangle.png"
const BlackEyePeas = () => {
    const [blogs, setBlogs] = useState([
        { icon: rectangle, 
            title: "Exploring the Connection Between Design and Emotional Response", 
            id: 1 , 
            body:"In today's fast-paced world, design has evolved beyond just aesthetics and functionality - it now has the power to evoke emotions in its users. Exploring the connection between design and emotional response helps us understand how businesses can harness these psychological insights to build stronger connections with their consumers, ultimately leading to greater success.This blog post delves into the fascinating world of emotional design by examining its psychology, impact on user experience, and real-world examples that demonstrate its effectiveness in capturing consumer attention."},
       

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

export default BlackEyePeas