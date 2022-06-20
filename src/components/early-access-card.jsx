import React, { useState } from 'react'

export default function EarlyAccessCard() {

  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState('')

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateEmail = (e) => {
    setEmail(e.target.value)
    if (regex.test(email)) {
      setIsValid(true)
      setMessage('')
    }
    else {
      setIsValid(false)
      setMessage('Please enter a valid email!')
    }
  }

	return (
    <div className='text-white bg-intro-blue p-10 w-1/2 mx-auto shadow-2xl rounded-md'>
      <h2 className='font-raleway text-3xl font-bold tracking-wide text-center'>Get early access today</h2>
      <p className='text-center my-7 w-3/4 mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>
      <div className='flex items-center justify-center'>
        <input type="text" className='w-3/5 rounded-full px-5 py-3 mr-7 text-black focus:outline-0' placeholder='email@example.com' onChange={validateEmail} value={email}/>
        <button className='rounded-full bg-gradient-to-r from-cyan to-n-blue px-5 py-3 hover:bg-cyan hover:cursor-pointer'>Get Started For Free</button>
      </div>
      {(isValid == false && email !== '') && (
        <p className='text-error mt-3 ml-20'>{message}</p>
      )}
    </div>
  )
}
