import React from 'react'
import Header from '../components/Header'
import SocialMedia from '../components/Footer'
import { Link } from 'react-router-dom'
import AboutPage from './About'
import Resume from './Skills'
import Contact from './Contact'
import Projects from './Projects'

function HomePage() {
  return (
    <>
      <div id='Home'>
        <div className='fixed w-full z-10'>
          <Header />
        </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full h-[98vh] bg-[url('/public/bg.jpg')] bg-cover md:px-0 sm:px-4">
            <p className='text-xl text-white'>Hello, my name is <span className='text-3xl text-[#a82c7c]'> Nancy  </span></p>
            <p className='text-xl text-white'>Hardworking is not an option but a principle.
              Am a FRONT-END developer
              and UI/UX designer.
            </p>
            <a href='/src/assets/HildeCV.pdf' download><button className='bg-[#c43e95] hover:bg-[#a82c7c] p-3 rounded-2xl animate-pulse z-0 mt-4'> <b>DOWNLOAD CV</b> </button></a>
          </div>
          <div>
            <AboutPage />
            <Resume />
            <Projects />
            <Contact />
            <SocialMedia />
          </div>
      </div>
    </>
  )
}

export default HomePage 