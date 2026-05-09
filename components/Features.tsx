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
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need, nothing you don&apos;t</h2>
          <p className="text-lg text-gray-600">Built for speed and simplicity. We removed the bloat so you can focus on building.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-500 mb-6">
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
