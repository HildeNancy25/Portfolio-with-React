import React from 'react'
import { PiCertificateLight } from "react-icons/pi";
import Accordion from '../components/Accordion';
import { GiDiploma } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Skills = () => {

  return (
    <>
    <div className='p-4 flex flex-col items-center'>
        <div>
            <p className='underline underline-offset-4 decoration-[#40918a]'>SKILLS</p>
        </div>
        <div className=' flex md:flex-row sm:flex-col pt-10 gap-5'>
            <div className='flex md:flex-row sm:flex-col gap-5  h-17'>
                <div className='text-3xl'>
                    <PiCertificateLight />
                </div>
                <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                    <p className='font-bold text-xl'>California Institute of the ARTS</p>
                    <p>Successfully completed the online non-credit specialization through Coursera </p>
                    <div className='flex items-center gap-3'>
                        <FaLocationDot />
                        <p className='text-xl'>Online course </p>
                    </div>
                    <Accordion title='SKILLS GAINED' answer={'UX Design Fundamental, Visual Elements or User Interface Design,  Web Design Strategy and Information Architecture, Strategy and Information Architecture'} />
                </div>
            </div>
            <div className='flex md:flex-row sm:flex-col gap-5 items-start'>
                <div className='text-3xl'>
                    <GiDiploma />
                </div>
                <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                    <p className='font-bold text-xl'>University of Rwanda</p>
                    <p>Successfully completed the online non-credit specialization through Coursera </p>
                    <div className='flex items-center gap-3'>
                        <FaLocationDot />
                        <p className='text-xl'>Kigali, Rwanda </p>
                    </div>
                    <Accordion title='SKILLS GAINED' answer={'Mobile Application Development, System Analysis and Design, Computer Architecture,  Web Design, Human Centerd Design, System Modeling and Simulation, Database Programming'} />
                </div>
            </div>
            <div className='flex md:flex-row sm:flex-col gap-5 items-start'>
                <div className='text-3xl'>
                    <PiCertificateLight />
                </div>
                <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                    <p className='font-bold text-xl'>Es. Marie Adelaide</p>
                    <p> Mathematics-Computer science-Economics </p>
                    <div className='flex items-center gap-3'>
                        <FaLocationDot />
                        <p className='text-xl'> Kamonyi, Rwanda </p>
                    </div>
                    <Accordion title='SKILLS GAINED' answer={'C programming language, C++,  HTML and CSS, MySQL and Oracle darabase programming'} />
                </div>
            </div>
        </div>
        <p className='underline underline-offset-4 decoration-[#40918a] mt-10'>PROGRAMMING SKILLS</p>
        <div className='flex md:flex-row sm:flex-col md:gap-20 sm:gap-0 mt-8'>
            <div>
                <p className="mt-3">React:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-36 h-3 rounded-full"> </div>
                </div>
                <p className="mt-3">JavaScript:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-32 h-3 rounded-full"> </div>
                </div>
                <p>CSS:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-48 h-3 rounded-full"> </div>
                </div>
            </div>
            <div>
                <p className="mt-3">TailwindCSS:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-48 h-3 rounded-full"> </div>
                </div>
                <p>HTML:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-52 h-3 rounded-full"> </div>
                </div>
                <p className="mt-3">Figma:</p>
                <div className="bg-gray-300 w-56 h-3 rounded-full">
                    <div className="bg-[#40918a] w-48 h-3 rounded-full"> </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills