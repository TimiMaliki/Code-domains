import React from 'react'
import Layer from "../assets/heroPics/Layer0-1.png"
import Vector from "../assets/heroPics/Vector-2.png"
import Card from  "../assets/heroPics/Card-2.png"
import Card1 from  "../assets/heroPics/Card-1.png"
import Card3 from  "../assets/heroPics/Card-3.png"
import Star1 from  "../assets/heroPics/Star-1.png"

const HeroImg = () => {
  return (
    <div className='lg:w-full lg:h-full p-20'>
        <img src={Vector} alt="" />
        <img src={Star1} alt="" style={{marginLeft:"26rem", marginTop:"-5rem"}}/>
        <img src={Layer} alt=""  width={350} height={300} style={{borderRadius:"13rem",marginLeft:"8rem" ,}} />
        <img src={Card} alt="" width={150} height={100} style={{marginTop:"-26rem"}}/>
        <img src={Card1} alt="" width={150} height={100} style={{marginTop:"10rem" , marginLeft:"2rem"}}/>
        <img src={Star1} alt="" style={{marginLeft:"16rem", marginTop:"2rem"}}/>
        <img src={Card3} alt="" width={150} height={100} style={{marginLeft:"25rem", marginTop:"-5rem"}}/>
    </div>
  )
}

export default HeroImg
