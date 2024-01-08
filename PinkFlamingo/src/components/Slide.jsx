import React from 'react'
import SliderImg from '../assets/SliderImg.svg'

export default function Slide() {
  return (
    <div className='flex flex-col gap-4 md:flex-row justify-center md:justify-around w-full items-center py-4 px-16'>
      <img src={SliderImg} alt="sliderimg" />
      <h1 className='text-xs w-full md:w-[30rem] md:text-3xl font-bold'>Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses</h1>
    </div>
  )
}
