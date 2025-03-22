'use client'; // For Next.js 13+ app directory (optional if using client-side logic)

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside (optional improvement)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md">
      <div className="navbar-container flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png" // Put your logo in the public/images folder
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`flex flex-col md:flex-row md:items-center md:gap-8 gap-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16 flex' : 'top-[-400px] hidden md:flex'}`}>
          <li>
            <Link href="/" className="text-gray-800 hover:text-yellow-600 transition duration-300">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-800 hover:text-yellow-600 transition duration-300">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-yellow-600 transition duration-300">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-yellow-600 transition duration-300">
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Book Now Button (Hidden on mobile) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-yellow-600 text-white px-5 py-2 rounded-md hover:bg-yellow-700 transition duration-300">
              BOOK NOW
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <>&times;</> : <>&#9776;</>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
