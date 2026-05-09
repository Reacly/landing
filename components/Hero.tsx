'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
const SIGN_IN_URL = process.env.NEXT_PUBLIC_SIGN_IN_URL ?? `${APP_URL}/sign-in`;

export default function Hero() {
  const { isSignedIn, isLoaded } = useUser();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative">
      {/* Modern Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="flex-1 text-center lg:text-left relative">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-8 mx-auto lg:mx-0"
        >
          <div className="pulse-dot"></div>
          <span className="text-sm font-medium text-gray-700">Now in early access</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
        >
          Know what your visitors <span className="text-emerald-500">actually think</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
        >
          Paste one script tag. Get real feedback from every page of your site. Works on Webflow, Framer, React, WordPress — anything.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          {isLoaded && isSignedIn ? (
            <a
              href={`${APP_URL}/sites`}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium transition-transform hover:scale-[1.02] active:scale-95 text-center text-lg shadow-sm"
            >
              Go to dashboard
            </a>
          ) : (
            <Link href="#waitlist" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium transition-transform hover:scale-[1.02] active:scale-95 text-center text-lg shadow-sm">
              Join the waitlist
            </Link>
          )}
          <Link href="#how-it-works" className="w-full sm:w-auto px-6 py-3.5 text-gray-600 hover:text-gray-900 font-medium transition-colors inline-flex items-center justify-center gap-2 group">
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-4"
        >
          <div className="flex -space-x-3 hover:space-x-[-8px] transition-all duration-300">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User maker" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100" referrerPolicy="no-referrer" />
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium cursor-default">Join 47 indie makers already on the waitlist</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full max-w-lg lg:max-w-none hidden md:block"
      >
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] aspect-[4/3] flex flex-col overflow-hidden group">
          {/* Mock Browser Header */}
          <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 flex-1 max-w-xs h-6 bg-white border border-gray-200 rounded-md flex items-center px-2">
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">acme.co/pricing</span>
            </div>
          </div>
          
          {/* Mock Website Content - Realistic */}
          <div className="p-8 flex-1 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-[70%] mb-12">
              <div className="w-16 h-16 bg-emerald-500 rounded-xl mb-6 shadow-sm flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-4 border-white opacity-50"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Scale your workflow.</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Connect your tools and automate everything in one click. Our new integration engine is here to save you hours every week.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100">
                Read the documentation
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Faint dashboard grid in background */}
            <div className="absolute right-[-10%] top-[20%] w-[50%] h-[60%] border border-gray-200 bg-white rounded-xl shadow-sm p-4 rotate-3 opacity-90 transition-transform group-hover:rotate-0 duration-500">
               <div className="w-full h-8 bg-gray-50 rounded-md mb-3"></div>
               <div className="flex gap-3 h-20 mb-3">
                 <div className="flex-1 bg-gray-50 rounded-md"></div>
                 <div className="flex-1 bg-blue-50 rounded-md"></div>
               </div>
               <div className="w-full h-12 bg-gray-50 rounded-md"></div>
            </div>
          </div>
          
          {/* Floating Widget Mockup */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute bottom-6 right-6 w-72 bg-white rounded-xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-gray-100 p-4 transform transition-transform hover:-translate-y-1 hover:shadow-[0_16px_50px_rgb(0,0,0,0.16)] duration-300"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mx-auto mb-3">✓</div>
                <p className="font-semibold text-gray-900">Thanks for the feedback!</p>
              </motion.div>
            ) : (
              <>
                <p className="text-sm font-semibold text-gray-800 mb-3 text-center">Was this page helpful?</p>
                <div className="flex justify-center gap-3 mb-4">
                  <button 
                    onClick={() => setSelectedRating(1)}
                    className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center text-2xl duration-200 ${selectedRating === 1 ? 'bg-emerald-100 border-emerald-300 ring-2 ring-emerald-500 ring-offset-2 scale-110' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
                  >😞</button>
                  <button 
                    onClick={() => setSelectedRating(2)}
                    className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center text-2xl duration-200 ${selectedRating === 2 ? 'bg-emerald-100 border-emerald-300 ring-2 ring-emerald-500 ring-offset-2 scale-110' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
                  >😐</button>
                  <button 
                    onClick={() => setSelectedRating(3)}
                    className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center text-2xl duration-200 ${selectedRating === 3 ? 'bg-emerald-100 border-emerald-300 ring-2 ring-emerald-500 ring-offset-2 scale-110' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
                  >🤩</button>
                </div>
                {selectedRating !== null && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden">
                    <input type="text" placeholder="What could be better? (optional)" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-3 text-gray-600 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
                    <button onClick={() => setIsSubmitted(true)} className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-2 text-sm font-medium transition-colors active:scale-95 duration-150">Send feedback</button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
