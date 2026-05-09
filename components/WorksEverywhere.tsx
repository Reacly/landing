'use client';

import { motion } from 'motion/react';

export default function WorksEverywhere() {
  const platforms = [
    'Webflow', 'Framer', 'Next.js', 'React', 
    'Vue', 'WordPress', 'Carrd', 'Wix', 
    'Squarespace', 'Shopify', 'Plain HTML'
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Works on every platform you use
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          No npm install. No framework lock-in. If it renders HTML, Reacly works.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.2 + (index * 0.05),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full font-medium shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors cursor-default select-none"
            >
              {platform}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
