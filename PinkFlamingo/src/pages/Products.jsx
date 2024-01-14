import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import Paggination from '../components/Paggination';
import { Link } from 'react-router-dom';

export default function Products() {
    const data = useSelector(state => state.data.products)
    
  return (
    <div className='px-10 lg:px-20 py-6 flex flex-col gap-2'>
      <p className='text-lg text-[#C1C1C1]'>{`Product > Dhoop Cones > Jar Cones`}</p>
      <div className='flex flex-row gap-4'>
        
        <select name="" id="" className='custom-select w-[5.5rem] border-2 border-[#B7B7B7] rounded-2xl'>
          <option value="">Price ($)</option>
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
        </select>
        <select name="" id="" className='custom-select w-[6rem] border-2 border-[#B7B7B7] rounded-2xl'>
          <option value="">Category</option>
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
        </select>
      </div>
      <div className='grid grid-flow-row auto-rows-max md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-4 gap-y-8 gap-x-5 pt-4 pb-10'>
      {
        data.map((product, index)=>{
            
            return <Link to='/productdetails' > <ProductCard key={index+product.id} data={product}/></Link>
        })
      }
    </div>
    <div className='w-full flex justify-center '>
    <Paggination/>
    </div>
    </div>
  )
}
