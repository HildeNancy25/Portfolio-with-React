import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='contact' className='text-2xl font-bold flex text-[#40918a] justify-center mt-10'> Contact me </div>
      <section className="flex justify-center items-center flex-wrap">
        <div className='mt-5'>
          <p>
            GET IN TOUCH !
          </p>
          <div className='flex lg:flex-row sm:flex-col lg:pt-0 sm:pt-5 lg:gap-10 sm:gap-5 items-center'>
            <div>
              <img src='./contact.jpg' className='lg:w-80 sm:w-40'></img>
            </div>

            <form action="https://formspree.io/f/mbjnqqro" method='POST' className="flex flex-col w-72 mt-5">
              Names:
              <input className="p-1 rounded-lg border-gray-300 bg-gray-200" type="text" name='name' placeholder="Enter your names" required />
              Email:
              <input className="p-1 mt-2  border-2 rounded-lg border-gray-300 bg-gray-200" type="email" name='email' placeholder="Enter your e-mail" required />
              Message:
              <textarea className="p-1 h-40  border-2 rounded-lg border-gray-300 bg-gray-200" placeholder="Enter your message here!" name='type' required></textarea>
            <button className="bg-[#40918a] w-[20vh] mt-3 mb-3 p-3 rounded-2xl animate-pulse" type='submit'>Send Message</button>

            </form>
          </div>
        </div> 

      </section>
    </>
  )
}

export default Contact