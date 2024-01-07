import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function TopNav() {
  return (
    <div className='border-2 border-gray-100 p-3'>
      <nav className='flex flex-row items-center font-semibold justify-center gap-5'>
        <div>Home</div>
        <div className='flex flex-row items-center'>Products <RiArrowDropDownLine className='text-3xl'/></div>
        <div className='flex flex-row items-center'>Services <RiArrowDropDownLine className='text-3xl'/></div>
        <div>Courses</div>
        <div>Blogs</div>
        <div>Videos</div>
        <div>Contact Us</div>
      </nav>
    </div>
  )
}
