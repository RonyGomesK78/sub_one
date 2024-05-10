"use client";

import { ReactNode, createContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { parseCookies } from 'nookies';

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchUser, login, users } from '@/lib/redux/features/auth/usersSlice';
import { RootState } from '@/lib/redux/store';

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
  const router = useRouter();

  let isAuthenticated = user.status === 'succeeded' ? true : false;

  useEffect(() => {

    const { 'subone.token': token } = parseCookies();
    console.log("🚀 ~ useEffect ~ token:", token)

    if (!token) {
      router.push('/auth/login');
    }
    dispatch(fetchUser());
  }, []);

  useEffect(() => {

    if (isAuthenticated && pathname === '/auth/login') {
      router.push('/'); // Change '/dashboard' to the path you want authenticated users to be redirected to
    }
  }, [router, user]);

  useEffect(() => {

    if (user.createdStatus === 'succeeded') {
      dispatch(fetchUser());
    }
  }, [user.createdStatus]);

  async function signIn({ email, password }: SignInData) {
    dispatch(login({ email, password }));
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
