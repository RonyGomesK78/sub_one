"use client";

import { ReactNode, createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, parseCookies } from 'nookies'


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
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    // dispatch(login({ 
    //   email: "kiro@gmail.com",
    //   password: "!password78K"
    // }));

    const { 'subone.token': token } = parseCookies();

    if (!token) {
      router.push('/auth/login');
    }

    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;

    dispatch(fetchUser());
    // if the token is present on the cookies then make a call to get the user information
    // if is don't have it then redirect to the login page
    console.log('Check if the user have the token');
    console.log("🚀 ~ AuthProvider ~ user:", user);

    // if (isAuthenticated === false) {
    //   // router.push('/login');
    //   console.log('not authenticated');
    //   router.push('/auth/login');
    // }
    
  }, []);

  async function signIn({ email, password }: SignInData) {
    console.log('loggedIn');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}