'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [step, setStep] = useState<'rating' | 'comment' | 'thanks'>('rating');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  // Live ticker — counts up from a base number
  const count = useMotionValue(2847);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const t = setInterval(() => {
      animate(count, count.get() + Math.floor(Math.random() * 3) + 1, {
        duration: 1.2,
        ease: 'easeOut',
      });
    }, 3500);
    return () => clearInterval(t);
  }, [count]);

  // Auto-cycle through widget states after 8s of inactivity
  useEffect(() => {
    if (step === 'thanks') {
      const t = setTimeout(() => {
        setStep('rating');
        setSelectedRating(null);
        setComment('');
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [step]);

  const emojis = ['😞', '😐', '🙂', '😊', '🤩'];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background — soft gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-full bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative">
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-8 mx-auto lg:mx-0 shadow-sm"
          >
            <div className="pulse-dot" />
            <span className="text-sm font-medium text-gray-700">
              <motion.span>{rounded}</motion.span> ratings collected this week
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-gray-900 tracking-tight leading-[1.05] mb-6"
          >
            Your visitors are{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">leaving</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <motion.path
                  d="M0,4 Q25,0 50,4 T100,4"
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </span>
            .
            <br />
            Find out why before they go.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            One script tag. Zero setup. A delightful widget that collects honest feedback from every page —
            so you stop guessing what&apos;s broken and start fixing what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
          >
            <Link
              href="#waitlist"
              className="group w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-lg font-medium text-base shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Get early access — free
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto px-6 py-3.5 text-gray-700 hover:text-gray-900 font-medium transition-colors inline-flex items-center justify-center gap-2 group border border-gray-200 hover:border-gray-300 rounded-lg bg-white"
            >
              See it in action
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-gray-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-xs font-semibold text-emerald-900"
                  >
                    {['J', 'M', 'A', 'S', 'K'][i - 1]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">47 makers</span> already on the waitlist
              </p>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 text-base">★★★★★</span>
              <span className="text-sm text-gray-600 font-medium">4.9 avg from beta users</span>
            </div>
          </motion.div>
        </div>

        {/* Right column — Live demo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative">
            {/* Floating dashboard metric card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -left-2 lg:-left-10 z-20 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 p-3 w-44 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Avg Rating</span>
                <span className="text-[10px] text-emerald-600 font-semibold">↑ 0.4</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">4.8</span>
                <span className="text-xs text-gray-400">/5</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 rounded-full bg-emerald-500"
                    style={{ opacity: i <= 4 ? 1 : 0.3 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating insight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-2 lg:-right-10 z-20 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 p-3 w-52 animate-float"
              style={{ animationDelay: '2.5s' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-gray-900 uppercase tracking-wider">AI Insight</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Pricing page rated 2.1 — comparison feels unclear
              </p>
            </motion.div>

            {/* Main mock browser */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] aspect-[4/3] flex flex-col overflow-hidden">
              {/* Browser header */}
              <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-3 flex-1 max-w-xs h-5 bg-white border border-gray-200 rounded-md flex items-center px-2">
                  <span className="text-[9px] text-gray-400 font-mono">acme.co/pricing</span>
                </div>
                <div className="text-[9px] text-gray-300 font-mono">→ powered by Reacly</div>
              </div>

              {/* Mock website content */}
              <div className="p-6 flex-1 bg-gradient-to-br from-white via-gray-50/30 to-emerald-50/20 relative overflow-hidden">
                <div className="max-w-[75%]">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-sm" />
                  </div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded mb-5" />
                  <div className="flex gap-2">
                    <div className="w-24 h-24 bg-white border border-gray-200 rounded-lg shadow-sm p-2">
                      <div className="w-8 h-2 bg-gray-200 rounded mb-1.5" />
                      <div className="w-10 h-3 bg-gray-900 rounded mb-2" />
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-100 rounded" />
                        <div className="w-4/5 h-1 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="w-24 h-24 bg-white border-2 border-emerald-500 rounded-lg shadow-sm p-2 relative">
                      <div className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-emerald-500 text-white text-[7px] font-bold rounded-full">POPULAR</div>
                      <div className="w-8 h-2 bg-gray-200 rounded mb-1.5" />
                      <div className="w-10 h-3 bg-gray-900 rounded mb-2" />
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-100 rounded" />
                        <div className="w-4/5 h-1 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating widget — interactive */}
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-5 right-5 w-[280px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-4"
              >
                {step === 'rating' && (
                  <>
                    <p className="text-sm font-semibold text-gray-900 mb-3 text-center">
                      How was this page?
                    </p>
                    <div className="flex justify-between gap-1 mb-1">
                      {emojis.map((e, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedRating(i + 1);
                            setTimeout(() => setStep('comment'), 400);
                          }}
                          className={`flex-1 aspect-square rounded-xl flex items-center justify-center text-2xl transition-all duration-200 ${
                            selectedRating === i + 1
                              ? 'bg-emerald-100 scale-110 ring-2 ring-emerald-500'
                              : 'hover:bg-gray-50 hover:scale-110'
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 text-center mt-2">
                      ↑ Try clicking one
                    </p>
                  </>
                )}

                {step === 'comment' && (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                        {emojis[(selectedRating ?? 3) - 1]}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        Tell us why — optional
                      </p>
                    </div>
                    <input
                      autoFocus
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="What stood out?"
                      className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-2 text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                    <button
                      onClick={() => setStep('thanks')}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-2 text-sm font-medium transition-all active:scale-[0.98]"
                    >
                      Send feedback →
                    </button>
                  </>
                )}

                {step === 'thanks' && (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="py-3 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                      className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2"
                    >
                      ✓
                    </motion.div>
                    <p className="font-semibold text-gray-900 text-sm">Thanks! That helps.</p>
                    <p className="text-xs text-gray-500 mt-0.5">You just made a product better.</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
