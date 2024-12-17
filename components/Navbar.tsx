"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LOGO from "../public/LOGO.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY >= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically adding Google Font link to head
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <nav
      className={`fixed w-full h-24 shadow-xl z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src={LOGO}
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <ul className="flex">
            <li>
              <Link href="/login" passHref>
                <button className="ml-10 uppercase px-6 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-700 transition duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link href="/register" passHref>
                <button className="ml-10 uppercase px-6 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-700 transition duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="py-4">
          <li>
            <Link href="/login" passHref>
              <button
                onClick={handleNav}
                className="w-full py-4 mb-4 text-center bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link href="/register" passHref>
              <button
                onClick={handleNav}
                className="w-full py-4 mb-4 text-center bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
