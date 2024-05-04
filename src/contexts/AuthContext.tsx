"use client";

import { ReactNode, createContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { parseCookies } from 'nookies';


import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchUser, users, login } from '@/lib/redux/features/auth/usersSlice';
import { RootState } from '@/lib/redux/store';
import axiosInstance from '@/lib/axios/api';

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType)


export function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => users(state));

  const pathname = usePathname();
  console.log("🚀 ~ AuthProvider ~ pathname:", pathname);
  const router = useRouter();

  const isAuthenticated = user.status === 'succeeded' ? true : false;

  console.log("🚀 ~ AuthProvider ~ isAuthenticated:", isAuthenticated)

  useEffect(() => {

    // dispatch(login({ 
    //   email: "kiro@gmail.com",
    //   password: "!password78K"
    // }));

    const { 'subone.token': token } = parseCookies();

    if (!token) {
      router.push('/auth/login');
    }
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (isAuthenticated && pathname === '/auth/login') {
      router.push('/'); // Change '/dashboard' to the path you want authenticated users to be redirected to
    }
  }, [router, isAuthenticated]);

  async function signIn({ email, password }: SignInData) {
    console.log('loggedIn');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}