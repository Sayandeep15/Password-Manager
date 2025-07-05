import React from 'react'
import { NavLink } from 'react-router-dom'
import { TbPasswordFingerprint } from "react-icons/tb";
import { ImGithub } from "react-icons/im";

const Navbar = () => {
  return (
    <div className='text-white flex justify-between py-2 px-4  items-center'>
      <h1 className='text-3xl flex'>Safe<span className='text-violet-600 flex flex-row gap-2 items-center'>Nest <TbPasswordFingerprint /></span></h1>
      <div>
        <nav className='flex gap-4 font-semibold cursor-pointer items-center'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group relative px-2 py-1 text-white transition-all duration-200
     ${isActive ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-violet-500 after:transition-transform after:duration-300" :
                "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-violet-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `group relative px-2 py-1 text-white transition-all duration-200
     ${isActive ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-violet-500 after:transition-transform after:duration-300" :
                "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-violet-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"}`
            }
          >
            Lists
          </NavLink>
          
          <NavLink className=" flex items-center gap-1  hover:scale-105 transition-all ease-in" target='_blank' to="https://github.com/Sayandeep15/Password-Manager">Github<ImGithub /></NavLink>
        </nav>
        {/* <ul className='flex gap-4 font-semibold cursor-pointer '>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>Home</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>About</li>
                <li className=' hover:scale-105 transition-all ease-in '><a className='flex items-center gap-1 border-1 rounded-full py-1 px-2' target='_blank' href="https://github.com/Sayandeep15/Password-Manager">Github<ImGithub /></a></li>
            </ul> */}
      </div>
    </div>
  )
}

export default Navbar