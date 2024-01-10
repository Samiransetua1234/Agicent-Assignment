import React from 'react'
import RatingSystem from './RatingSystem'

export default function ProductCard({data}) {
    const {id, img, desc, title, disc_price, rating} = data
  return (
    <div className='flex flex-col gap-2'>
      <img src={img} alt={`image${id}`} />
      <div className='p-1'>
        <p className='text-xl font-semibold text-[#FA5C98]'>{title}</p>
        <p>{desc}</p>
        <p><RatingSystem rating={rating}/></p>
        <p className='text-xl text-[#C0590E] font-bold'>{`$${disc_price}`}</p>
      </div>
    </div>
  )
}
