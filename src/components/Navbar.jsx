import React, { useRef } from "react";
import {useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks= [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Projects', path: '/projects'},
    {name: 'Contact', path: '/contact'},
]

const Navbar = () => {
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div ref={navRef} className='absolute w-full bg-gradient-to-b from-slate-950 to-transparent z-1 flex flex-row justify-between items-center px-16 py-7 md:py-4'>
        <div className="flex flex-row items-center justify-start">
            {/* link to homepage by logo */}
            <Link to='/'>
                <img className="h-8 scale-[2]" src={logo} alt="mg" />
            </Link>
            <h1 className="font-mono font-semibold text-xl px-10">
                Mohit
            </h1>
        </div>

        <div>
          <ul className="hidden md:flex flex-row justify-end items-center ">
            {navLinks.map((link) => (
                <li 
                    className="px-4 py-4 font-light text-lg hover:font-normal" key={link.name}
                >
                    <a href='#' onClick={(e) => scrollToSection(e, link.name)}>{link.name}</a>
                </li>
            ))}
          </ul>
        </div>
      </div>

      {/* hamburger menu for small screens */}
      <div className="md:hidden absolute top-8 right-20 flex flex-row items-center justify-end z-2">
          <button
            className="text-gray-200 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } md:hidden absolute top-16 right-16`}
        >
          <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center lg:flex-1">
            {navLinks.map((link) => (
              <li
                className="px-4 py-2 font-light text-lg hover:font-normal"
                key={link.name}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    scrollToSection(e, link.name);
                    toggleMenu();
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

    </nav>
  );
};

export default Navbar;
