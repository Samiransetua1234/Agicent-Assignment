import React, { useState } from 'react'
import R1 from '../assets/Rectangle 65.png'
import R2 from '../assets/Rectangle 67.png'
import R3 from '../assets/Rectangle 69.png'
import SideButton from '../assets/Group 14141.svg'
import BlogCard from './BlogCard'

export default function LatestBlogs() {
    const [data, setData] = useState([
        {
            img: R1,
            title: '1 The Power of Mindfulness',
            desc:'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. ',
            date:'08-05-2022'
        },
        {
            img: R2,
            title: '2 Connecting with the Divine',
            desc:'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.  ',
            date:'11-06-2022'
        },
        {
            img: R3,
            title: '3 The Beauty of Forgiveness',
            desc:'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding. ',
            date:'11-07-2022'
        },
        {
            img: R1,
            title: '4 The Power of Mindfulness',
            desc:'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. ',
            date:'08-05-2022'
        },
        {
            img: R2,
            title: '5 Connecting with the Divine',
            desc:'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.  ',
            date:'11-06-2022'
        },
        {
            img: R3,
            title: '6 The Beauty of Forgiveness',
            desc:'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding. ',
            date:'11-07-2022'
        }
])
    const[visibleCards, setVisibleCards]= useState([data[0],data[1],data[2]])
    const handlePrevious =()=>{
        const curentIndex = data.indexOf(visibleCards[0])
        const nextCards = [data[(data.length+(curentIndex-1))%data.length],data[curentIndex],data[(curentIndex+1)%data.length]]
        setVisibleCards(nextCards)
    }
    const handleNext =()=>{
        const curentIndex = data.indexOf(visibleCards[0])
        const nextCards = [data[(curentIndex+1)%data.length],data[(curentIndex+2)%data.length],data[(curentIndex+3)%data.length]]
        setVisibleCards(nextCards)
    }
  return (
    <div className='w-screen flex flex-col gap-8 justify-center items-center py-5'>
        <h1 className='text-5xl text-center font-bold'>Our Latest Blogs</h1>
      <div className='flex flex-row justify-between items-center w-full px-4 md:px-10 gap-2'>
      <button onClick={handlePrevious}><img src={SideButton} alt="Pre_button" className='h-[4rem] w-[4rem]' /></button>
        <div className='flex flex-row flex-wrap w-[25rem] md:w-full h-[38.5rem] md:h-[38rem] overflow-hidden justify-center items-center gap-2 md:gap-4'>
        {
        visibleCards.map((blog)=>{
            
                return <BlogCard key={Math.random()*10000} data={blog}/>
            
        })
      }
        </div>
      <button onClick={handleNext}><img src={SideButton} alt="Next_button" className='rotate-180 h-[4rem] w-[4rem]' /></button>
      </div>
    </div>
  )
}
