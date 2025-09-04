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
                    <p className='underline underline-offset-4 decoration-[#40918a]'>EDUCATION</p>
                </div>
                <div className=' flex flex-wrap justify-center md:flex-row sm:flex-col pt-10 gap-5'>
                    <div className='flex md:flex-row sm:flex-col gap-5  h-17'>
                        <div className='text-3xl'>
                            <PiCertificateLight />
                        </div>
                        <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                            <p className='font-bold text-xl'>California Institute of the ARTS</p>
                            <p>UI / UX Design</p>
                            <div>
                                <a href='/src/assets/UIUXDesignSpecialist.pdf' download='Hilde Nancy Certificate'><button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-2 rounded-2xl' download>Download certificate</button></a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaLocationDot />
                                <p className='text-xl'>Online course </p>
                            </div>
                            <Accordion title='SKILLS GAINED' answer={'UX Design Fundamental, Visual Elements or User Interface Design,  Web Design Strategy and Information Architecture, Strategy and Information Architecture'} />
                        </div>
                    </div>
                    <div className='flex md:flex-row sm:flex-col gap-5  h-17'>
                        <div className='text-3xl'>
                            <PiCertificateLight />
                        </div>
                        <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                            <p className='font-bold text-xl'>SheCanCode by Igire Rwanda Organization</p>
                            <p>Front-end applications Development</p>
                            <div>
                                <a href='/src/assets/SCC.pdf' download='Hilde Nancy Certificate'><button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-2 rounded-2xl' download>Download certificate</button></a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaLocationDot />
                                <p className='text-xl'>Online course </p>
                            </div>
                            <Accordion title='SKILLS GAINED' answer={'JavaScript, NodeJS, ReactJS, Tailwindcss'} />
                        </div>
                    </div>
                    <div className='flex md:flex-row sm:flex-col gap-5 items-start'>
                        <div className='text-3xl'>
                            <GiDiploma />
                        </div>
                        <div className='flex flex-col gap-2 w-[46vh] bg-[#cbe7e4] p-3'>
                            <p className='font-bold text-xl'>University of Rwanda</p>
                            <p>Bachelors of science with honor in Information Systems</p>
                            <div>
                                <a href='/src/assets/BACHELORDEGREE.pdf' download='Hilde Nancy degree'><button className='bg-[#40918a] hover:bg-[#1d524c] hover:text-slate-200 p-2 rounded-2xl z-0' download>Download degree</button></a>
                            </div>
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
            </div>
        </>
    )
}

export default Skills