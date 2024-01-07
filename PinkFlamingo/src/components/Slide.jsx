import React from 'react'
import SlideImg from '../assets/Group (1).svg'
import StarVector from '../assets/Vector.svg'

export default function Slide() {
  return (
    <div className='flex flex-row justify-around items-center py-4 px-16 w-screen'>
      <div className='relative px-12'>
        <img src={StarVector} alt="StarImage" className='absolute top-0 right-0'/>
        <img src={StarVector} alt="StarImage" className='absolute top-0 left-0'/>
        <img src={StarVector} alt="StarImage" className='absolute bottom-10 left-10'/>
        <img src={StarVector} alt="StarImage" className='absolute bottom-10 right-10'/>
        <img src={SlideImg} alt="SlideImage" />
      </div>
      <h1 className='text-3xl font-bold'>Transform Your Mind & Soul: <br /> Discover Your Spiritual Path with <br /> Our Courses</h1>
    </div>
  )
}
