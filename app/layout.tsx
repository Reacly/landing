import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://reacly.io'),
  title: {
    default: 'Reacly — Feedback widget for any website',
    template: '%s | Reacly'
  },
  description: 'Get real visitor feedback with one script tag. Collect ratings, understand your users, and improve your product. Works on Webflow, Framer, React, and more.',
  keywords: ['feedback widget', 'website feedback', 'user feedback', 'customer satisfaction', 'NPS', 'SaaS', 'website analytics'],
  authors: [{ name: 'Reacly' }],
  creator: 'Reacly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reacly.io',
    siteName: 'Reacly',
    title: 'Reacly — Feedback widget for any website',
    description: 'Get real visitor feedback with one script tag. Collect ratings, understand your users, and improve your product.',
    images: [
      {
        url: 'https://reacly.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reacly Feedback Widget',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reacly — Feedback widget for any website',
    description: 'Get real visitor feedback with one script tag. Works on Webflow, Framer, React, and more.',
    creator: '@reacly',
    images: ['https://reacly.io/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://reacly.io',
  },
};

export const viewport = {
  themeColor: '#10B981',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
