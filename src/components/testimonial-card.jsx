import React from 'react'

export default function TestimonialCard(props) {
  const testimonial = props.testimonial
  
	return (
    <div className='grid grid-cols-3 gap-8 shadow-md z-20 relative'>
      {testimonial.map((testi) => (
        <div className='bg-testi text-white rounded-lg p-8 font-open-sans'>
          <p className='font-open-sans'>{testi.desc}</p>
          <div className='flex items-center mt-4'>
            <img className='rounded-full w-11 h-11 mr-3' src={testi.image} alt="profile image" />
            <div>
              <p className='font-bold'>{testi.name}</p>
              <p className='font-open-sans'>{testi.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
	)
}
