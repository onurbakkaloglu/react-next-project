import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className='flex px-10 min-h-[calc(100vh_-_433px)]'>
      <div className='w-72'>
        <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
          <Image src="/images/client2.jpg" width={100} height={100} alt='' className='rounded-full' />
          <b className='text-2xl mt-1'>Onur Bakkaloğlu</b>
        </div>
        <ul className='font-semibold'>
          <li className='border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all'>
            <i className='fa fa-home'></i>
            <button className='ml-1'>Account</button>
          </li>
          <li className='border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all'>
            <i className='fa fa-key'></i>
            <button className='ml-1'>Password</button>
          </li>
          <li className='border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all'>
            <i className='fa fa-motorcycle'></i>
            <button className='ml-1'>Orders</button>
          </li>
          <li className='border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all'>
            <i className='fa fa-sign-out'></i>
            <button className='ml-1'>Exit</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default index
