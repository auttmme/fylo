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
import bgCurvyDesktop from './assets/bg-curvy-desktop.svg'

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
    <div className='relative'>
      <Navbar />
      <div className="relative">
        <section className='bg-intro-blue grid place-content-center place-items-center pb-60'>
          <div className='z-10 grid place-content-center place-items-center'>
            <img src={intro} alt="illustration intro" />
            <h1 className='font-raleway text-white text-4xl font-bold my-7 w-3/4 text-center'>All your files in one secure location, accessible anywhere.</h1>
            <p className='text-center text-white font-open-sans w-3/5'>
              Fylo stores all your most important files in one secure location.
              <br />
              Access them wherever you need, share and collaborate with friends family, and co-workers.
            </p>
            <button className='rounded-full bg-gradient-to-r from-cyan to-n-blue text-white px-20 py-3 mt-5 hover:cursor-pointer hover:to-cyan'>Get Started
            </button>
          </div>
        </section>
        <img src={bgCurvyDesktop} alt="background curvy desktop" className='mx-auto absolute min-w-full lg:top-[500px]'/>
        <section className="bg-main">
          <div className='grid gap-20 grid-cols-2 place-content-center place-items-center text-white pb-10 w-3/5 mx-auto'>
              <div className='z-10 grid place-items-center w-3/4'>
                <img src={iconAccessAnywhere} alt="access-anywhere" />
                <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Access your files, anywhere</h2>
                <p className='font-open-sans text-center'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere</p>
              </div>
              <div className='z-10 grid place-items-center w-3/4'>
                <img src={iconSecurity} alt="access-anywhere" />
                <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Security you can trust</h2>
                <p className='font-open-sans text-center'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files</p>
              </div>
              <div className='grid place-items-center w-3/4'>
                <img src={iconCollaboration} alt="access-anywhere" />
                <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Real-time collaboration</h2>
                <p className='font-open-sans text-center'>Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required</p>
              </div>
              <div className='grid place-items-center w-3/4'>
                <img src={iconAnyFile} alt="access-anywhere" />
                <h2 className='text-xl font-bold font-raleway mt-5 mb-3'>Store any type of file</h2>
                <p className='font-open-sans text-center'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
            </div>
        </section>
      </div>
      <section className='bg-main z-10 pt-10'>
        <section className='grid place-content-center mt-20'>
          <div className='flex items-center justify-between'>
            <img src={illustProductive} alt="stay productive illustration" />
            <div className='text-white w-1/2 grid gap-y-5'>
              <h1 className='font-raleway text-white text-4xl font-bold tracking-wider w-1/2'>Stay productive, wherever you are</h1>
              <p className='font-open-sans w-3/4'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
              <p className='font-open-sans w-3/4'>Securely share files and folders with friends, family, colleagues for live collaboration. No email attachments required</p>
              <a href='#' className='hover:text-white hover:border-white hover:fill-white'>
                <div className='flex items-center justify-between hover:text-white w-1/4'>
                  <p className='text-cyan pb-1 border-b-2 border-cyan hover:text-inherit hover:border-white'>See how Fylo works</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right-circle-fill w-5 h-5 text-cyan hover:text-inherit' fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
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
      </section>
    </div>
  );
}

export default App;
