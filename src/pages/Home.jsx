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
      <div className=''>
        <div className='fixed w-full'>
          <Header />
        </div>
          <div className='flex flex-col items-center justify-center gap-3 w-full h-96 bg-gray-100 md:px-0 sm:px-4'>
            <p className='text-xl'>Hello, my name is <span className='text-2xl text-[#a82c7c]'> Nancy  </span></p>
            <p className='text-xl'>Hardworking is not an option but a principle.
              Am a FRONT-END developer
              and UI/UX designer.
            </p>
            <a to='file:///C:/Users/HP/Downloads/Hilde%20CV.pdf'><button className='bg-[#c43e95] hover:bg-[#a82c7c] p-3 rounded-2xl animate-pulse'> <b>DOWNLOAD CV</b> </button></a>
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