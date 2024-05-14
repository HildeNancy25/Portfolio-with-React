import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

function Header () {

  return (
    <>
        <header className= "flex flex-row md:justify-evenly sm:justify-normal md:items-center">
            <div className='flex items-center'>
                <Link to='/'><img className='w-40' src='logo.png'></img></Link>
            </div>
            <div className=' hidden md:block'>
                    <div className='flex gap-10 text-xl'>
                        <Link to='./' className='hover:text-[#a34181] hover:underline'> Home </Link>
                        <Link to='./about' className='hover:text-[#a34181] hover:underline'> About </Link>
                        <Link to='./skills' className='hover:text-[#a34181] hover:underline'> Skills </Link>
                        <Link to='./projects' className='hover:text-[#a34181] hover:underline'> Projects </Link>
                        <Link to='./contact' className='hover:text-[#a34181] hover:underline'> Contact </Link>
                    </div>
                
                <div>
                    <Link to={'/'} className={'block md:hidden bg-black text-2xl'}><IoMenu /></Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header