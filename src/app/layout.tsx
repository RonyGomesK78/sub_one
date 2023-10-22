"use client";
import './globals.css';

import React, { useState } from 'react';

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google';

import { Header } from '@/components/Header';
import { UserProfile } from '@/components/UserProfile';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isUserProfileVisible, setUserProfileVisible] = useState(false);

  const toggleUserProfile = () => {
    setUserProfileVisible(!isUserProfileVisible);
  };

  const onAbortUserProfile = () => {
    setUserProfileVisible(false);
  };

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <Header 
          toggleUserProfile={toggleUserProfile}
        />
        {
          isUserProfileVisible &&
          <UserProfile 
            onAbortUserProfile={onAbortUserProfile}
          />
        }
        {children}
      </body>
    </html>
  )
}
