import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai"
import Link from 'next/link'

const Navbar = ({menuModal, setMenuModal}) => {
    return (
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto h-screen w-full sm:text-white text-black sm:bg-transparent
         bg-white sm:flex hidden ${menuModal === true && "!grid place-content-center"}`}>
            <ul className='flex gap-x-8 sm:flex-row flex-col items-center'>
                <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                    <Link href="/">Home</Link>
                </li>
                <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                    <Link href="/menu">Menu</Link>
                </li>
                <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                    <Link href="/about">About</Link>
                </li>
                <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>
                    <Link href="/reservation">Book Table</Link>
                </li>
            </ul>
            {menuModal && (
            <button className='absolute top-4 right-4 z-50' onClick={() => setMenuModal(false)}>
              <AiFillCloseCircle size={25} className='text-primary transition-all' />
            </button>
          )}
        </nav>
    )
}

export default Navbar
