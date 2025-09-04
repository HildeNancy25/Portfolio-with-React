import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div id='projects' className='text-2xl font-bold flex text-[#40918a] justify-center md:mt-10 sm:mt-3'> Projects </div>
            <section className='bg-gray-100'>
                <div className="flex items-center justify-center gap-8 my-6 w-full  flex-wrap hover:border-l-2 hover:border-[#40918a]">

                    <div className='flex md:flex-row sm:flex-col'>
                        <div className="md:w-[550px] md:h-96 max-auto flex justify-center gap-3 roundes-2xl p-5">
                            <img src="./Splash.png" className=" object-fill rounded-sm"></img>
                            <img src="./Onboarding.png" className=" object-fill rounded-sm"></img>
                            <img src="./Onboarding2.png" className=" object-fill rounded-sm"></img>
                        </div>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">UI/UX Design</p>
                            <p>TravelAI</p>
                            <p className="pt-5">
                                Using Figma to make a fluid platform that allows you to embark on immersive virtual tours and interact with local hosts from anywhere. 
                                You can easily explore and book unique travel experiences, accommodations, and activities while discovering and supporting Black-owned 
                                businesses wherever you go. Enjoy authentic travel experiences and connect with communities
                            </p>
                            <Link to="https://www.figma.com/design/sllt1IViGgoWJHnz6TW4Jq/TravelAI-Design-File?node-id=0-1&p=f&t=lwtwdIWhhWk3BshG-0">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col-reverse'>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">UI/UX Design</p>
                            <p>Kuriye</p>
                            <p className="pt-5">
                                I used Figma to design a clean and user-friendly courier service platform for Kuriye. The design highlights trust and reliability, 
                                showing how customers can easily send and receive packages while tracking their deliveries in real time.
                                The interface focuses on simplicity, modern visuals, and clear calls to action, ensuring that users can 
                                quickly understand the service, feel confident in using it, and enjoy a seamless delivery experience.
                            </p>
                            <Link to="https://www.figma.com/design/FmxBZzaccw23LnMRgu41CO/Kuriye-Figma-Design?node-id=0-1&p=f&t=MwmePm3SE4Rbd11i-0">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="Kuriye.png" className=' rounded-sm'></img>
                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col'>
                        <div className="md:w-[550px] max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="./Globi.png" className=" rounded-sm"></img>
                        </div>
                        <div className="md:w-[600px] md:h-96 max-auto roundes-2xl p-5">
                            <p className="text-gray-400 mb-2">UI/UX Design</p>
                            <p>Globi Explore</p>
                            <p className="pt-5">
                                With figma technologies to come up with a user friendly social travel platform 
                                that helps users plan trips, book services, and find travel buddies to share experiences with.
                                 It also builds a connected community where travelers can share stories, tips, and invitations.
                            </p>
                            <Link to="https://www.figma.com/design/3UHK5ZHDdgFioCOMOjT2EW/GlobiExplore?node-id=631-1302&t=O2RfpnyIqO3hZZHQ-0">
                                <button className="px-3 py-1 mt-4 border rounded-full border-[#40918a] shadow-lg hover:bg-[#40918a]
                            hover:text-black">
                                    View This Work
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='flex md:flex-row sm:flex-col'>
                        
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
                        <div className="md:w-[550px] md:h-96 max-auto flex flex-wrap justify-center gap-3 roundes-2xl p-5">
                            <img src="./AgriSoko.png" className="w-[90vh] object-fill rounded-sm"></img>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Projects