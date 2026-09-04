'use client';

import { motion } from 'motion/react';

export default function WorksEverywhere() {
  const platforms = [
    { name: 'Webflow', icon: 'webflow' },
    { name: 'Framer', icon: 'framer' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'React', icon: 'react' },
    { name: 'Vue', icon: 'vuedotjs' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Carrd', icon: 'carrd' },
    { name: 'Wix', icon: 'wix' },
    { name: 'Squarespace', icon: 'squarespace' },
    { name: 'Shopify', icon: 'shopify' },
    { name: 'Plain HTML', icon: 'html5' }
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
        
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          {/* Gradient masks for smooth fade in/out at edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee py-4 hover:[animation-play-state:paused]">
            {/* Double the array for seamless infinite scroll */}
            {[...platforms, ...platforms].map((platform, index) => (
              <div 
                key={index} 
                className="px-5 py-2.5 mx-3 bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-gray-700 rounded-full font-medium whitespace-nowrap transition-transform duration-300 hover:scale-105 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md cursor-default select-none flex items-center gap-2.5"
              >
                <img src={`https://cdn.simpleicons.org/${platform.icon}`} alt={`${platform.name} logo`} className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
