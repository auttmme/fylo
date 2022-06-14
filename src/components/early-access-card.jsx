import React from 'react'

export default function EarlyAccessCard() {
	return (
    <div className='text-white bg-intro-blue p-9 w-3/4 mx-auto shadow-2xl rounded-md'>
      <h2 className='font-raleway text-3xl font-bold tracking-wide text-center'>Get early access today</h2>
      <p className='text-center my-5 w-1/2 mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>
      <div className='flex items-center justify-center'>
        <input type="text" className='w-3/5 rounded-full px-5 py-3 mr-7 text-black' placeholder='email@example.com' />
        <button className='rounded-full bg-gradient-to-r from-cyan to-n-blue px-5 py-3'>Get Started For Free</button>
      </div>
    </div>
  )
}
