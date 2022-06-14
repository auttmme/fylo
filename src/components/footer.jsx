import React from 'react'

import logo from '../assets/logo.svg'
import iconLocation from '../assets/icon-location.svg'
import iconPhone from '../assets/icon-phone.svg'
import iconEmail from '../assets/icon-email.svg'

export default function Footer() {
  return (
    <div className='bg-footer pt-32 pb-20 px-20'>
			<img src={logo} alt="logo" />
			<div className='text-white mt-10 grid grid-cols-4 gap-4'>
				<div className="flex">
					<img src={iconLocation} alt="location" className='w-4 h-4 mt-2 mr-3' />
					<p className='font-open-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
				</div>
				<div className='mx-auto'>
					<div className="flex items-center">
						<img src={iconPhone} alt="phone number" className='w-4 h-4 mr-3' />
						<p className='font-open-sans'>+1-543-123-4567</p>
					</div>
					<div className="flex items-center">
						<img src={iconEmail} alt="email" className='w-4 h-4 mr-3' />
						<p className='font-open-sans'>examp@fylo.com</p>
					</div>
				</div>
				<div className='flex font-open-sans justify-evenly'>
					<ol className='grid gap-y-4'>
						<ul>About Us</ul>
						<ul>Jobs</ul>
						<ul>Press</ul>
						<ul>Blog</ul>
					</ol>
					<ol className='grid gap-y-4'>
						<ul>Contact Us</ul>
						<ul>Terms</ul>
						<ul>Privacy</ul>
					</ol>
				</div>
			</div>
		</div>
  )
}
