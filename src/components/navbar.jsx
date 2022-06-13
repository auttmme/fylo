import React from 'react'

import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className='flex justify-between font-open-sans items-center py-10'>
      <img src={logo} alt="Logo" className='ml-12' />
      <div className='flex justify-evenly w-1/5 items-center'>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Features</a>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Team</a>
        <a className='text-white hover:underline hover:font-bold hover:cursor-pointer'>Sign In</a>
      </div>
    </nav>
  )
}
