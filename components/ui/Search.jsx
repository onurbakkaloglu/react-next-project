import React from 'react'
import Title from './Title'
import OutsideClickHandler from 'react-outside-click-handler'
import Image from 'next/image'
import {AiFillCloseCircle} from "react-icons/ai"

const Search = ({ setIsSearchModal }) => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content[""] after:w-screen after:h-screen after:bg-white after:fixed after:top-0 after:left-0 after:opacity-60 first-of-type:h-screen grid place-content-center'>
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className='w-full h-full grid place-content-center'>
                    <div className='relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl'>
                        <Title addClass="text-4xl text-center">
                            Title
                        </Title>
                        <input type="text" placeholder='Search..' className='border w-full my-10' />
                            <ul>
                                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                                    <div className='relative flex items-center'>
                                        <Image src="/images/pizza.png" alt='' width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                                    <div className='relative flex items-center'>
                                        <Image src="/images/pizza.png" alt='' width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                                    <div className='relative flex items-center'>
                                        <Image src="/images/pizza.png" alt='' width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                            </ul>
                            <button className='absolute top-4 right-4' onClick={() => setIsSearchModal(false)}>
                                <AiFillCloseCircle size={25} className='text-primary transition-all' />
                            </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search
