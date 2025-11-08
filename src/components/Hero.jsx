import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F8E1E7]/70 via-white/40 to-white/90" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFC0CB] via-[#FFB6C1] to-rose-400"
        >
          For N 💖
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-gray-600"
        >
          Made with care and little pink dreams.
        </motion.p>

        {/* Floating hearts */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: [0, 1, 0], y: [-10, -80 - i * 10, -140 - i * 15] }}
              transition={{ duration: 6 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
              className="absolute text-pink-400/70"
              style={{ left: `${(i * 8) % 100}%`, bottom: `${(i * 6) % 60}%`, fontSize: `${14 + (i % 6) * 4}px` }}
            >
              💗
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
