'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

export default function Waitlist() {
  const posthog = usePostHog();

  return (
    <section id="waitlist" className="py-24 bg-emerald-50 border-y border-emerald-100 overflow-hidden relative">
      {/* Modern Background Blur/Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-teal-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Sign up today and start collecting feedback from your users.
          </p>
          
          <div className="flex justify-center mb-4 relative z-10">
            <Link 
              href={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/sign-up`}
              onClick={() => posthog?.capture('clicked_get_started', { location: 'footer_cta' })}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95 flex items-center justify-center min-w-[140px] shadow-sm text-lg"
            >
              Get Started
            </Link>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
