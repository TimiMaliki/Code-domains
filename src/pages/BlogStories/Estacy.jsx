import React from 'react'
import { useState } from "react";
import rectangle13 from "../../assets/blogpics/Rectangle-13.png"
const Estacy = () => {
    const [blogs, setBlogs] = useState([
        { icon: rectangle13, title: "Exploring the Connection Between Design and Emotional Response",
         id: 2 , 
         body:"Welcome to the world of inclusive design, a powerful approach that aims to create user-friendly experiences for everyone, meeting diverse needs and breaking down barriers for people with disabilities or impairments.As an essential aspect of digital product development, embracing inclusive design not only expands your audience reach but also fosters brand recognition and helps boost SEO."},
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

export default Estacy