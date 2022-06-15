import './App.css';
import Navbar from './components/navbar';
import intro from './assets/illustration-intro.png'
import iconAccessAnywhere from './assets/icon-access-anywhere.svg'
import iconSecurity from './assets/icon-security.svg'
import iconCollaboration from './assets/icon-collaboration.svg'
import iconAnyFile from './assets/icon-any-file.svg'
import illustProductive from './assets/illustration-stay-productive.png'
import iconArrow from './assets/icon-arrow.svg'
import TestimonialCard from './components/testimonial-card';
import EarlyAccessCard from './components/early-access-card';
import Footer from './components/footer';

import profile1 from './assets/profile-1.jpg'
import profile2 from './assets/profile-2.jpg'
import profile3 from './assets/profile-3.jpg'
import bgQuotes from './assets/bg-quotes.png'

function App() {

  const testimonialList = [
    {
      id: 1,
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
      image: profile1,
      desc: "Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
      id: 2,
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
      image: profile2,
      desc: "Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
      id: 3,
      name: "Iva Boyd",
      role: "Founder & CEO, Huddle",
      image: profile3,
      desc: "Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    }
  ]

  return (
    <div className='bg-main relative'>
      <Navbar />
      <section className='grid place-content-center place-items-center pb-5'>
        <img src={intro} alt="illustration intro" />
        <h1 className='font-raleway text-white text-3xl font-bold my-7'>All your files in one secure location, accessible anywhere</h1>
        <p className='text-center text-white font-open-sans w-3/5'>
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className='rounded-full bg-gradient-to-r from-cyan to-n-blue text-white px-20 py-3 mt-5'>Get Started
        </button>
      </section>
      <section className='grid gap-12 grid-cols-2 place-content-center place-items-center text-white pb-10'>
        <div className='grid place-items-center w-1/2'>
          <img src={iconAccessAnywhere} alt="access-anywhere" width={"100px"} height={"auto"}/>
          <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Access your files, anywhere</h2>
          <p className='font-open-sans text-center'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere</p>
        </div>
        <div className='grid place-items-center w-1/2'>
          <img src={iconSecurity} alt="access-anywhere" width={"100px"} height={"auto"}/>
          <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Security you can trust</h2>
          <p className='font-open-sans text-center'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files</p>
        </div>
        <div className='grid place-items-center w-1/2'>
          <img src={iconCollaboration} alt="access-anywhere" width={"100px"} height={"auto"}/>
          <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Real-time collaboration</h2>
          <p className='font-open-sans text-center'>Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required</p>
        </div>
        <div className='grid place-items-center w-1/2'>
          <img src={iconAnyFile} alt="access-anywhere" width={"100px"} height={"auto"}/>
          <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Store any type of file</h2>
          <p className='font-open-sans text-center'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
      </section>
      <section className='grid place-content-center mt-20'>
        <div className='flex items-center justify-between'>
          <img src={illustProductive} alt="stay productive illustration" />
          <div className='text-white w-1/2 grid gap-y-4'>
            <h1 className='font-raleway text-white text-4xl font-bold tracking-wider w-1/2'>Stay productive, wherever you are</h1>
            <p className='font-open-sans'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
            <p className='font-open-sans'>Securely share files and folders with friends, family, colleagues for live collaboration. No email attachments required</p>
            <a href='#' className='hover:text-white hover:border-white hover:fill-white'>
              <div className='flex items-center'>
                <p className='text-cyan pb-1 border-b-2 border-cyan hover:text-white hover:border-white'>See how Fylo works</p>
                {/* <svg className='w-20 h-20 fill-cyan hover:fill-white' viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <circle id="b" cx="6" cy="6" r="6"/>
                    <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1"/>
                    </filter>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 2)">
                      <use fill="#000" filter="url(#a)"/>
                      <use fill="#62E0D9"/>
                    </g>
                  </g>
                  <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"/>
                </svg> */}
                <img className='ml-3 w-6 h-6' src={iconArrow} alt="see how fylo works" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className='w-3/4 mx-auto mt-32 mb-64 relative p-10'>
        <img src={bgQuotes} alt="icon quote" className='absolute top-1 left-8' />
        <TestimonialCard testimonial = {testimonialList} />
      </section>
      <section className='mt-32 absolute bottom-96 left-0 right-0'>
        <EarlyAccessCard />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
