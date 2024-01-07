import React, { useState } from 'react'
import SlideWrap from '../components/SlideWrap'
import Categories from '../components/Categories'
import WhyPinkFlamingo from '../components/WhyPinkFlamingo'

export default function Home() {

  return (
    <div>
        <section>
        <SlideWrap/>
        </section>
        <section className='flex w-full items-center justify-center'>
        <Categories/>
        </section>
        <section className='flex w-full items-center justify-center py-5'>
          <WhyPinkFlamingo/>
        </section>
    </div>
  )
}
