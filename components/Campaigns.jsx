import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'
import { MdShoppingCart } from "react-icons/md"

const CampaignItem = () => {
  return (
    <>
      <div className='bg-secondary flex-1 rounded-md py-5 px-4 flex items-center gap-x-4'>
        <div className='relative md:w-44 md:h-44 w-36 h-36 after:content-[""] border-[5px] border-primary rounded-full overflow-hidden'>
          <Image src="/images/o1.jpg" alt='' className='hover:scale-105 transition-all' layout='fill' objectFit='cover' />
        </div>
        <div className='text-white my-1'>
          <Title addClass="text-2xl">Tasty Thursdays</Title>
          <div className='gap-x-2'>
            <span className='text-[40px]'>20%</span>
            <span className='text-sm inline-block ml-1'>Off</span>
          </div>
          <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all flex items-center gap-x-2'>
            Order Now <MdShoppingCart size={20} />
          </button>
        </div>
      </div>
    </>
  )
}

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto py-20 gap-6 flex-wrap'>
      <CampaignItem />
      <CampaignItem />
    </div>
  )
}

export default Campaigns
