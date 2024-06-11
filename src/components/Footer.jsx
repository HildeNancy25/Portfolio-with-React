import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CgDribbble } from "react-icons/cg";

function SocialMedia() {
  return (
    <>
      <div className='p-5 flex flex-col justify-center gap-10 items-center bg-gray-100 mt-5'>

        <div className=''>
          <h2 className='text-3xl font-semibold'> Hilde Nancy I.</h2>
        </div>
        <div className='flex gap-2 md:text-3xl sm:text-xl text-black'>
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
      </div>
    </>
  )
}

export default SocialMedia