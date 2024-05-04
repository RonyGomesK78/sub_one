"use client";

import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';

export default function Login() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("🚀 ~ Login ~ isAuthenticated:", isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/'); // Redirect to the home if already logged in
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>LOGIN PAGE</h1>
    </div>
  );
}