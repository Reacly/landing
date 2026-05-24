'use client';

import { motion } from 'motion/react';
import { Sparkles, Mail, Clock } from 'lucide-react';

export default function AiDigest() {
  return (
    <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Monday mornings, sorted</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
              The only newsletter you&apos;ll actually read.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Reacly reads every piece of feedback from the week and emails you{' '}
              <span className="text-gray-900 font-semibold">one concrete fix</span> — not a dashboard,
              not a data dump, not a chart you have to interpret. Just the single most impactful thing to ship this week.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>2-minute read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Every Monday 7am local</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              {/* Decorative card behind */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl rotate-1" />

              {/* Main email card */}
              <div className="relative bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-50 to-white px-6 py-4 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-tight">Your Reacly digest</p>
                        <p className="text-[11px] text-gray-500 leading-tight">Week of May 5 · sent in 47s</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">7:00 AM</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-base text-gray-900 mb-4 leading-relaxed">
                    Hey Maya — your{' '}
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 text-sm font-mono">/pricing</code>{' '}
                    page had the most negative ratings this week{' '}
                    <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                      3 × 😞
                    </span>
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-100 rounded-xl p-4 mb-5"
                  >
                    <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">What they said</p>
                    <ul className="space-y-1.5 text-sm text-gray-700 italic">
                      <li>&ldquo;Couldn&apos;t tell the difference between Starter and Pro.&rdquo;</li>
                      <li>&ldquo;Why is there a free plan if I have to upgrade for everything?&rdquo;</li>
                      <li>&ldquo;Comparison felt buried.&rdquo;</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="bg-white border-2 border-emerald-500 rounded-xl p-4 relative overflow-hidden shadow-sm"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="text-emerald-500">→</span> This week&apos;s one fix
                    </p>
                    <p className="text-base font-semibold text-gray-900 leading-snug mb-1">
                      Add a one-line tagline under each plan name explaining who it&apos;s for.
                    </p>
                    <p className="text-xs text-gray-500">
                      Estimated time to ship: 15 minutes · Expected impact: +0.6 avg rating
                    </p>
                  </motion.div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">See full breakdown ↗</p>
                    <p className="text-xs text-gray-400">Reply &quot;done&quot; when shipped 📬</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
