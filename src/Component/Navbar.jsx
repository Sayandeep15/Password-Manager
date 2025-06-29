import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between py-2 px-4  items-center'>
        <h1 className='text-3xl'>Safe<span className='text-violet-600'>Nest</span></h1>
        <div>
            <ul className='flex gap-4 font-semibold cursor-pointer '>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>Home</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>About</li>
                <li className='hover:text-violet-300 hover:scale-105 transition-all ease-in'>Github</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar