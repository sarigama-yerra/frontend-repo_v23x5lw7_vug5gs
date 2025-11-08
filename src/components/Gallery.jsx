import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496302662116-85c38e7d76e5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505483531331-8048f00a43e1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-8ca8f7f5df5f?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Little Gallery</h3>
        <p className="text-gray-600 mt-2 text-center">Snapshots of things N loves — flowers, skies, and soft days.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl group shadow-md"
            >
              <img src={src} alt={`gallery-${i}`} className="w-full h-48 md:h-64 object-cover transition duration-300 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
