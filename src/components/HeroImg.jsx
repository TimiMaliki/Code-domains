import React from 'react'
import Layer from "../assets/heroPics/Layer0-1.png"
const HeroImg = () => {
  return (
    <div className='lg:w-full lg:h-full p-20'>
      <img src={Layer} alt=""  width={350} height={300} style={{borderRadius:"13rem",marginLeft:"8rem"}} />
    </div>
  )
}

export default HeroImg
