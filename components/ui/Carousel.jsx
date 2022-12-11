import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (
    <div className='h-[calc(100vh_-_88px)]'>
      <div className='relative h-full w-full'>
        <Image src="/images/hero-bg.jpg" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className='absolute top-0 left-0 container mx-auto w-full text-white'>
        <Title>Fast Food Restaurant</Title>
        <p>
        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
        </p>
        <button className='btn-primary'>Order Noe</button>
      </div>
    </div>
  )
}

export default Carousel
