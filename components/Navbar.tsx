'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-white/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-[3px] bg-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-sm group-hover:scale-90 transition-transform" />
              </div>
            </div>
            <span className="font-semibold text-xl text-gray-900 tracking-tight">Reacly</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="#how-it-works" className="hidden sm:block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              How it works
            </Link>
            <Link href="#demo" className="hidden sm:block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Try it
            </Link>
            <Link href="#pricing" className="hidden sm:block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link
              href="#waitlist"
              className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.03] active:scale-95 shadow-sm hover:shadow-emerald-500/30 hover:shadow-md"
            >
              Get early access
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
