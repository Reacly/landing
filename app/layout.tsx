import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Reacly — Feedback widget for any website',
  description: 'Get real visitor feedback with one script tag. Works on Webflow, Framer, React, and more.',
};

const isSatellite = process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === 'true';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      isSatellite={isSatellite}
      domain={isSatellite ? process.env.NEXT_PUBLIC_CLERK_DOMAIN : undefined}
      signInUrl={process.env.NEXT_PUBLIC_SIGN_IN_URL}
      afterSignOutUrl="/"
    >
      <html lang="en" className={`${inter.variable} scroll-smooth`}>
        <body className="antialiased bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col" suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
