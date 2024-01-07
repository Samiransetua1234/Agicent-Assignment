import React from 'react'
import R1 from '../assets/Rectangle 65.svg'
import R2 from '../assets/Rectangle 67.svg'
import R3 from '../assets/Rectangle 69.svg'
import SideButton from '../assets/Group 14141.svg'

export default function LatestBlogs() {
    const [data, setData] = useState([
        {
            img: R1,
            title: 'The Power of Mindfulness',
            desc:'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. '
        },
        {
            img: R2,
            title: 'Connecting with the Divine',
            desc:'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.  '
        },
        {
            img: R3,
            title: 'The Beauty of Forgiveness',
            desc:'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding. '
        },
        {
            img: R1,
            title: 'The Power of Mindfulness',
            desc:'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. '
        },
        {
            img: R2,
            title: 'Connecting with the Divine',
            desc:'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.  '
        },
        {
            img: R3,
            title: 'The Beauty of Forgiveness',
            desc:'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding. '
        }
])
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(data.length)
    const [currentPage, setCurrentPage] = useState(0)
    const handlePrevious =()=>{
        if(startIndex-3 >0){
            setStartIndex(startIndex-3)
            setCurrentPage(startIndex-3)
        }
        else{
            setStartIndex(0)
            setCurrentPage(0)
        }
    }
    const handleNext =()=>{
        if(startIndex+3 < data.length-3){
            setStartIndex(startIndex+3)
            setCurrentPage(startIndex+3)
        
        }else{
            setStartIndex(data.length-3)
            setCurrentPage(data.length-3)
        }
    }
  return (
    <div>
        <h1>Our Latest Blogs</h1>
      <div>
      <button><img src={SideButton} alt="Pre button" /></button>
      {
        data.map((blog, index)=>{
            
        })
      }
      <button><img src={SideButton} alt="Next button" className='rotate-180' /></button>
      </div>
    </div>
  )
}
