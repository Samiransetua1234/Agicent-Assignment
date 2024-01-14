import React, { useState } from 'react'
import DropDownArrow from '../assets/dropdown.svg'
import { Link } from 'react-router-dom';

export default function DropDown({setShowDropDown}) {
    const[option, setOption] = useState('Dhoop Cones')
    const[showSubOption,setShowSubOption] = useState(false)
    const[subOption, setSubOption] = useState('Jar Cones')
    const handelOption = (op)=>{
        setOption(op)
        op != 'Dhoop Cones' && setShowDropDown(false)
    }
    const handelSubOption=(sop)=>{
        setOption('Dhoop Cones')
        setSubOption(sop)
        setShowDropDown(false)
    }
  return (
    <div className='flex flex-row bg-white rounded-sm shadow-sm'>
      <div className='w-[12rem] flex flex-col items-start gap-2 dropbox-shadow  py-3'>
        <p className={`flex flex-row w-full justify-between px-5 py-1 hover:bg-[#FFEDF461] ${option === 'Dhoop Cones'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Dhoop Cones')} onMouseEnter={()=> setShowSubOption(true)}>
        <Link to='/products' >  Dhoop Cones </Link><img src={DropDownArrow} alt="" /></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Holders'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Incense Holders')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Incense Holders</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Yantras'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Yantras')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Yantras</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Sticks'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Incense Sticks')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Incense Sticks</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Pooja Thali Sets'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Pooja Thali Sets')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Pooja Thali Sets</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Shankh'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Shankh')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Shankh</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Kalash'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Kalash')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Kalash</Link></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Book Rests'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Book Rests')} onMouseEnter={()=>setShowSubOption(false)}><Link to='/products' >Book Rests</Link></p>
      </div>
      <div className={`w-[10rem] ${showSubOption ? 'flex':'hidden'} flex-col items-start text-start text-sm gap-2 px-5 py-3`}>
        <p className={`${subOption === 'Jar Cones' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Jar Cones')}><Link to='/products' >Jar Cones </Link></p>
        <p className={`${subOption === 'Chandan Bamboo Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Chandan Bamboo Dhoop')}><Link to='/products' >Chandan Bamboo Dhoop</Link></p>
        <p className={`${subOption === 'Backflow Cone Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Backflow Cone Dhoop')}><Link to='/products' >Backflow Cone Dhoop</Link></p>
        <p className={`${subOption === 'Buddha Red Incense Cone' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Buddha Red Incense Cone')}><Link to='/products' >Buddha Red Incense Cone</Link></p>
        <p className={`${subOption === 'ountain Sandal Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('ountain Sandal Dhoop')}><Link to='/products' >ountain Sandal Dhoop</Link></p>
        <p className={`${subOption === 'Cone Sandal Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Cone Sandal Dhoop')}><Link to='/products' >Cone Sandal Dhoop</Link></p>
      </div>
    </div>
  )
}
