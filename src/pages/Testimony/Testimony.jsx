import React from 'react'
import Rectangle from "../../assets/testimonyPics/Rectangle-9.png"
import quest from "../../assets/testimonyPics/q.png"


const Testimony = () => {
  return (
    <div className="w-full h-full bg-black grid  px-8 place-content-center">
      <div className='text-white text-center mt-14'>
        <h2 className='text-3xl'>What They Say?</h2>
      </div>

      <div className='grid lg:grid-cols-2  lg:p-32 gap-20 mt-14'>
        <div className='bg-blue-900  w-24 h-72 rounded-lg'>
            <div className='w-56 h-60 ml-4 lg:ml-8'>
            <img src={Rectangle} alt="" style={{width:"100%" , height:"294px" , borderRadius:"13px" , objectFit:"cover"}}/>
            </div>
        </div>
        <div className='lg:w-96 h-96 lg:h-44 relative mt-20'>
            <div className='text-white absolute'>
            <h2 className='text-white lg:mb-20'>
            "His dedication to artistry in coding is truly inspiring. As a full stack developer, he seamlessly weaves creativity into his projects, making them not just functional but visually stunning. His commitment to open source is evident in the quality of his work, a testament to his passion for excellence."
            </h2>
            <h3 className='text-white mb-4'>- Timi Maliki</h3>
            </div>
            <img src={quest} alt="" style={{marginTop:"-4rem" ,}}/>
        </div>
      </div>
    </div>
  )
}

export default Testimony
