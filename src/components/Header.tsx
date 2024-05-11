"use client";
import Image from 'next/image';

import  { useState, useRef, useEffect, useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import logo from '../assets/nuno rocha.png';
import menuIcon from '../assets/menu.svg';
import xCircleicon from '../assets/x-circle.svg';
import userIcon from '../../public/user.png';
import logoutIcon from '../../public/turn-off.png';

export function Header() {

  const { signOut, userObject } = useContext(AuthContext);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setIsProfileClicked(!isProfileClicked);
  }

  const handleOnMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  }
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileClicked(false);
      }
    }

    if (isProfileClicked) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileClicked]);

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
            priority={true}
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
            <a className='' href="/players/senior-feminino">SÉNIOR FEMININO</a>
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
          ref={profileRef}
        >
          <Image 
            src={userIcon}
            alt='user profile icon'
            className='w-7 cursor-pointer'
            priority={true}
            onClick={handleProfileClick}
          />
        </div>
      </div>

          
      {/* MENU ITEMS - MOBILE */}
      {
        isMenuClicked && (
          <div className='absolute inset-999999 z-10 w-full h-full bg-gray-100'>
            <ul className='h-full'>
              <li>
                <a className='border-b inline-block w-full py-3 px-4' href="/players/senior-feminino">SÉNIOR FEMININO</a>
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

      {/* PROFILE POP-UP */}
      {isProfileClicked && (
        <div className='absolute right-0 mt-0 bg-white shadow-2xl rounded-md z-20'>
          <div className='px-4 py-2'>
            <p className='py-2 text-xs font-semibold text-gray-600'>CONTA DO USUÁRIO</p>
            <div>
              <p className='text-sm'>{`${userObject.firstname} ${userObject.lastname}`}</p>
              <p className='text-xs text-gray-500'>{userObject.email}</p>
            </div>
          </div>
            
          <div className='border w-full my-2'/>
          <div
            className='flex px-4 py-2 mb-2 w-full hover:bg-gray-100 cursor-pointer'
            onClick={signOut}
          >
            <Image
              alt='logout icon'
              src={logoutIcon}
              className='w-4 h-4'
              style={{ marginTop: 1 }}
            />
            <p className='ml-1 text-sm'>Terminar sessão</p>
          </div>
        </div>

      )}
    </>
  )
}
