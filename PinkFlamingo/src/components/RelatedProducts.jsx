import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RelatedProductCard from './RelatedProductCard'
import SideButton from '../assets/Group 14141.svg'

export default function RelatedProducts() {

  const data = useSelector(state => state.data.products)
  
  const[visibleCards, setVisibleCards]= useState([data[11],data[7],data[14],data[4]])
    const handlePrevious =()=>{
        const curentIndex = data.indexOf(visibleCards[0])
        const nextCards = [data[(data.length+(curentIndex-1))%data.length],data[curentIndex],data[(curentIndex+1)%data.length],data[(curentIndex+2)%data.length]]
        setVisibleCards(nextCards)
    }
    const handleNext =()=>{
        const curentIndex = data.indexOf(visibleCards[0])
        const nextCards = [data[(curentIndex+1)%data.length],data[(curentIndex+2)%data.length],data[(curentIndex+3)%data.length],data[(curentIndex+4)%data.length]]
        setVisibleCards(nextCards)
    }
  return (
    <div className='w-screen flex flex-col gap-8 justify-center items-center py-5'>
      <h1 className='text-4xl text-center font-bold'>Related Products</h1>
      <div className='flex flex-row justify-between items-center w-full px-4 md:px-10 gap-2'>
      <button onClick={handlePrevious}><img src={SideButton} alt="Pre_button" className='h-[4rem] w-[4rem] outline-none' /></button>
        <div className='flex flex-row flex-wrap w-[20rem] md:w-full h-[33rem] overflow-hidden justify-center items-center gap-4 md:gap-4'>
        {
          visibleCards.map((product, index)=>{
             return <RelatedProductCard key={product.id + index} data={product}/> 
          })
        }
        </div>
        <button onClick={handleNext}><img src={SideButton} alt="Next_button" className='rotate-180 h-[4rem] w-[4rem] outline-none' /></button>
      </div>
    </div>
  )
}
