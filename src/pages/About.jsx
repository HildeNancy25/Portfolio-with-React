import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CgDribbble } from "react-icons/cg";


const AboutPage = () => {
  return (
    <>
      <div id='about' className='flex flex-col items-center justify-center gap-8 h-[80vh]'>
        <p className=' text-2xl font-bold text-[#a82c7c] '>About me </p>
        <div className='flex flex-row-reverse items-center gap-24'>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-1'>
              <p className=""><b>Names:   </b></p>
              <p><b>Birthday: </b></p>
              <p><b>Email: </b></p>
              <p><b>phone: </b></p>
              <p><b>Address: </b></p>
            </div>
            <div>
              <p className=" font-light text-lg">ISINGIZWE Hilde Nancy </p>
              <p className=" font-light text-lg">25, November </p>
              <p className=" font-light text-lg">hildenancyiz@gmail.com </p>
              <p className=" font-light text-lg">+250 783 399 776 </p>
              <p className=" font-light text-lg">Kigali, Kicukiro </p>
            </div>
          </div>
          <div className='flex flex-col gap-2 md:text-3xl sm:text-xl'>
            <Link to='https://github.com/HildeNancy25?tab=repositories'><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/hilde-nancy-isingizwe-690573203/'><FaLinkedin /></Link>
            <Link to='https://www.instagram.com/h___nancy/'><BsInstagram /></Link>
            <Link to='https://dribbble.com/Nancy-H'><CgDribbble /></Link>
        </div>
        </div>
        <div>
          <image href=''></image>
        </div>
      </div>
    </>
  )
}

export default AboutPage