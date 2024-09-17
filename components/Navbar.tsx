"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LOGO from '../public/LOGO.png';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineX } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Height of the viewport, adjust if your hero section has a specific height
      if (window.scrollY >= heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full h-24 shadow-xl z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
          <Image
            src={LOGO}
            alt='Logo'
            width='205'
            height='75'
            className='cursor-pointer'
            priority
          />
        </Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <Link href={"/login"}>
              <li className='ml-10 uppercase hover:border-b text-xl'>Sign in</li>
            </Link>
            <Link href={"/register"}>
              <li className='ml-10 uppercase hover:border-b text-xl'>Sign up</li>
            </Link>
            <Link href={"/login"}>
              <li className='ml-10 uppercase hover:border-b text-xl'>Become a partner</li>
            </Link>
            <Link href={"/login"}>
              <li className='ml-10 uppercase hover:border-b text-xl'>About Us</li>
            </Link>
            <Link href={"/login"}>
              <li className='ml-10 uppercase hover:border-b text-xl'>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className='cursor-pointer'>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className='flex-col py-4'>
          <ul>
            <Link href={"/"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>Home</li>
            </Link>
            <Link href={"/login"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>Sign in</li>
            </Link>
            <Link href={"/register"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>Sign up</li>
            </Link>
            <Link href={"/login"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>Become a partner</li>
            </Link>
            <Link href={"/login"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>About us</li>
            </Link>
            <Link href={"/login"}>
              <li onClick={() => { setMenuOpen(false) }} className='py-4 cursor-pointer'>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className='flex flex-row justify-around pt-10 items-center'>
          <AiOutlineInstagram size={30} className='cursor-pointer' />
          <AiOutlineFacebook size={30} className='cursor-pointer' />
          <AiOutlineX size={30} className='cursor-pointer' />
        </div>
        <Link href='/'>
          <Image
            src={LOGO}
            alt='Logo'
            width='205'
            height='75'
            className='cursor-pointer pt-6'
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
