import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CgDribbble } from "react-icons/cg";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand / Name */}
        <h2 className="text-xl font-semibold">Hilde Nancy I.</h2>

        {/* Quick Links */}
        <nav className="flex gap-6 text-lg">
          <Link
            to="/"
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
        </nav>

        {/* Social Media */}
        <div className="flex gap-5 text-2xl text-black">
          <a
            href="https://github.com/HildeNancy25?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a34181]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hilde-nancy-isingizwe-690573203/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a34181]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/h___nancy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a34181]"
          >
            <BsInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Hilde Nancy I. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
