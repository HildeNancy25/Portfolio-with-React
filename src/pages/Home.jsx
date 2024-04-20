import React from 'react'
import Header from '../components/Header'

function HomePage  () {
  return (
    <>
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0'>
                <Header />
            
                <div className=' w-full bg-gray-200'>
                    <p>am the home page</p>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage 