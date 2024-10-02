"use client" // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrDomain } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import { UserButton, useUser } from '@clerk/nextjs';



const Navbar = () => {

  const {user, isLoaded} = useUser();
 
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 764 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 764 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };


  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='w-[140px]' src="/newtouse.png" width={200} height={200} alt="" />
        </Link>
      </div>
        {/* New fix */}
        {/*New fix up */}
        
      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line  ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        // <p></p>
       
        <ul className="nav-links flex justify-center gap-2 text-md text-center">
          <li>
          <Link href={'/'} className={`links `} >
              Home
            </Link>
          </li>
          <li>
          <Link href={'/'} className={`links `}>
              Get a site
            </Link>
          </li>
          <li>
            <Link href={'/'} className={`links `} >
              Ads Buckets
            </Link>
          </li>
          <li>
            <Link href={'/'} className={`links `} >
              Request Tasks
            </Link>
          </li>
          <li>
            <Link href={'/'} className={`links `} >
              How it works
            </Link>
          </li>
          <li>
            <Link href={'/'} className={`links `} >
              Blog
            </Link>
          </li>
          <li>
            <Link href={'/'} className={`links `} >
              About
            </Link>
          </li>
        </ul>
   
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
          <IoCloseSharp className='text-white' />
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <IoHome /> 
              Home
              </Link>
            </li>
            <li>
              <Link href={'/feature'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <BsRocketTakeoff /> 
              Feature
              </Link>
            </li>
            <li>
              <Link href={'/incorporate'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <GrDomain /> 
               Apps
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className='hide'>
        {isLoaded&&user
        ?
        <UserButton/>
        :
      <Link href={""}><Button variant="outline" className="text-black w-[150px] h-[50px] bg-primary">Get in Touch</Button></Link> 
        }
      </div>
    </nav>
    </>
  );
};

export default Navbar;
