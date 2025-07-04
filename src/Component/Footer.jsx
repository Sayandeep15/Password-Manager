import React from 'react'
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className=' bg-[#0c011d8f] w-full text-white fixed mt-4 top-[91%] transform translate-y-1/2 flex justify-around py-2.5'>
        <p className='text-xs flex items-center gap-1'><FaRegCopyright />2025 | Developed by Syanadeep Dutta  </p>
        <ul className='flex items-center gap-4 font-semibold cursor-pointer '>
            <li className=' hover:scale-105 transition-all ease-in '><a className=' ' target='_blank' href="https://github.com/Sayandeep15/Password-Manager"><ImGithub /></a></li>
            <li className=' hover:scale-105 transition-all ease-in '><a className=' ' target='_blank' href="https://www.linkedin.com/in/sayandeep-dutta-profile/"><FaLinkedinIn /></a></li>
        </ul>
    </div>
  )
}

export default Footer