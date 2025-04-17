"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavContact from "./NavContact";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Services", path: "#services" },
  { title: "Contact", path: "#contact" },
];

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    // Prevent body scroll when menu is open
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className='z-50 fixed flex justify-center w-full text-white font-bold'>
      <NavContact />
      <motion.div
        className='bg-transparent mt-0 mr-8 hidden md:flex items-center justify-center p-2 max-w-[500px] ml-auto'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul className='flex flex-row p-2 space-x-6'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className='transform hover:text-white/50 transition-all duration-300 ease-in-out text-sm'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      <div
        onClick={toggleNav}
        className='md:hidden fixed top-5 right-4 border rounded z-[60] text-white/70 border-white/70 p-2'
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile menu with fixed positioning */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black/90 z-[55] transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='h-full flex items-center justify-center'>
          <ul className='flex flex-col items-center justify-center space-y-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className='text-2xl block py-2'
                  onClick={closeNav}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
