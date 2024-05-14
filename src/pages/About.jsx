import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-10 pt-20 border-b-2 rounded-3xl bg-gradient-to-t from-slate-100 to-slate-50'>
      <div>
        <p className='underline underline-offset-4 decoration-[#40918a]'>ABOUT ME</p>
      </div>
      <div>
        <img src='me.jpeg' className='rounded-full w-[20vh]'></img>
      </div>
      <div className='flex flex-col items-center md:text-center sm:text-justify gap-5'>
        <p className='md:text-3xl sm:text-2xl'>I'm Hilde Nancy Isingizwe</p>
        <p className=' lg:w-[98vh] md:w-[80vh] sm:w-[50vh] md:p-0 sm:p-2'>Am a hardworking, courageous and good team player, committed to improving lives accross the globe by creating 
          affordable and accessible tools by exproring opportunities in tech with product design and frontend Development
        </p>
      </div>
      <div className='flex gap-3 pb-20 md:flex-row sm:flex-col'>
        <button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-3 rounded-2xl z-0 mt-4'>HIRE ME</button>
        <Link to='/src/assets/HildeCV.pdf'><button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-3 rounded-2xl z-0 mt-4 animate-pulse' download>DOWNLOAD MY CV</button></Link>
      </div>
    </div>
    </>
  )
}

export default About