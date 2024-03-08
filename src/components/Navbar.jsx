import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-purple-600 text-white py-4'>
        <div className="logo">
            <span className="font-bold mx-7 text-xl">myTasks</span>
        </div>
        <ul className="flex gap-8 mr-7">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar