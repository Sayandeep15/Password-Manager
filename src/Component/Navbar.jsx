import React, { useContext ,useEffect} from "react";
import { tableContext } from "../Context/Context";
import { NavLink, useLocation } from 'react-router-dom'

// import { TbPasswordFingerprint } from "react-icons/tb";
import { ImGithub } from "react-icons/im";
import logo from '../assets/applogo.png';



const Navbar = () => {
  const location = useLocation();
  const { passwordArray,isNotified, setIsNotified } = useContext(tableContext);

    // Clear notification when on /vault
  useEffect(() => {
    if (location.pathname === "/vault") {
      setIsNotified(false);
    }
  }, [location]);

  return (
    <div className='text-white flex justify-between  px-4  items-center'>
      <div className='flex flex-row items-center justify-center relative'>
        <img src={logo} sizes='128x128' className=' my-auto h-[45px]  ' />
        <h1 className='text-3xl absolute left-9 top-0.5'>Safe<span className='text-violet-600'>Nest </span></h1>
      </div>
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
            to="/manager"
            className={({ isActive }) =>
              `group relative px-2 py-1 text-white transition-all duration-200
     ${isActive ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-violet-500 after:transition-transform after:duration-300" :
                "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-violet-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"}`
            }
          >
            Manage
          </NavLink>

          <div className="relative">
            <NavLink
              to="/vault"
              className={({ isActive }) =>
                `group relative px-2 py-1 text-white transition-all duration-200
     ${isActive ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-100 after:bg-violet-500 after:transition-transform after:duration-300" :
                  "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-violet-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"}`
              }
            >
              Vault
            </NavLink>
          {isNotified  && (
              <span className="absolute top-0 -right-1 w-2 h-2 bg-violet-500 rounded-full shadow-md animate-pulse" />
            )}
          </div>

          <NavLink className=" flex items-center gap-1  hover:scale-105 transition-all ease-in" target='_blank' to="https://github.com/Sayandeep15/Password-Manager">Github<ImGithub /></NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar