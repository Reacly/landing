'use client';

import { motion } from 'motion/react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['1 website', '50 responses / month', 'Branded widget', '7-day history'],
      cta: 'Get started',
      highlight: false
    },
    {
      name: 'Starter',
      price: '$3',
      period: 'per month',
      features: ['1 website', 'Unlimited responses', 'Remove branding', 'Full history', 'Export data'],
      cta: 'Start 14-day free trial',
      highlight: true
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      features: ['Up to 5 websites', 'Unlimited responses', 'Remove branding', 'Slack notifications', 'Custom questions'],
      cta: 'Start 14-day free trial',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Simple, honest pricing</h2>
          <p className="text-lg text-gray-600">Start for free. Upgrade when you need more power.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col relative bg-white rounded-xl transition-transform hover:-translate-y-2 duration-300 ${
                plan.highlight 
                  ? 'border-2 border-emerald-500 shadow-[0_8px_30px_rgb(16,185,129,0.12)]' 
                  : 'border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
              } p-8`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 font-medium text-sm">{plan.period}</span>
                </div>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all active:scale-95 ${
                  plan.highlight 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-md' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm font-medium text-gray-500 mt-12"
        >
          All paid plans include a 14-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
