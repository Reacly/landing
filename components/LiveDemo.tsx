'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Layout, Zap, MousePointerClick } from 'lucide-react';

type WidgetMode = 'floating' | 'side-tab' | 'inline' | 'exit-intent';

const MODES: { id: WidgetMode; label: string; sub: string; icon: typeof MessageCircle }[] = [
  { id: 'floating', label: 'Floating button', sub: 'Lives in the corner', icon: MessageCircle },
  { id: 'side-tab', label: 'Side tab', sub: 'Discreet edge', icon: Layout },
  { id: 'inline', label: 'Inline bar', sub: 'In-context prompt', icon: Zap },
  { id: 'exit-intent', label: 'Exit intent', sub: 'Catch leavers', icon: MousePointerClick },
];

export default function LiveDemo() {
  const [mode, setMode] = useState<WidgetMode>('floating');
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function reset() {
    setRating(null);
    setSubmitted(false);
  }

  function submit() {
    setSubmitted(true);
    setTimeout(() => reset(), 3500);
  }

  return (
    <section id="demo" className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
      {/* Backdrop glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(16,185,129,0.06),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Live · interactive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Pick a style. See it work.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four placements. One script tag. Switch between them anytime from your dashboard.
          </p>
        </motion.div>

        {/* Mode picker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {MODES.map((m) => {
            const Icon = m.icon;
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m.id);
                  reset();
                }}
                className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all ${
                  active
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:-translate-y-0.5'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-emerald-300' : 'text-gray-400 group-hover:text-emerald-500'}`} />
                <div className="text-left">
                  <div className="text-sm font-medium">{m.label}</div>
                  <div className={`text-[10px] ${active ? 'text-gray-300' : 'text-gray-400'}`}>{m.sub}</div>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Demo canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          {/* Browser header */}
          <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="ml-3 flex-1 max-w-sm h-5 bg-gray-50 border border-gray-200 rounded-md flex items-center px-2">
              <span className="text-[10px] text-gray-400 font-mono">yourwebsite.com</span>
            </div>
          </div>

          {/* Fake page content */}
          <div className="relative min-h-[440px] p-8 sm:p-12 grain">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="w-7 h-7 border-[3px] border-white rounded-md" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Your website</h3>
              <p className="text-gray-500 mb-8">
                This is where your real content lives. Reacly sits on top without slowing it down.
              </p>
              <div className="flex justify-center gap-2 mb-8">
                <div className="w-24 h-8 bg-gray-100 rounded-md" />
                <div className="w-24 h-8 bg-gray-900 rounded-md" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <div className="w-full h-2 bg-gray-100 rounded" />
                <div className="w-5/6 h-2 bg-gray-100 rounded mx-auto" />
                <div className="w-4/6 h-2 bg-gray-100 rounded mx-auto" />
              </div>
            </div>

            {/* Inline bar (above-the-content variant) */}
            <AnimatePresence>
              {mode === 'inline' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-6 left-6 right-6 bg-white border border-emerald-200 rounded-xl shadow-sm p-3 flex items-center justify-between gap-4"
                >
                  <p className="text-sm font-medium text-gray-800">How&apos;s this page so far?</p>
                  <div className="flex gap-1">
                    {['😞', '😐', '🙂', '😊', '🤩'].map((e, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setRating(i + 1);
                          setTimeout(submit, 400);
                        }}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all ${
                          rating === i + 1 ? 'bg-emerald-100 ring-2 ring-emerald-500' : 'hover:bg-gray-50'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Side tab */}
            <AnimatePresence>
              {mode === 'side-tab' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0"
                >
                  <button
                    onClick={() => setRating(0)}
                    className="bg-emerald-500 text-white px-2 py-3 rounded-l-lg shadow-md hover:shadow-lg transition-all hover:-translate-x-0.5"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    <span className="text-xs font-medium tracking-wider">FEEDBACK</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Side-tab popup */}
            <AnimatePresence>
              {mode === 'side-tab' && rating !== null && !submitted && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute bottom-20 right-6 w-72 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-4"
                >
                  <p className="text-sm font-semibold text-gray-900 mb-3 text-center">How&apos;s your visit?</p>
                  <div className="flex gap-1 mb-1">
                    {['😞', '😐', '🙂', '😊', '🤩'].map((e, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setRating(i + 1);
                          setTimeout(submit, 400);
                        }}
                        className={`flex-1 aspect-square rounded-lg flex items-center justify-center text-xl transition-all ${
                          rating === i + 1 ? 'bg-emerald-100 ring-2 ring-emerald-500' : 'hover:bg-gray-50'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating button */}
            <AnimatePresence>
              {mode === 'floating' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  className="absolute bottom-6 right-6"
                >
                  {rating === null && !submitted ? (
                    <button
                      onClick={() => setRating(0)}
                      className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-[0_12px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.5)] transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </button>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating widget panel */}
            <AnimatePresence>
              {mode === 'floating' && rating !== null && !submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-6 right-6 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-4"
                >
                  <p className="text-sm font-semibold text-gray-900 mb-3 text-center">Was this page helpful?</p>
                  <div className="flex gap-1 mb-1">
                    {['😞', '😐', '🙂', '😊', '🤩'].map((e, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setRating(i + 1);
                          setTimeout(submit, 400);
                        }}
                        className={`flex-1 aspect-square rounded-lg flex items-center justify-center text-xl transition-all ${
                          rating === i + 1 ? 'bg-emerald-100 ring-2 ring-emerald-500 scale-105' : 'hover:bg-gray-50 hover:scale-105'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Exit intent overlay */}
            <AnimatePresence>
              {mode === 'exit-intent' && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-20"
                  >
                    <p className="text-base font-bold text-gray-900 mb-1 text-center">Wait — before you go 👋</p>
                    <p className="text-sm text-gray-500 mb-4 text-center">Mind telling us how this page felt?</p>
                    <div className="flex gap-1 mb-1">
                      {['😞', '😐', '🙂', '😊', '🤩'].map((e, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setRating(i + 1);
                            setTimeout(submit, 400);
                          }}
                          className={`flex-1 aspect-square rounded-lg flex items-center justify-center text-xl transition-all ${
                            rating === i + 1 ? 'bg-emerald-100 ring-2 ring-emerald-500 scale-105' : 'hover:bg-gray-50 hover:scale-105'
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Thanks state — universal */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 right-6 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-4 z-30"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                      className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-lg"
                    >
                      ✓
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Got it. Thanks!</p>
                      <p className="text-xs text-gray-500">Resetting in 3s…</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer ribbon */}
          <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Live preview · everything above is real, working code
            </div>
            <code className="hidden sm:block text-[10px] text-gray-500 font-mono">
              &lt;script src=&quot;reacly.io/w.js&quot; data-mode=&quot;{mode}&quot;&gt;&lt;/script&gt;
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
