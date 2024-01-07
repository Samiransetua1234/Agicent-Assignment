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
    <div className='bg-[#FFEEF68A] flex flex-row items-center px-16 py-6 justify-between'>
      <button className=' rounded-[50%]' onClick={goToPrevSlide}><img src={SlideButton} alt="button" /></button>
      {slides.filter((slide, index)=>{
        
        if(index === currentIndex) return <div key={index}>{slide}</div>
      })}
      <button className='rounded-[50%]' onClick={goToNextSlide}><img src={SlideButton} alt="button" className='rotate-180'/></button>
    </div>
  )
}
