import React, { useState } from 'react'
import Logo from '../ui/Logo'
import Navbar from './Navbar'
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import Search from '../ui/Search'
import { GiHamburgerMenu } from "react-icons/gi"


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  const [menuModal, setMenuModal] = useState(false)

  return (
    <div className='bg-headerBg h-[5.5rem]'>
      <div className='flex justify-between h-24 container mx-auto text-white'>
        <div className='flex items-center'>
          <Logo />
        </div>
        <div className='flex items-center'>
          <Navbar menuModal={menuModal} setMenuModal={setMenuModal} />
        </div>
        <div className='flex items-center gap-x-4'>
          <a>
            <FaUserAlt className='hover:text-btnBg transition-all' />
          </a>
          <a>
            <FaShoppingCart className='hover:text-btnBg transition-all' />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className='hover:text-btnBg transition-all' />
          </button>
          <a href='#' className='md:inline-block hidden'>
            <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all'>Order Online</button>
          </a>
          <button className='sm:hidden inline-block' onClick={() => setMenuModal(true)}>
            <GiHamburgerMenu className='text-xl hover:text-btnBg transition-all' />
          </button>
          <div></div>
        </div>
      </div>
      {isSearchModal &&
        (
          <Search setIsSearchModal={setIsSearchModal} />
        )
      }
    </div>
  )
}

export default Header
