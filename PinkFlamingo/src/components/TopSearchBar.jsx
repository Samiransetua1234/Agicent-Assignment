import React from 'react'
import Group from '../assets/Group.svg'
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

export default function TopSearchBar() {
    const pin = 110094
  return (
    <div className='w-full bg-[#fff] py-4 px-10 flex flex-row items-center justify-around'>
      <div className='flex flex-row items-center gap-2'>
        <img src={Group} alt="Logo" />
        <div className='flex flex-col text-[#FA5C98]'>
            <p className='text-xl font-semibold'>PINK<span className='text-[#301F4A]'>FLAMINGO</span></p>
            <p className='text-xs font-semibold'>TAGLINE GOES HERE</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center border-2 border-[#DC8064] rounded-[2px] pr-2'>
        <div className='flex flex-row items-center gap-2 bg-[#FA5C98] justify-center text-white rounded-r-sm px-2 py-1'>
            <IoLocationSharp className='text-xl'/>
            <p className='text-xs'>Deliver to <br/>
                <span className='text-xs'>{pin}</span></p>
        </div>
        <input type="text" placeholder='Search for medication & Wellness products..' className='w-96 p-2 outline-none placeholder:text-[#0E276933]'/>
        <IoIosSearch className='text-2xl text-[#0E276933]'/>
      </div>
      <IoCart className='text-4xl'/>
      <div className='flex flex-row items-center gap-2'>
        <LuUser2 className='text-4xl text-white bg-[#FA5C98] rounded-[50%] p-2'/>
        <p>SIGN IN / SIGN UP</p>
      </div>
    </div>
  )
}
