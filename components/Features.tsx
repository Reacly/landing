'use client';

import { Code2, BarChart3, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      title: 'One-line install',
      description: 'A single script tag is all it takes. No build step, no npm, no config file. Paste it anywhere HTML is accepted.',
      icon: Code2
    },
    {
      title: 'Per-page analytics',
      description: 'See ratings and comments broken down by page URL. Know exactly which pages are confusing visitors.',
      icon: BarChart3
    },
    {
      title: 'Weekly email digest',
      description: 'Every Monday, a summary of your site\'s feedback lands in your inbox. No dashboard required.'.replace(/'/g, "&apos;"),
      icon: Mail
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Everything you need to collect user feedback, nothing you don&apos;t</h2>
          <p className="text-xl text-gray-600">Built for speed and simplicity. We removed the bloat from traditional user feedback software so you can focus on building.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
