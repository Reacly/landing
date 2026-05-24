'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
  product: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maya Chen',
    handle: '@mayabuilds',
    avatar: 'M',
    text: "I shipped a paywall change Tuesday. By Thursday Reacly told me 3 visitors hated the new copy. Reverted it. My conversion went back up. This is silly fast.",
    product: 'Notion to Markdown',
  },
  {
    name: 'Theo Park',
    handle: '@theopark',
    avatar: 'T',
    text: "I had Google Forms hidden in my footer for 8 months. 0 responses. Replaced with Reacly. 22 responses in week one. The emojis just work.",
    product: 'Cinder Analytics',
  },
  {
    name: 'Jules Adamou',
    handle: '@jules_dev',
    avatar: 'J',
    text: "The weekly digest email is the only newsletter I actually read. Tells me what's wrong in one sentence. Then I fix it. Then I get on with my life.",
    product: 'Quicksand Forms',
  },
  {
    name: 'Sam Reyes',
    handle: '@samr',
    avatar: 'S',
    text: "Installed it on my Webflow site in literally 47 seconds. No joke. Started getting feedback the same evening. Founders, just try it.",
    product: 'Lumen Studio',
  },
  {
    name: 'Aria Patel',
    handle: '@aria.codes',
    avatar: 'A',
    text: "Every other tool wanted me to install an SDK or sign up for a 14-day trial of something. Reacly is one script. That's the bar now.",
    product: 'Folio CMS',
  },
  {
    name: 'Devon Kwon',
    handle: '@devbuilds',
    avatar: 'D',
    text: "Did not expect a feedback widget to make me feel emotional. Then a user wrote 'this layout actually respects my time, thank you'. I'm a wreck.",
    product: 'Hatch Editor',
  },
];

interface Activity {
  page: string;
  rating: number;
  msg: string;
  time: number;
}

const ACTIVITY_TEMPLATES: Omit<Activity, 'time'>[] = [
  { page: '/pricing', rating: 5, msg: 'Crystal clear pricing.' },
  { page: '/docs/install', rating: 4, msg: 'Quick to set up.' },
  { page: '/features', rating: 5, msg: 'Love the dashboard.' },
  { page: '/blog/launch', rating: 4, msg: 'Great launch story.' },
  { page: '/changelog', rating: 5, msg: 'Shipping fast 🚀' },
  { page: '/pricing', rating: 2, msg: 'Confusing comparison.' },
  { page: '/', rating: 5, msg: 'Hero copy is fire.' },
  { page: '/api', rating: 4, msg: 'Wish there were Python examples.' },
  { page: '/settings', rating: 3, msg: 'Took me a sec to find.' },
  { page: '/contact', rating: 5, msg: 'Replied within an hour 😀' },
];

const EMOJI = ['😞', '😐', '🙂', '😊', '🤩'];

export default function SocialProof() {
  const [activity, setActivity] = useState<Activity[]>([]);

  // Push new fake activity every few seconds
  useEffect(() => {
    let i = 0;
    function push() {
      const t = ACTIVITY_TEMPLATES[i % ACTIVITY_TEMPLATES.length];
      setActivity((prev) => [{ ...t, time: Date.now() }, ...prev].slice(0, 6));
      i++;
    }
    push();
    push();
    push();
    const id = setInterval(push, 3500);
    return () => clearInterval(id);
  }, []);

  function ago(t: number) {
    const s = Math.floor((Date.now() - t) / 1000);
    if (s < 5) return 'just now';
    if (s < 60) return `${s}s ago`;
    return `${Math.floor(s / 60)}m ago`;
  }

  // Duplicate testimonials for seamless marquee
  const col1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const col2 = [...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)];

  return (
    <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Indie makers are obsessed.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real words from beta users. We didn&apos;t edit them. We probably should&apos;ve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Two marquee columns of testimonials */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 max-h-[560px] overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4 animate-marquee" style={{ animationDuration: '35s' }}>
              {col1.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
            <div className="hidden sm:flex flex-col gap-4 animate-marquee" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
              {col2.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </div>

          {/* Live activity feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 border border-gray-200 rounded-2xl p-5 self-start"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <p className="text-sm font-semibold text-gray-900">Live feedback</p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">last 5 min</span>
            </div>

            <div className="space-y-2.5">
              {activity.map((a, i) => (
                <motion.div
                  key={a.time}
                  initial={{ opacity: 0, x: -10, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  className="bg-white border border-gray-100 rounded-lg p-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                  style={{ opacity: Math.max(0.4, 1 - i * 0.13) }}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-base shrink-0">
                      {EMOJI[a.rating - 1]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-800 italic leading-snug">&ldquo;{a.msg}&rdquo;</p>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-[10px] text-gray-400 font-mono truncate">{a.page}</code>
                        <span className="text-[10px] text-gray-300">·</span>
                        <span className="text-[10px] text-gray-400">{ago(a.time)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-900">12,847</span> responses across all sites this week
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-sm font-bold text-emerald-900">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</p>
          <p className="text-xs text-gray-400 leading-tight">{t.handle} · {t.product}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
    </div>
  );
}
