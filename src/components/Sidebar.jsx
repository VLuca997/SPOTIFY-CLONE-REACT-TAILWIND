import React from 'react'
import {assets} from '../assets/assets'
const Sidebar = () => {

    return (

      <div className='w-[25%] h-full m-2  flex-col gap-2 text-white hidden lg:flex mx-4'>


        <div className="bg-[#121212] h-[15%] rounded flex justify-around flex-col">
            <div className='items-center flex gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='items-center flex gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Cerca..</p>
            </div>
        </div>


        <div className="bg-[#121212] h-[85%] rounded ">
            <div className='p-4  items-center flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-bold'>La tua Libreria</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.arrow_icon} alt="" />
                    <img className='w-8' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Crea la tua prima Playlist!</h1>
                <p className='font-light'>Clicca per maggiori infrazioni</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Crea Playlist!</button>
            </div>
            <div className='p-4 bg-[#242424] mt-3 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Cerca i Podcast che fa per TE!</h1>
                <p className='font-light'>Clicca per maggiori infrazioni</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Cerca Podcast!</button>
            </div>
        </div>
        

       
      </div>
    )
}


export default Sidebar