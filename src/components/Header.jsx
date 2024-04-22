import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

function Header () {

    const HiddenNavBar = () => {

    }

  return (
    <>
        <header className= "flex flex-row justify-evenly items-center bg-white">
            <div className='flex items-center'>
                <p className='text-3xl text-yellow-600'>@</p>
                <img className='w-40' src='logo.png'></img>
            </div>
            <div className='text-xl hidden md:block'>
                <a href='#about'> About </a>
                <a href='#skills'> Skills </a>
                <a href='#projects'> Projects </a>
                <a href='#contact'> Contact </a>
            </div>
            <div>
                <NavLink to={'/'} className={'block md:hidden'}><IoMenu /></NavLink>
            </div>
        </header>
    </>
  )
}

export default Header