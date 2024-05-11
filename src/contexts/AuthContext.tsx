"use client";

import { ReactNode, createContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { parseCookies } from 'nookies';

import { RootState } from '@/lib/redux/store';
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchUser, login, logout, users } from '@/lib/redux/features/auth/usersSlice';

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  userObject: {
    firstname: string,
    lastname: string,
    email: string
  };
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
  signOut: () => Promise<void>
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
  const userObject = {
    firstname: user.data.firstname,
    lastname: user.data.lastname,
    email: user.data.sub,
  };

  useEffect(() => {

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
  }, [router, user]);

  useEffect(() => {

    if (user.createdStatus === 'succeeded') {
      dispatch(fetchUser());
    }
  }, [user.createdStatus]);

  async function signIn({ email, password }: SignInData) {
    dispatch(login({ email, password }));
  }

  async function signOut() {
    dispatch(logout());
    router.push('/auth/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, userObject }}>
      {children}
    </AuthContext.Provider>
  )
}
