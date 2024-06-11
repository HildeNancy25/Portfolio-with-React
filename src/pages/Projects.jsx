import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div id='projects' className='text-2xl font-bold flex text-[#40918a] justify-center md:mt-10 sm:mt-3'> Projects </div>
            <section className='bg-gray-100'>
                <div className="flex items-center justify-center gap-8 my-6 w-full  flex-wrap hover:border-l-2 hover:border-[#40918a]">

                    <div className='flex md:flex-row sm:flex-col'>
                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="./AgriSoko.png" className="w-[90vh] object-fill rounded-sm"></img>
                        </div>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">React JS</p>
                            <p>AgriSoko Connect</p>
                            <p className="pt-5">
                                In this project we used react js and TailwindCSS technologies to come up with a user friendly website which will
                                help in Agriculture with respective users including farmers by showcasing their harvest, buyers by allowing them to
                                order from what farmers have harvested.
                            </p>
                            <Link to="https://agrisoko-connect-platform.netlify.app/">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col-reverse'>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">React & TailwindCSS</p>
                            <p>Rest Countries </p>
                            <p className="pt-5">
                                In this Countries project, I used React and TailwindCSS to design a website
                                The app could provide basic information about each country, such as its name,
                                capital, population, area, currency, language, flag, and time zone.
                                Users could also search for specific countries by name.
                            </p>
                            <Link to="https://countries-app-3ge0.onrender.com">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="country.png" className=' rounded-sm'></img>
                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col'>
                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <Link to="https://hildenancy25.github.io/RockPaperScissors/">
                                <img src="rock.png" className="w-60 hover:blur-sm rounded-sm"></img>
                            </Link>
                            <Link to="https://hildenancy25.github.io/AgeCalculator/">
                                <img src="ageCalc.png" className="w-60 hover:blur-sm rounded-sm"></img>
                            </Link>
                            <Link to="https://hildenancy25.github.io/Dice-Roll-Simulator/">
                                <img src="dice.png" className="w-60 hover:blur-sm rounded-sm"></img>
                            </Link>
                            <Link to="https://hildenancy25.github.io/emoji/">
                                <img src="emoji.png" className="w-60 hover:blur-sm rounded-sm"></img>
                            </Link>
                        </div>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">JavaScript, CSS, HTML</p>
                            <p>Rock Paper Sciscors, Age calculator, Dice Roll Simulator and Random Emoji Generator </p>
                            <p className="pt-5">
                                this was quite amazing in both creation and testing. Building efficiency one
                                line of code at a time! Dive into a project fueled by JavaScript, HTML, and CSS,
                                where productivity meets innovation.
                            </p>
                            <p className="mt-3">JavaScript:</p>
                            <div className="bg-gray-300 w-56 h-3 rounded-full">
                                <div className="bg-[#40918a] w-48 h-3 rounded-full"> </div>
                            </div>
                            <p>CSS:</p>
                            <div className="bg-gray-300 w-56 h-3 rounded-full">
                                <div className="bg-[#40918a] w-8 h-3 rounded-full"> </div>
                            </div>
                            <p>HTML:</p>
                            <div className="bg-gray-300 w-56 h-3 rounded-full">
                                <div className="bg-[#40918a] w-14 h-3 rounded-full"> </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col-reverse'>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">
                                UI/UX Design
                            </p>
                            <p>
                                PROMOTE HER - mobile app
                            </p>
                            <p className="pt-5">
                                In the "Promote Her" project, I used Figma
                                to create a vibrant and engaging digital experience
                                for for Elevating young entrepreneur women who  pursued her dreams with unwavering
                                determination. focused on quality and creativity
                                where form meets function for a truly engaging experience.
                            </p>
                            <Link to="https://www.figma.com/proto/6FeRyIyBorQEXbrPMsZhPv/Promote-HER?type=design&node-id=38-2&t=SiXuRn9clZUUgu3Y-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>

                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="Proj3.png" className="w-[56vh] h-[56vh] object-cover rounded-sm"></img>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Projects