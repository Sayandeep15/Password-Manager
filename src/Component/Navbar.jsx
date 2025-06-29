import React from 'react'
import { TbPasswordFingerprint } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='text-white flex justify-between py-2 px-4  items-center'>
        <h1 className='text-3xl flex'>Safe<span className='text-violet-600 flex flex-row gap-2 items-center'>Nest <TbPasswordFingerprint/></span></h1>
        <div>
            <ul className='flex gap-4 font-semibold cursor-pointer '>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>Home</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>About</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in flex items-center gap-0.5'>Github<HiOutlineExternalLink /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar