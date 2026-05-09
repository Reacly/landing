'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useUser } from '@clerk/nextjs';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
const SIGN_IN_URL = process.env.NEXT_PUBLIC_SIGN_IN_URL ?? `${APP_URL}/sign-in`;

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-500 rounded-[4px]"></div>
            </div>
            <span className="font-semibold text-xl text-gray-900 tracking-tight">Reacly</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              Pricing
            </Link>
            {isLoaded && (
              isSignedIn ? (
                <a
                  href={`${APP_URL}/sites`}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  Go to dashboard
                </a>
              ) : (
                <a
                  href={SIGN_IN_URL}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  Sign in
                </a>
              )
            )}
            {!isLoaded && (
              <div className="w-24 h-9 rounded-lg bg-emerald-100 animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
