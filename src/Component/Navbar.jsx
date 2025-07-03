import React from 'react'
import { TbPasswordFingerprint } from "react-icons/tb";
import { ImGithub } from "react-icons/im";

const Navbar = () => {
  return (
    <div className='text-white flex justify-between py-2 px-4  items-center'>
        <h1 className='text-3xl flex'>Safe<span className='text-violet-600 flex flex-row gap-2 items-center'>Nest <TbPasswordFingerprint/></span></h1>
        <div>
            <ul className='flex gap-4 font-semibold cursor-pointer '>
                {/* <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>Home</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>About</li> */}
                <li className=' hover:scale-105 transition-all ease-in '><a className='flex items-center gap-1 border-1 rounded-full py-1 px-2' target='_blank' href="https://github.com/Sayandeep15/Password-Manager">Github<ImGithub /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar