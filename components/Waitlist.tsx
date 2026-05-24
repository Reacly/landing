'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check } from 'lucide-react';

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
        body: JSON.stringify({ email }),
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
    <section id="waitlist" className="relative py-28 overflow-hidden">
      {/* Layered gradient bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-300/30 blur-3xl animate-float" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-300/30 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mb-6"
          >
            <span className="text-amber-500">★</span>
            <span className="text-xs font-semibold text-gray-700">
              Lifetime <span className="text-emerald-600">40% off</span> for waitlist members
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 tracking-tight leading-[1.1]">
            Be first. Get the founder pricing.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            We launch in 4 weeks. Join the waitlist for early access, a permanent discount,
            and an open inbox if you want to shape the product.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-md mx-auto bg-white border-2 border-emerald-500 rounded-2xl p-6 shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                  className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <Check className="w-7 h-7 text-white" strokeWidth={3} />
                </motion.div>
                <p className="text-lg font-bold text-gray-900 mb-1">You&apos;re in. Welcome 🎉</p>
                <p className="text-sm text-gray-600">
                  Check your inbox for a confirmation. We&apos;ll email you the moment Reacly is ready.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-4"
              >
                <input
                  type="email"
                  placeholder="founder@yoursite.com"
                  required
                  disabled={status === 'loading'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 shadow-sm text-gray-900 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.97] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 min-w-[160px] shadow-md hover:shadow-lg"
                >
                  {status === 'loading' ? (
                    <span>Joining…</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span>Claim my spot</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <p className="text-red-600 text-sm font-medium mb-4">{errorMessage}</p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>One email per month max</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-emerald-200/50 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-sm font-semibold text-gray-800">
                <span className="text-emerald-700">47 makers</span> joined this week
              </p>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <p className="text-sm text-gray-500">Spots remaining: <span className="font-semibold text-gray-900">53 / 100</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
