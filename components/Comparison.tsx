'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const BEFORE = [
  'Stare at Google Analytics, see a 67% bounce rate, panic.',
  'Wonder if the new pricing copy is the problem. Or the hero. Or both.',
  'Tweet asking for feedback. Get 1 reply from your mom.',
  'Email Hotjar quote: $99/mo. Close tab.',
  'Build a Typeform survey. Wire up the embed. Nobody fills it out.',
  'Ship a redesign on vibes alone. Pray.',
];

const AFTER = [
  'Open Reacly. Sort feedback by /pricing.',
  'Read 4 actual complaints in 90 seconds.',
  'Spot the pattern: people think Pro and Starter are the same.',
  'Add a one-line differentiator under each plan name.',
  'Watch Tuesday&apos;s ratings climb from 3.2 to 4.6.',
  'Get back to building. Repeat next week.',
];

export default function Comparison() {
  return (
    <section className="relative py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(16,185,129,0.05),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            One bad Tuesday, two ways.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Same conversion drop. Same indie maker. The difference is which tools they reach for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/40 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 mb-5">
                <X className="w-3 h-3 text-red-500" />
                <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">Without Reacly</span>
              </div>
              <ul className="space-y-3.5">
                {BEFORE.map((line, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                      <span className="text-xs text-gray-400 group-hover:text-red-500 font-mono">{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed line-through decoration-gray-300 decoration-[1px]">
                      {line}
                    </p>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Result</p>
                <p className="text-sm font-medium text-gray-500">3 hours lost. Still no answers.</p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border-2 border-emerald-500/30 p-7 relative overflow-hidden shadow-[0_8px_30px_rgba(16,185,129,0.08)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-5">
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">With Reacly</span>
              </div>
              <ul className="space-y-3.5">
                {AFTER.map((line, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: line }} />
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-emerald-100 text-center">
                <p className="text-xs text-emerald-600 uppercase tracking-widest mb-1 font-semibold">Result</p>
                <p className="text-sm font-medium text-gray-900">
                  4 minutes. Real signal. <span className="text-emerald-600">Fix shipped.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
