import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section id="about" className="relative py-24 md:py-28 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8E1E7]/40 to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div style={{ y }} className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1504198266285-165a1b69b8fc?q=80&w=1600&auto=format&fit=crop"
            alt="Pink clouds"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A space filled with warmth, laughter, and memories.</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Dedicated to N — a gentle corner of the internet where soft pink moments live. Every detail is crafted to feel romantic yet calm, sweet yet sincere. May this place be a little reminder of the smiles we share and the stories we keep.
          </p>
          <div className="mt-6 flex items-center gap-3 text-rose-500">
            <span className="text-2xl">✨</span>
            <span className="text-gray-700">Soft, minimal, and full of heart.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
