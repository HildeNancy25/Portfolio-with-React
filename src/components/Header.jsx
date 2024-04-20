import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

function Header () {

    const HiddenNavBar = () => {

    }

  return (
    <>
        <header className='flex flex-row justify-evenly items-center bg-white '>
            <div className='flex items-center'>
                <p className='text-3xl text-yellow-600'>@</p>
                <img className='w-40' src='logo.png'></img>
            </div>
            <div className='text-xl flex gap-10 '>
                <Link to=''> About </Link>
                <Link to=''> Resume </Link>
                <Link to=''> Skills </Link>
                <Link to=''> Projects </Link>
                <Link to=''> Contact </Link>
            </div>
            <div id='hidden-menu' className=''>
                <IoMenu />
            </div>
        </header>
    </>
  )
}

export default Header