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
    <div className='text-white bg-intro-blue p-8 lg:w-1/2 w-11/12 mx-auto shadow-2xl rounded-md'>
      <h2 className='font-raleway text-3xl font-bold tracking-wide text-center'>Get early access today</h2>
      <p className='text-center my-7 md:w-3/4 mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>
      <div className='flex items-center md:justify-center flex-col md:flex-row'>
        <input type="text" className='md:w-3/5 w-full rounded-full px-5 py-3 md:mr-7 mb-5 md:mb-0 text-black focus:outline-0' placeholder='email@example.com' onChange={validateEmail} value={email}/>
        <button className='w-full md:w-1/4 rounded-full bg-gradient-to-r from-cyan to-n-blue py-3 hover:cursor-pointer hover:to-cyan'>Get Started For Free</button>
      </div>
      {(isValid == false && email !== '') && (
        <p className='text-error mt-3 md:ml-10 lg:ml-14'>{message}</p>
      )}
    </div>
  )
}
