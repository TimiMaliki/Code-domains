import React from 'react'
import Layer from "../assets/heroPics/Layer0-1.png"
import Vector from "../assets/heroPics/Vector-2.png"
import Card from  "../assets/heroPics/Card-2.png"
import Card1 from  "../assets/heroPics/Card-1.png"
import Card3 from  "../assets/heroPics/Card-3.png"
import Star1 from  "../assets/heroPics/Star-1.png"

const HeroImg = () => {
  return (
    <div className='lg:w-full lg:h-full p-20 border border-red-400'>
        <img src={Vector} alt="" />
        <img src={Star1} alt="" className='lg:ml-[26rem] lg:mt-[-5rem] ml-[27rem]'/>
        <img src={Layer} alt=""  width={350} height={300} style={{borderRadius:"13rem",marginLeft:"8rem" ,}}/>
        <img src={Card} alt="" width={150} height={100} style={{marginTop:"-26rem"}}/>
        <img src={Card1} alt="" width={150} height={100} style={{marginTop:"10rem" , marginLeft:"2rem"}}/>
        <img src={Star1} alt="" style={{marginLeft:"16rem", marginTop:"2rem"}}/>
        <img src={Card3} alt="" width={150} height={80} className='border lg:ml-[25rem] lg:mt-[-8rem] ml-[21rem]'/>
    </div>
  )
}

export default HeroImg
