import React, { useState } from 'react'
import DropDownArrow from '../assets/dropdown.svg'
import { LuUser2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export default function SideNav({data}) {
    const[navoption, setNavoption] = useState('Home')
  
    const { setShowSideNav} = data
    const handleNavClick= (option)=>{
      setNavoption(option)
    }
  return (
    <div className='flex relative flex-col px-4 py-10 gap-10 h-screen bg-white w-2/3 lg:hidden'>
      <RxCross2 className='absolute top-3 right-2 ' onClick={()=> setShowSideNav(false)}/>
      <div className="flex flex-row items-center gap-2">
          <LuUser2 className="text-4xl text-white bg-[#FA5C98] rounded-[50%] p-2" />
          <p>SIGN IN / SIGN UP</p>
        </div>
     <nav className='flex flex-col w-full items-start font-semibold justify-start  gap-5'>
        <span className={`${navoption === 'Home' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Home')}>Home</span>
        <span className={`flex flex-row w-full justify-between items-center gap-2 cursor-pointer ${navoption === 'Products' && 'text-[#FA5C98]'}`} onClick={()=>{handleNavClick('Products')}}>Products <img src={DropDownArrow} alt="arrow" /></span>
        <span className={`flex flex-row w-full justify-between items-center gap-2 cursor-pointer ${navoption === 'Services' && 'text-[#FA5C98]'}`} onClick={()=>handleNavClick('Services')}>Services <img src={DropDownArrow} alt="arrow" /></span>
        <span className={`${navoption === 'Courses' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Courses')}>Courses</span>
        <span className={`${navoption === 'Blogs' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Blogs')}>Blogs</span>
        <span className={`${navoption === 'Videos' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Videos')}>Videos</span>
        <span className={`${navoption === 'Contact Us' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Contact Us')}>Contact Us</span>
      </nav>
    </div>
  )
}
