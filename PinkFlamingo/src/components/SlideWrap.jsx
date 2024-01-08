import React, { useState } from 'react'
import Slide from './Slide'
import SlideButton from '../assets/Group 14087.svg'

export default function SlideWrap() {
    const slides = [<Slide/>,<Slide/>,<Slide/>,<Slide/>]
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
    
  return (
    <div className='bg-[#FFEEF68A] flex flex-row w-screen items-center px-2 md:px-16 py-6 justify-between'>
      <button onClick={goToPrevSlide}><img src={SlideButton} alt="button" className='h-[3rem] w-[3rem]' /></button>
      <div className='w-10/12 '>
      {slides.filter((slide, index)=>{
        
        if(index === currentIndex) return <div key={index}>{slide}</div>
      })}
      </div>
      <button onClick={goToNextSlide}><img src={SlideButton} alt="button" className='rotate-180 h-[3rem] w-[3rem]'/></button>
    </div>
  )
}
