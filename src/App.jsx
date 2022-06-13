import './App.css';
import Navbar from './components/navbar';
import intro from './assets/illustration-intro.png'
import iconAccessAnywhere from './assets/icon-access-anywhere.svg'
import iconSecurity from './assets/icon-security.svg'
import iconCollaboration from './assets/icon-collaboration.svg'
import iconAnyFile from './assets/icon-any-file.svg'
import illustProductive from './assets/illustration-stay-productive.png'
import iconArrow from './assets/icon-arrow.svg'

function App() {
  return (
    <div className='bg-main'>
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
      <section className='grid place-content-center'>
        <div className='flex items-center justify-between'>
          <img src={illustProductive} alt="stay productive illustration" />
          <div className='text-white w-1/2 grid gap-y-4'>
            <h1 className='font-raleway text-white text-4xl font-bold tracking-wider w-1/2'>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
            <p>Securely share files and folders with friends, family, colleagues for live collaboration. No email attachments required</p>
            <a href='#' className='flex items-center'>
              <p className='text-cyan'>See how Fylo works</p>
              <img className='h-4 ml-2' src={iconArrow} alt="See how Fylo works"/>
              {/* <hr className='bg-cyan w-1/5' /> */}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
