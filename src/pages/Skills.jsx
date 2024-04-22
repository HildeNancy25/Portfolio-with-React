import React from 'react'

const Resume = () => {
    return (
        <>
        <div id='skills' className='text-2xl font-bold flex text-[#a82c7c] justify-center'> Skills </div>
        <section class="flex md:flex-row sm:flex-col items-center justify-center gap-8 flex-wrap">
            <div class=" md:w-[40%] sm:w-full md:p-10 sm:p-5 border border-primary shadow-xl shadow-[#6482983b] border-gray-300">
                <h6>2023-2024</h6>
                <h2 class="pt-2"><b>California University of ARTS</b></h2>
                <p><i> UI/UX Specialisation </i></p>
                <ul class="pt-3">
                    <li class="underline underline-offset-2 text-[#a82c7c]"> SKILLS:</li>
                    <li class="pt-2"> UX Design Fundamental</li>
                    <li> Visual Elements or User Interface Design</li>
                    <li> Web Design Strategy and Information Architecture</li>
                    <li> Strategy and Information Architecture</li>
                </ul>
                <a href="/src/assets/UIUXDesignSpecialist.pdf">
                    <button class="px-3 py-1 mt-8 border rounded-full border-[#a82c7c] hover:bg-[#a82c7c]
                    hover:text-black"> VIEW CERTIFICATE </button>
                </a>
            </div>

            <div class=" md:w-[40%] sm:w-full md:p-10 sm:p-5 border border-primary shadow-xl shadow-[#6482983b] border-gray-300">
                <h6>2017-2022</h6>
                <h2 class="pt-2"><b> University of RWANDA</b></h2>
                <p><i> Information System </i></p>
                <ul class="pt-3">
                    <li class="underline underline-offset-2 text-[#a82c7c]"> SKILLS:</li>
                    <li class="pt-2" > System Analysis and Design</li>
                    <li> Computer Architecture</li>
                    <li> Web Design </li>
                    <li> Human Centerd Design</li>
                    <li> System Modeling and Simulation</li>
                    <li> Mobile Application Development</li>
                    <li> Datbase Programming</li>
                </ul>

            </div>

            <div class=" md:w-[40%] sm:w-full md:p-10 sm:p-5 border border-primary shadow-xl shadow-[#6482983b] border-gray-300">
                <h6>2014-2016</h6>
                <h2 class="pt-2"><b>Es. Marie Adelaide</b></h2>
                <p><i> Mathematics-Computer science-Economics </i></p>
                <ul class="pt-3">
                    <li class="underline underline-offset-2 text-[#a82c7c]"> SKILLS:</li>
                    <li class="pt-2"> c programming language</li>
                    <li> c++ </li>
                    <li> html and css</li>
                    <li> MySQL and Oracle database developer</li>
                </ul>

            </div>

            <div class="md:w-[40%] sm:w-full md:p-10 sm:p-5 border border-primary shadow-xl shadow-[#6482983b] border-gray-300">
                <h6>2015-2024</h6>
                <h2><b> Certificates of completion</b></h2>
                <ul class="pt-3">
                    <li> 2024: UI/UX Fundamental</li>
                    <li> 2024: Visual Elements or User Interface Design</li>
                    <li> 2024: Web Design Strategy and Information Architecture</li>
                    <li> 2021: Resonate, RISE & STEM in partenership with Girls in ICT</li>
                    <li> 2017: Student for Liberty Rwanda</li>
                    <li> 2015: Debate Competition Winner Learner</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Resume