"use client";
import Image from 'next/image';
import Link from 'next/link';
import  { useState } from 'react';

import logo from '../assets/nuno rocha.png';
import userIcon from '../assets/user-profile.svg';
import menuIcon from '../assets/menu.svg';
import xCircleicon from '../assets/x-circle.svg';

export function Header() {

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleOnMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
  
      <div className="flex items-center bg-red-700 shadow-xl h-16 px-2">
        {/* LOGO */}
        <a
          href="/"
        >
          <Image 
            src={logo}
            alt='Logo'
            className='w-20'
          />
        </a>

        {/* MENU HAMBURGUER */}
        <div
            className='flex md:hidden ml-1'
          >
            <Image
              src={isMenuClicked ? xCircleicon : menuIcon}
              alt='menu icon'
              className='w-12'
              onClick={handleOnMenuClick}
            />
        </div>

        {/* TEAMS LINK */}
        <div className='hidden md:flex justify-evenly gap-6 text-white text-sm font-bold whitespace-nowrap ml-8'>

          <div className='h-full flex items-center border-b border-red-700 hover:border-white'>
            <a className='' href="/players/women">SÉNIOR FEMININO</a>
          </div>

          <div className='h-full flex items-center border-b border-red-700 hover:border-white'>
            <a href="/players/sub-15">SUB-15</a>
          </div>

          <div className='h-full flex items-center border-b border-red-700 hover:border-white'>
            <a href="/players/sub-13">SUB-13</a>
          </div>

          <div className='h-full flex items-center border-b border-red-700 hover:border-white'>
            <a href="/players/sub-11">SUB-11</a>
          </div>

          <div className='h-full flex items-center border-b border-red-700 hover:border-white'>
            <a href="/players/sub-6">SUB-6</a>
          </div>
        </div>
  
        {/* USER PROFILE   */}
        <div
          className='flex justify-end w-full mr-2'
        >
          <Image 
            src={userIcon}
            alt='user profile icon'
            className='w-6'
          />
        </div>
      </div>

          
      {/* MENU ITEMS - MOBILE */}
      {
        isMenuClicked && (
          <div className='absolute inset-999999 z-10 w-full h-full bg-gray-100'>
            <ul className='h-full'>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/women">SÉNIOR FEMININO</a>
              </li>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/sub-15">SUB-15</a>
              </li>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/sub-13">SUB-13</a>
              </li>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/sub-11">SUB-11</a>
              </li>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/sub-6">SUB-6</a>
              </li>
            </ul>
          </div>
        )
      }

    </>
  )
}
