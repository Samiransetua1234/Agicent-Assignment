import React, { useState } from 'react'
import DropDownArrow from '../assets/dropdown.svg'

export default function TopNav({data}) {
  const[navoption, setNavoption] = useState('Home')
  
  const {showDropDown, setShowDropDown} = data
  const handleNavClick= (option)=>{
    setNavoption(option)
    if(option === 'Products') setShowDropDown(!showDropDown)
    else setShowDropDown(false)
  }
  return (
    <div className='border-2 border-gray-300 p-3'>
      <nav className='flex flex-row items-center font-semibold justify-center gap-5'>
        <span className={`${navoption === 'Home' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Home')}>Home</span>
        <span className={`flex flex-row items-center gap-2 cursor-pointer ${navoption === 'Products' && 'text-[#FA5C98]'}`} onClick={()=>{handleNavClick('Products')}}>Products <img src={DropDownArrow} alt="arrow" className='rotate-90' /></span>
        <span className={`flex flex-row items-center gap-2 cursor-pointer ${navoption === 'Services' && 'text-[#FA5C98]'}`} onClick={()=>handleNavClick('Services')}>Services <img src={DropDownArrow} alt="arrow" className='rotate-90' /></span>
        <span className={`${navoption === 'Courses' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Courses')}>Courses</span>
        <span className={`${navoption === 'Blogs' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Blogs')}>Blogs</span>
        <span className={`${navoption === 'Videos' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Videos')}>Videos</span>
        <span className={`${navoption === 'Contact Us' && 'text-[#FA5C98]'} cursor-pointer`} onClick={()=>handleNavClick('Contact Us')}>Contact Us</span>
      </nav>
    </div>
  )
}
