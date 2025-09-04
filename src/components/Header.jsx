import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md flex flex-row md:justify-evenly sm:justify-normal md:items-center py-4 px-5">
            <div className="flex items-center">
                <Link to="/">
                    <img className="w-40" src="logo.png" alt="Logo" />
                </Link>
            </div>

            <div className="hidden md:flex gap-10 text-xl">
                <Link to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-[#a34181] hover:underline"
                >
                    Home 
                </Link>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#a34181] hover:underline">
                    About
                </Link>
                <Link to="/skills" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#a34181] hover:underline">
                    Education
                </Link>
                <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#a34181] hover:underline">
                    Projects
                </Link>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#a34181] hover:underline">
                    Contact
                </Link>
            </div>

            <div className="md:hidden ml-auto">
                <Link to="/" className="text-2xl text-black">
                    <IoMenu />
                </Link>
            </div>
        </header>
    );
}

export default Header;
