import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
        <div className='flex w-full px-2 justify-between items-center font-semibold'>
            <div className="flex items-center gap-2">
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className="flex items-center gap-4">
                <p className="bg-white text-black text-[15px] px-4 py-2 rounded-2xl hidden md:block">Esplora il Premium!</p>
                <p className="bg-black py-1 px-3 rounded-2xl text-[15px]">Scarica L'APP</p>
                <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">KL</p>
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4 px-3">
            <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
            <p className=" bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
            <p className=" bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
        </div>
    
    
    </>
  )
}

export default Navbar