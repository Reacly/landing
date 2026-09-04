'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { usePostHog } from 'posthog-js/react';
import { useState } from 'react';

export default function Hero() {
  const posthog = usePostHog();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden w-full pt-32 pb-20">
      {/* Modern Background Mesh & Floating Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-mesh"></div>
      
      {/* Floating Elements (Background) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] text-4xl animate-float opacity-40">😞</div>
        <div className="absolute top-40 right-[15%] text-5xl animate-float-delayed opacity-30">🤩</div>
        <div className="absolute bottom-20 left-[40%] text-3xl animate-float opacity-50">😐</div>
        <div className="absolute bottom-40 right-[5%] text-4xl animate-float-delayed opacity-40">👍</div>
        <div className="absolute top-10 right-[40%] w-12 h-12 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-[20%] w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
      
      <div className="flex-1 text-center lg:text-left relative">
        {/* <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-8 mx-auto lg:mx-0"
        >
          <div className="pulse-dot"></div>
          <span className="text-sm font-medium text-gray-700">Now in early access</span>
        </motion.div> */}
        
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
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
          A lightweight feedback widget that helps you understand exactly what your users need. Paste a single script tag to start collecting insights on any platform in minutes.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <Link 
            href={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/sign-up`} 
            onClick={() => posthog?.capture('clicked_get_started', { location: 'hero' })}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium transition-transform hover:scale-[1.02] active:scale-95 text-center text-lg shadow-sm"
          >
            Get Started
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto px-6 py-3.5 text-gray-600 hover:text-gray-900 font-medium transition-colors inline-flex items-center justify-center gap-2 group">
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        {/* <motion.div 
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
        </motion.div> */}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full max-w-lg lg:max-w-none hidden md:block relative z-10"
      >
        <div className="relative rounded-2xl glass-panel aspect-[4/3] flex flex-col overflow-hidden group">
          {/* Mock Browser Header */}
          <div className="h-12 border-b border-white/20 bg-white/40 flex items-center px-4 gap-2 backdrop-blur-md">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 flex-1 max-w-xs h-6 bg-white/60 border border-white/40 rounded-md flex items-center px-2">
              <span className="text-[10px] text-gray-500 font-mono tracking-wider">acme.co/pricing</span>
            </div>
          </div>
          
          {/* Mock Website Content - Realistic Dashboard */}
          <div className="flex-1 bg-gray-50 relative overflow-hidden flex">
            {/* Sidebar Mockup */}
            <div className="w-16 sm:w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6 z-10 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gray-900 mb-4 flex items-center justify-center text-white font-bold text-sm shadow-sm">R</div>
              <div className="w-8 h-8 rounded-md bg-emerald-100 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-emerald-500"></div>
              </div>
              <div className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors">
                <div className="w-4 h-1 rounded-full bg-gray-300"></div>
              </div>
              <div className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>
            
            {/* Main Content Mockup */}
            <div className="p-6 sm:p-8 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">Overview</h2>
                  <p className="text-xs font-medium text-gray-500 mt-1">Analytics for reacly.io</p>
                </div>
                <div className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg hidden sm:flex items-center justify-center text-white text-xs font-semibold shadow-sm cursor-pointer">
                  Export Report
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-0.5 duration-200">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Responses</p>
                  <p className="text-2xl font-bold text-gray-900">1,294</p>
                  <p className="text-xs font-medium text-emerald-500 mt-1 flex items-center gap-1">
                    <span className="text-[10px]">↗</span> +12.5%
                  </p>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-0.5 duration-200">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Feedback Score</p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-xs font-medium text-emerald-500 mt-1 flex items-center gap-1">
                    <span className="text-[10px]">↗</span> +2.1%
                  </p>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-32 flex flex-col justify-end group cursor-pointer relative overflow-hidden">
                 <div className="flex items-center justify-between mb-auto relative z-10">
                   <p className="text-xs font-semibold text-gray-800">Weekly Engagement</p>
                   <p className="text-[10px] text-gray-400 font-medium">Last 7 days</p>
                 </div>
                 <div className="flex items-end gap-2 h-16 w-full max-w-[80%] mt-4 relative z-0">
                   {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                     <div key={i} className="flex-1 bg-emerald-100 rounded-t-sm transition-all duration-500 group-hover:bg-emerald-200" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Floating Widget Mockup */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute bottom-6 right-6 w-72 z-50 bg-white rounded-xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-gray-100 p-4 transform transition-transform hover:-translate-y-1 hover:shadow-[0_16px_50px_rgb(0,0,0,0.16)] duration-300"
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
      </div>
    </section>
  );
}
