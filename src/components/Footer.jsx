import React from 'react'
import { FaGithub,FaTwitter,FaLinkedin,FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full bg-black p-20 grid place-content-center text-center text-white'>
      <div>
        <h1 className='text-4xl text-center mb-8'>
        Maliki
        </h1>
      </div>

      <div className='text-center mb-8'>
        <h2 className='text-2xl'>Designed and built by TimiLehin Maliki</h2>
      </div>

<div className='icons text-center flex justify-between'>
    <FaGithub size={40} style={{color:"white" , cursor:"pointer"}}/>
    <FaTwitter  size={40} style={{color:"white" , cursor:"pointer"}}/>
    <FaLinkedin  size={40} style={{color:"white" , cursor:"pointer"}}/>
    <FaInstagramSquare  size={40} style={{color:"white" , cursor:"pointer"}}/>
</div>
    </div>
  )
}

export default Footer
