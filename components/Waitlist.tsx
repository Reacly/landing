'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      
      setStatus('success');
      setEmail('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Be first. Shape the product.</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Join the waitlist and get early access + lifetime 40% off when we launch.
          </p>
          
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 text-green-800 border border-green-200 rounded-lg p-4 font-medium mb-4"
            >
              You&apos;re on the list! We&apos;ll be in touch soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4 relative z-10">
              <input 
                type="email" 
                placeholder="your@email.com" 
                required
                disabled={status === 'loading'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 shadow-sm"
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center min-w-[140px] shadow-sm"
              >
                {status === 'loading' ? 'Joining...' : 'Join waitlist'}
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <div className="text-red-600 text-sm font-medium mb-4">{errorMessage}</div>
          )}
          
          <p className="text-sm text-gray-500">
            No spam. Unsubscribe anytime. We launch in 4 weeks.
          </p>
          <div className="mt-8 pt-8 border-t border-emerald-100/50">
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
              className="text-sm font-semibold text-emerald-900 inline-flex items-center gap-2 bg-white/60 px-4 py-1.5 rounded-full shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              47 people already joined
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
