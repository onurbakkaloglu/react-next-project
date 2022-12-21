import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import Title from './Title'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    )
  };

  return (
    <div className='h-screen w-full container mx-auto -mt-[88px]'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative h-full w-full'>
          <Image src="/images/hero-bg.jpg" alt='' layout='fill' objectFit='cover' />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className='z-30 mt-48 text-white flex flex-col items-start gap-y-10'>
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className='text-sm sm:2/5 w-full'>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
            </p>
            <button className='bg-primary rounded-full py-2 px-6 '>Order Noe</button>
          </div>
        </div>
        <div>
          <div className='z-30 mt-48 text-white flex flex-col items-start gap-y-10'>
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className='text-sm sm:2/5 w-full'>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
            </p>
            <button className='bg-primary rounded-full py-2 px-6 '>Order Noe</button>
          </div>
        </div>
      </Slider>

    </div>
  )
}

export default Carousel
