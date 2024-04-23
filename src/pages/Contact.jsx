import React from 'react'

const Contact = () => {
  return (
    <>
        <div id='contact' className='text-2xl font-bold flex text-[#a82c7c] justify-center'> Contact me </div>
        <section className="flex justify-center items-center flex-wrap">
            <div className='mt-5'>
                <p>
                    GET IN TOUCH !
                </p>
                <form action="https://formspree.io/f/mbjnqqro" method='POST' className="flex flex-col w-72 mt-5">
                        Names:
                        <input className="p-1 rounded-lg border-gray-300 bg-gray-200" type="text" name='name' placeholder="Enter your first name" required/>
                        Email: 
                        <input className="p-1 mt-2  border-2 rounded-lg border-gray-300 bg-gray-200" type="email" name='email' placeholder="Enter your e-mail" required/>
                        Message:
                        <textarea className="p-1 h-52  border-2 rounded-lg border-gray-300 bg-gray-200" placeholder="Enter your message here!" name='type' required></textarea>
                </form>
                <button className="bg-[#c43e95] mt-3 mb-3 p-3 rounded-2xl animate-pulse" type='submit'>Send Message</button>
            </div>  

        </section>
    </>
  )
}

export default Contact