import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

export default function Products() {
    const data = useSelector(state => state.data.products)
    
  return (
    <div className='grid grid-flow-row auto-rows-max md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-4 gap-y-8 gap-x-5 px-10 py-8'>
      {
        data.map((product, index)=>{
            
            return <ProductCard key={index+product.id} data={product}/>
        })
      }
    </div>
  )
}
