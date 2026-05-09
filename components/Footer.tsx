'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-t border-gray-200 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center grayscale opacity-80">
            <div className="w-3 h-3 bg-emerald-500 rounded-[3px]"></div>
          </div>
          <span className="text-sm font-medium text-gray-600">
            &copy; {new Date().getFullYear()} Reacly. Built by an indie maker.
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Twitter</Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Product Hunt</Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy</Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms</Link>
        </div>
      </div>
    </motion.footer>
  );
}
