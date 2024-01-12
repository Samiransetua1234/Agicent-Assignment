import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function ProductDetail() {
  const[count, setCount] = useState(1)
  const product = useSelector(state=>state.data.product_details)
  const {id, img, brand, scent, availability, title, key_info, desc, mrp, disc_price, rating, product_info, reviews} = product
  
  return (
    <div className='flex flex-col py-8 px-20 justify-center items-center w-screen'>
      <p className='text-lg w-full text-start text-[#C1C1C1]'>{`Product > Dhoop Cones > Jar Cones`}</p>
      <div className='flex flex-row w-full'>
        <div className='flex flex-row w-1/2 h-[42rem]'>
          <div className='flex flex-col w-1/6 gap-5'>
            <img src={img[1]} alt="image1" className='w-full h-20'/>
            <img src={img[2]} alt="image2" className='w-full'/>
            <img src={img[3]} alt="image3" className='w-full'/>
            <img src={img[4]} alt="image4" className='w-full'/>
          </div>
          <img src={img[1]} alt="image0" className='w-5/6 h-[41rem]'/>
        </div>
        <div >
          <p><span>Brand:</span>{brand}</p>
          <p><span>Scent:</span>{scent}</p>
          <p><span>Availability:</span>{`Only ${availability} in stock`}</p>
          <h1>{title}</h1>
          <div>
            <ul className='list-disc'>
              <li>{key_info.p1}</li>
              <li>{key_info.p2}</li>
              <li>{key_info.p3}</li>
            </ul>
          </div>
          <div>
            <p>USD(incl. of all taxes)</p>
            <div>
              <p>{disc_price}</p>
              <p>{mrp}</p>
            </div>
          </div>
          <div>
            <div>
              <button onClick={()=> setCount(count===1? 1: count-1)}>-</button>
              <span>{count}</span>
              <button onClick={()=> setCount(count+1)}>+</button>
            </div>
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[70vw]'>
        <div className='flex flex-row justify-center py-3 gap-10'>
          <p>Description</p>
          <p>Product Information</p>
          <p>Reviews</p>
        </div>
        <div className='overflow-auto h-44'>
          <div className='px-5 py-3'>
            {desc}
          </div>
          {/* <div>
            {product_info}
          </div>
          <div>
            {reviews}
          </div> */}
        </div>
      </div>
    </div>
  )
}
