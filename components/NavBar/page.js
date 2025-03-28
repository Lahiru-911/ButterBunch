"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md">
      <div className="navbar-container flex items-center justify-between px-4 py-1 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-8 gap-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-16 flex" : "top-[-400px] hidden md:flex"
          }`}
        >
          <li>
            <Link href="/">
              <span className="text-gray-800 hover:text-[#ff532c] transition duration-300">
                HOME
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="text-gray-800 hover:text-[#ff532c] transition duration-300">
                PRODUCTS
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-gray-800 hover:text-[#ff532c] transition duration-300">
                ABOUT US
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-[#ff532c] transition duration-300">
                CONTACT
              </span>
            </Link>
          </li>
        </ul>

        {/* Book Now Button (Hidden on mobile) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#ff532c] text-white text-sm px-4 py-2 rounded-4xl hover:bg-[#ff412cf4] transition duration-300">
              Order Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="block md:hidden text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <>&times;</> : <>&#9776;</>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
