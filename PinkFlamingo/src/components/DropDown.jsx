import React, { useState } from 'react'
import DropDownArrow from '../assets/dropdown.svg'

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
        <p className={`flex flex-row w-full justify-between px-5 py-1 hover:bg-[#FFEDF461] ${option === 'Dhoop Cones'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Dhoop Cones')} onMouseEnter={()=> setShowSubOption(true)}>Dhoop Cones <img src={DropDownArrow} alt="" /></p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Holders'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Incense Holders')} onMouseEnter={()=>setShowSubOption(false)}>Incense Holders</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Yantras'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Yantras')} onMouseEnter={()=>setShowSubOption(false)}>Yantras</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Sticks'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Incense Sticks')} onMouseEnter={()=>setShowSubOption(false)}>Incense Sticks</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Pooja Thali Sets'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Pooja Thali Sets')} onMouseEnter={()=>setShowSubOption(false)}>Pooja Thali Sets</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Shankh'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Shankh')} onMouseEnter={()=>setShowSubOption(false)}>Shankh</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Kalash'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Kalash')} onMouseEnter={()=>setShowSubOption(false)}>Kalash</p>
        <p className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Book Rests'&&'text-[#FA5C98] bg-[#FFEDF461]'}`} onClick={()=>handelOption('Book Rests')} onMouseEnter={()=>setShowSubOption(false)}>Book Rests</p>
      </div>
      <div className={`w-[10rem] ${showSubOption ? 'flex':'hidden'} flex-col items-start text-start text-sm gap-2 px-5 py-3`}>
        <p className={`${subOption === 'Jar Cones' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Jar Cones')}>Jar Cones </p>
        <p className={`${subOption === 'Chandan Bamboo Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Chandan Bamboo Dhoop')}>Chandan Bamboo Dhoop</p>
        <p className={`${subOption === 'Backflow Cone Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Backflow Cone Dhoop')}>Backflow Cone Dhoop</p>
        <p className={`${subOption === 'Buddha Red Incense Cone' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Buddha Red Incense Cone')}>Buddha Red Incense Cone</p>
        <p className={`${subOption === 'ountain Sandal Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('ountain Sandal Dhoop')}>ountain Sandal Dhoop</p>
        <p className={`${subOption === 'Cone Sandal Dhoop' && 'text-[#FA5C98]'} hover:text-[#FA5C98]`} onClick={()=>handelSubOption('Cone Sandal Dhoop')}>Cone Sandal Dhoop</p>
      </div>
    </div>
  )
}
