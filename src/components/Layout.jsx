import React from 'react'
import HeroText from './HeroText'
import HeroImg from './HeroImg'

const Layout = () => {
  return (
    <div className='Lg:grid-cols-2 bg-black w-full h-screen'>
      <HeroText/>
      <HeroImg/>
    </div>
  )
}

export default Layout
