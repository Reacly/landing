'use client';

import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Paste one line',
      description: 'Add our lightweight script tag anywhere on your website. No build step required.',
      visual: (
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-hidden text-nowrap group-hover:-translate-y-1 transition-transform duration-300 shadow-md">
          <span className="text-pink-400">&lt;script</span> <span className="text-blue-300">src=</span><span className="text-green-300">&quot;https://reacly.io/widget.js&quot;</span> <span className="text-blue-300">data-site=</span><span className="text-green-300">&quot;your-id&quot;</span><span className="text-pink-400">&gt;&lt;/script&gt;</span>
        </div>
      )
    },
    {
      number: '02',
      title: 'Visitors leave feedback',
      description: 'A beautiful, unintrusive widget appears, collecting ratings and text feedback.',
      visual: (
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.08)] h-full group-hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="flex gap-2 relative z-10 group-hover:scale-105 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-50 border border-gray-100 group-hover:-rotate-6 transition-transform">😞</div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-50 border border-gray-100 group-hover:-rotate-3 transition-transform">😐</div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-emerald-100 border border-emerald-200 ring-1 ring-emerald-500 ring-offset-1 group-hover:rotate-6 transition-transform group-hover:shadow-sm">🤩</div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'You see it all',
      description: 'Access a simple dashboard with trends, per-page data, and weekly email reports.',
      visual: (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] h-full flex flex-col justify-end gap-2 group-hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
          
          <div className="w-full flex justify-between items-end mb-2 relative z-10 px-1">
            <div className="flex flex-col gap-1">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Avg Rating</div>
              <div className="text-xl font-bold tracking-tight text-gray-900">4.8<span className="text-sm text-gray-400 font-normal">/5</span></div>
            </div>
            <div className="flex -space-x-1">
               <div className="w-4 h-4 rounded-full border border-white bg-emerald-100 flex items-center justify-center text-[8px]">🤩</div>
               <div className="w-4 h-4 rounded-full border border-white bg-green-100 flex items-center justify-center text-[8px]">👍</div>
            </div>
          </div>
          
          <div className="flex items-end gap-2 h-16 relative z-10">
            <div className="w-full bg-gray-100 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-300 delay-75"></div>
            <div className="w-full bg-gray-100 rounded-t-sm h-[70%] group-hover:h-[60%] transition-all duration-300 delay-100"></div>
            <div className="w-full bg-emerald-100 rounded-t-sm h-[90%] group-hover:h-[100%] group-hover:bg-emerald-300 transition-all duration-300 delay-150 relative overflow-hidden flex flex-col justify-end items-center pb-1">
              <div className="text-[8px] font-bold text-emerald-700">12</div>
              <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div className="w-full bg-gray-100 rounded-t-sm h-[60%] group-hover:h-[75%] transition-all duration-300 delay-200"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Up and running in 60 seconds</h2>
          <p className="text-gray-600 max-w-2xl text-lg">You don&apos;t need a developer to install Reacly. It&apos;s built for anyone to use.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col gap-6 group cursor-default"
            >
              <div className="h-40 rounded-xl bg-gray-100/50 p-4 border border-gray-200/50 flex flex-col justify-center relative overflow-hidden">
                {step.visual}
              </div>
              <div className="pr-4">
                <div className="text-xs font-bold font-mono tracking-widest text-emerald-600 mb-3 bg-emerald-50 inline-block px-2 py-1 rounded">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-emerald-500 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
