import React from 'react'
import Header from '../components/Header'
import SocialMedia from '../components/Footer'
import { Link } from 'react-router-dom'

function HomePage  () {
  return (
    <>
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0'>
                <Header />
            
                <div className=' w-full bg-gray-100 bg-homebg'>
                    <p className='flex flex-col items-center text-xl'>Hello, am Nancy <span> FRONT-END Developer</span> </p>
                    <a to='file:///C:/Users/HP/Downloads/Hilde%20CV.pdf'><button className='bg-yellow-600 border-2 hover:bg-yellow-400 p-3 rounded-2xl'> DOWNLOAD CV </button></a>
                </div>
                <div>
                  <SocialMedia />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage 