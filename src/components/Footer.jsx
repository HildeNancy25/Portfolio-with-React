import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


function SocialMedia() {
  return (
    <>
      <div className='p-5 flex flex-col-reverse items-center bg-gray-100'>
        <div className='flex gap-2 md:text-3xl sm:text-xl'>
          <a href='https://github.com/HildeNancy25?tab=repositories'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/hilde-nancy-isingizwe-690573203/'><FaLinkedin /></a>
          <a href='https://www.instagram.com/h___nancy/'><BsInstagram /></a>
        </div>
        <div className='pb-5'>
          <h2 className='text-3xl font-semibold'>Hilde Nancy I.</h2>
        </div>
      </div>
    </>
  )
}

export default SocialMedia