import React from 'react'
import Logo from '../assets/Group 14113.svg'
import Check1 from '../assets/check 1.svg'

export default function WhyPinkFlamingo() {
  return (
    <div className='flex flex-col py-8 w-10/12 bg-[#FFF2F8] gap-4 items-center justify-center'>
        <h1 className='text-5xl font-bold'>Why PINK FLAMINGO ?</h1>
      <div className='flex flex-row w-8/12 justify-between items-center gap-10'>
        <img src={Logo} alt="logo"/>
        <div>
            <div className='flex flex-row gap-2'><img src={Check1} alt="" /> <p>Spirituality can provide them with a framework for understanding the universe and their role in it</p></div>
            <div className='flex flex-row gap-2'><img src={Check1} alt="" /> <p>Coping with stress and uncertainty</p></div>
            <div className='flex flex-row gap-2'><img src={Check1} alt="" /> <p>Spirituality can be a path to personal growth and self-discovery</p></div>
            <div className='flex flex-row gap-2'><img src={Check1} alt="" /> <p>Spirituality can provide people with a sense of community and connection with others</p></div>
        </div>
      </div>
    </div>
  )
}
