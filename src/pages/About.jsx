import React from 'react'

const AboutPage = () => {
  return (
    <>
      <div id='about' className='flex flex-col items-center justify-center gap-8 h-[80vh]'>
        <p className=' text-2xl font-bold text-[#a82c7c] '>About me </p>
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
        <div>
          <image href=''></image>
        </div>
      </div>
    </>
  )
}

export default AboutPage