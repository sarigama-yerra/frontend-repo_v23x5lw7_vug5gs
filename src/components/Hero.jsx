import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const FloatingHeart = ({ delay = 0, x = 0, size = 24 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0, x }}
    animate={{ y: -40, opacity: 1, x }}
    transition={{ delay, duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    className="text-pink-400/70"
    aria-hidden
  >
    <Heart size={size} fill="currentColor" className="drop-shadow" />
  </motion.div>
);

export default function Hero({ onOpenPopup }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFC0CB] via-[#F8E1E7] to-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative order-2 h-[360px] w-full rounded-2xl bg-white/70 shadow-xl ring-1 ring-white/60 backdrop-blur md:order-1 md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30" />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-pink-600 ring-1 ring-pink-300/50 shadow-sm">
              <Sparkles size={16} />
              <span>Made with love for N</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-pink-700 sm:text-5xl md:text-6xl">
              A Pink, Playful World for N
            </h1>
            <p className="mt-4 max-w-prose text-pink-700/80">
              Explore cute games, sweet moments, and little surprises. Tap the heart to open a lovely pop-up!
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenPopup}
                className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                <Heart className="-ml-1" size={18} fill="currentColor" />
                Open Surprise
              </button>
              <a
                href="#games"
                className="rounded-full bg-white/80 px-5 py-3 font-semibold text-pink-700 ring-1 ring-pink-200 transition hover:bg-white"
              >
                Play Games
              </a>
            </div>

            <div className="relative mt-8 flex h-16 items-center gap-4">
              <FloatingHeart delay={0.0} x={0} size={18} />
              <FloatingHeart delay={0.35} x={16} size={22} />
              <FloatingHeart delay={0.7} x={-10} size={16} />
              <FloatingHeart delay={1.05} x={28} size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
