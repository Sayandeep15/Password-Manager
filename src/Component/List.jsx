import React from 'react'

const List = () => {
  return (
    <div className='text-white my-4 w-full bg-amber-950 p-2'>
        <div className="heading w-full flex justify-between items-center px-1">
                    <h1 className="text-xl mb-2">
                      Your{" "}
                      <span className="text-violet-600 font-medium  items-center">Passwords</span>{" "}
                    </h1>
        
        
                    {/* DELETE ALL BUTTON */}
                    {/* <button onClick={deleteAll} className="flex gap-1 items-center font-semibold text-violet-500 hover:text-red-500 hover:scale-105 transition-all ease-in cursor-pointer">Delete All <MdDeleteOutline /> </button> */}
                  </div>
    </div>
  )
}

export default List