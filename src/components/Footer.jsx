import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-gradient-to-b from-white to-pink-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-3 text-pink-700/80">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.6 }}
            className="flex items-center gap-2"
          >
            <Heart size={18} className="text-pink-500" fill="currentColor" />
            <span>Built with love for N</span>
          </motion.div>
          <p className="text-xs">Stay sweet, stay playful ✨</p>
        </div>
      </div>
    </footer>
  );
}
