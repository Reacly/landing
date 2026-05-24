'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Faq() {
  const faqs = [
    {
      question: "Will Reacly slow down my website?",
      answer: "No. The widget script is under 5KB, loads asynchronously, and never blocks your page render. Your Lighthouse score won't budge."
    },
    {
      question: "Does it work with Content Security Policy (CSP)?",
      answer: "Yes. We provide the exact CSP directives to whitelist. Works with strict CSP setups."
    },
    {
      question: "Where is visitor data stored? Is it GDPR compliant?",
      answer: "All data is stored in EU-based servers. We don't use cookies, don't fingerprint visitors, and collect no personally identifiable information unless the visitor voluntarily submits their email."
    },
    {
      question: "Can I customize which fields appear in the widget?",
      answer: "Yes. From your dashboard you can toggle on/off: emoji rating, text comment, NPS score, effort score, multiple choice, and contact email."
    },
    {
      question: "What happens after I join the waitlist?",
      answer: "You'll get a confirmation email. When we launch, waitlist members get first access and a lifetime 40% discount — no credit card needed now."
    },
    {
      question: "Do I need a developer to install this?",
      answer: "No. You paste one script tag. If you can edit your website's HTML (or paste into Webflow/Framer/WordPress), you're good to go."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Frequently asked questions</h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className="flex-shrink-0 text-gray-400">
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-emerald-500' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
