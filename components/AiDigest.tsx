'use client';

import { motion } from 'motion/react';

export default function AiDigest() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Your weekly AI coach, delivered to your inbox</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Every Monday, Reacly reads all your feedback and sends you one concrete fix &mdash; not a wall of data, just the single most impactful thing to improve this week.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative z-10"
          >
            <div className="glass-panel rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-1">🧠 Your Reacly Weekly Digest — Week of May 5</div>
                <div className="text-xs text-gray-500 flex gap-2">
                  <span>Reacly Digest</span>
                  <span>&lt;digest@reacly.io&gt;</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-800 text-sm mb-4 leading-relaxed font-sans">
                  Your <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">/pricing</code> page had the most negative ratings this week <span className="inline-block bg-red-50 text-red-700 px-1.5 py-0.5 rounded-full text-xs font-medium ml-1">3 😞</span>
                </p>
                <p className="text-gray-800 text-sm mb-6 leading-relaxed bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 italic">
                  Visitors who rated it low said the plan comparison was confusing.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                  <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-emerald-500">👉</span> This week&apos;s fix:
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed pl-6">
                    Add a one-line description under each plan name explaining who it&apos;s for.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
