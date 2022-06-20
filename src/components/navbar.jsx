import React from 'react'

import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className='bg-intro-blue flex justify-between font-open-sans items-center py-10 px-3'>
      <img src={logo} alt="Logo" className='lg:ml-12 w-32' />
      <div className='flex justify-evenly lg:w-1/5 w-3/5 items-center'>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Features</a>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Team</a>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Sign In</a>
      </div>
    </nav>
  )
}
