import React from 'react'
import Header from '../components/Header'
import SocialMedia from '../components/Footer'
import { Link } from 'react-router-dom'
import AboutPage from './About'
import Resume from './Skills'
import Contact from './Contact'
import Projects from './Projects'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CgDribbble } from "react-icons/cg";


function HomePage() {
  return (
    <>
      <div className=' font-serif'>
          <div className='fixed w-full z-10'>
            {/* <Header /> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full h-[98vh] bg-[url('/public/bg.jpg')] bg-cover md:px-0 sm:px-4">
            <p className='lg:text-5xl md:text-4xl sm:text-3xl text-white md:w-[96vh] sm:w-[50vh] text-center'>I'M a Designer & Frontend Developer.</p>
            <p className='md:text-xl sm:text-lg text-center text-white'>Hardworking is not an option but a principle.
            </p>
            <div className='flex gap-2 md:text-3xl sm:text-xl text-white'>
              <div className=''>
                <Link to='https://github.com/HildeNancy25?tab=repositories'><FaGithub /></Link>
              </div>
              <div className=''>
                <Link to='https://www.linkedin.com/in/hilde-nancy-isingizwe-690573203/'><FaLinkedin /></Link>
              </div>
              <div className=''>
                <Link to='https://www.instagram.com/h___nancy/'><BsInstagram /></Link>
              </div>
              <div className=''>
                <Link to='https://dribbble.com/Nancy-H'><CgDribbble /></Link>
              </div>
            </div>
            <Link to='/contact'><button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-3 rounded-2xl z-0 mt-4'> <b>CONTACT ME</b> </button></Link>
          </div>
          <div>
        </div>
        <AboutPage />
        <Resume />
        <Projects />
        <Contact />
        {/* <SocialMedia /> */}

      </div>
    </>
  )
}

export default HomePage 