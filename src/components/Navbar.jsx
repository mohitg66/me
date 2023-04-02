import React, { useRef } from "react";
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

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav>
      <div ref={navRef} className='absolute w-full bg-gradient-to-b from-slate-950 to-transparent z-1 flex flex-row justify-between items-center px-16 py-2'>
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
          <ul className="flex flex-row justify-end items-center">
            {navLinks.map((link) => (
                <li 
                    className="px-4 py-4 font-light text-lg" key={link.name}
                >
                    <a href='#' onClick={(e) => scrollToSection(e, link.name)}>{link.name}</a>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
