"use client";

import { useEffect, useContext, useState } from 'react';

import Image from 'next/image';

import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from '@/lib/redux/store';
import { users } from '@/lib/redux/features/auth/usersSlice';

import { AuthContext } from '@/contexts/AuthContext';

import LoginForm from '@/components/LoginForm';
import Toast from '@/components/Toast';
import Loading from '@/components/Loading';

import { LoginUser } from '@/interfaces/User';

import logo from '../../../assets/nuno rocha.png';
import bg from '../../../../public/bg2.jpg';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const user = useAppSelector((state: RootState) => users(state));
  const [showToast, setShowToast] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const handleLogin = (data: LoginUser) => {
    signIn({
      email: data.email,
      password: data.password
    });
  }

  useEffect(() => {
    if (user.createdStatus === 'failed') {
      setShowToast(true);
    }
  }, [user.createdStatus]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showToast]);

  const handleBgLoadComplete = () => {
    setBgLoaded(true);
  }

  return (
    <>
      <div className="flex justify-center h-screen relative">
        <Image
          src={bg}
          alt='Background Image'
          priority={true}
          fill={true}
          onLoadingComplete={handleBgLoadComplete}
        />
        {!bgLoaded && (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <Loading />
          </div>
        )}
        {bgLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-white py-10 rounded shadow-2xl md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 w-full">
              <Image
                src={logo}
                alt='Logo'
                className='w-20'
                priority={true}
              />
              <h1 className='font-bold text-xl mb-8'>EFNR</h1>
              <LoginForm handleLogin={handleLogin} />
            </div>
          </div>
        )}
      </div>
      <Toast 
        message={"Credências inválidas"}
        showToast={showToast}
        color="bg-red-500"
      />
    </>
  );
}
