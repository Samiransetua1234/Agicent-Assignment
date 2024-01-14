import React from 'react'
import { useSelector } from 'react-redux'

export default function RelatedProducts() {

  const data = useSelector(state => state.data.products)

  return (
    <div>
      <h1>Related Products</h1>
    </div>
  )
}
