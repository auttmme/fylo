import React from 'react'

export default function TestimonialCard(props) {
	return (
			<div className='bg-testi text-white w-1/4 rounded-md p-8 font-open-sans'>
				<p>{props.desc}</p>
				<div className='flex items-center mt-4'>
					<img className='rounded-full w-11 h-11 mr-3' src={props.image} alt="profile image" />
					<div>
						<p className='font-bold'>{props.name}</p>
						<p>{props.role}</p>
					</div>
				</div>
			</div>
	)
}
