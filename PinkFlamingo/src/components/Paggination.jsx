import React, { useState } from 'react'

export default function Paggination() {

    const [startIndex, setStartIndex] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)


  return (
    <div className='flex flex-row gap-4'>
      <button className={`text-[#E08468] ${startIndex === 1?'hidden':'inline-block'} cursor-pointer`} onClick={()=>setStartIndex(startIndex-1)}>Previous</button>
      <div className={`rounded-[50%] py-1 px-2.5 ${currentPage === 0 ? 'pbuttonbg text-white':'text-black'} cursor-pointer`} onClick={()=> setCurrentPage(0)}>{startIndex}</div>
      <div className={`rounded-[50%] py-1 px-2.5 ${currentPage === 1 ? 'pbuttonbg text-white':'text-black'} cursor-pointer`} onClick={()=> setCurrentPage(1)}>{startIndex+1}</div>
      <div className={`rounded-[50%] py-1 px-2.5 ${currentPage === 2 ? 'pbuttonbg text-white':'text-black'} cursor-pointer`} onClick={()=> setCurrentPage(2)}>{startIndex+2}</div>
      <div className={`rounded-[50%] py-1 px-2.5 ${currentPage === 3 ? 'pbuttonbg text-white':'text-black'} cursor-pointer`} onClick={()=> setCurrentPage(3)}>{startIndex+3}</div>
      <div className={`rounded-[50%] py-1 px-2.5 ${currentPage === 4 ? 'pbuttonbg text-white':'text-black'} cursor-pointer`} onClick={()=> setCurrentPage(4)}>{startIndex+4}</div>
      <button className='text-[#E08468] cursor-pointer' onClick={()=> setStartIndex(startIndex+1)}>Next</button>
    </div>
  )
}
