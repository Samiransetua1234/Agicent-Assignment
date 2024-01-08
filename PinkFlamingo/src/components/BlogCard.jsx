import React from 'react'

export default function BlogCard(props) {
    const{img, title, desc , date} = props.data

  return (
    <div className='flex flex-col gap-4 w-[24rem] h-[38rem] md:h-[37rem] md:w-[26rem] shadow-md rounded-md'>
      <img src={img} alt="blogimg" />
      <div className='flex flex-col p-4 justify-center items-center gap-4'>
        <h3 className='font-bold'>{title}</h3>
        <p>{desc}</p>
        <button className='cardbutton py-2 px-5 text-white text-sm'>Read More</button>
      </div>
      <p className='text-gray-300 text-sm px-4 py-3'>{date}</p>
    </div>
  )
}
