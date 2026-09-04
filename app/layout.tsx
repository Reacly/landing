import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PostHogProvider } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://reacly.io'),
  title: {
    default: 'Reacly | The Best Website Feedback Widget',
    template: '%s | Reacly'
  },
  description: 'Reacly is a powerful website feedback widget. Collect user feedback, identify UX issues, and improve your product with a simple on-page feedback form.',
  keywords: ['website feedback widget', 'user feedback software', 'on-page feedback form', 'visual feedback tool for websites', 'collect user feedback on website', 'feedback widget for SaaS'],
  authors: [{ name: 'Reacly' }],
  creator: 'Reacly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reacly.io',
    siteName: 'Reacly',
    title: 'Reacly | The Best Website Feedback Widget',
    description: 'Reacly is a powerful website feedback widget. Collect user feedback, identify UX issues, and improve your product.',
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
    title: 'Reacly | The Best Website Feedback Widget',
    description: 'Reacly is a powerful website feedback widget. Collect user feedback, identify UX issues, and improve your product.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reacly',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  url: 'https://reacly.io',
  description: 'Reacly is a powerful website feedback widget. Collect user feedback, identify UX issues, and improve your product with a simple on-page feedback form.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
