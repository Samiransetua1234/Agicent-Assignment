import React, { useState } from 'react'
import { BsCart } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";


export default function RelatedProductCard({data}) {
  const{id, img, title, disc_price, stock} = data

  const[addToFav, setAddToFav] = useState(false)

  return (
    <div className='flex flex-col gap-4  w-[19rem] justify-center items-center px-2 py-4'>
      <div className='flex flex-col gap-2 w-full h-[28rem] justify-between items-center px-2 py-3 border-2 border-[#E6896DCC] rounded-[8px]'>
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='text-xs bg-green-500 rounded-md px-1.5'>New</p>
          <p className='p-1.5 rounded-[50%] border-[1px] border-[#FFF2F8] cursor-pointer' onClick={()=> setAddToFav(!addToFav)}><MdOutlineFavorite fill={addToFav? '#FA5C98' : '#D7D7D7'} className='text-2xl'/></p>
        </div>
        <img src={img} alt={`Image${id}`} />
        <button className={`flex flex-row items-center justify-center gap-2 px-5 font-medium text-white py-2 ${stock===0?'bg-[#C6C6C6]': 'cardbutton'} rounded-[7px] outline-none w-fit`}><BsCart/>{stock === 0 ? 'Out Of Stock':'Add To Cart'}</button>
      </div>
      <div className='w-full flex flex-col gap-1 justify-center items-center'>
      <h1 className='font-semibold uppercase text-[#FA5C98]'>{title}</h1>
      <p className='text-[#E28569] font-bold'>{`$${disc_price}`}</p>
      </div>
    </div>
  )
}
