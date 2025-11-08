import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles } from 'lucide-react';

export default function PopupLove({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-pink-900/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotate: 6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-white to-pink-50 p-6 shadow-2xl ring-1 ring-pink-100"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg"
              >
                <Heart size={24} className="" fill="currentColor" />
              </motion.div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full p-2 text-pink-500 transition hover:bg-pink-100"
            >
              <X size={18} />
            </button>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-pink-700">A little note for N</h3>
              <p className="mt-2 text-pink-700/80">
                You make ordinary moments feel magical. Keep exploring—there are more tiny surprises around here.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: 'Sweet', icon: <Sparkles size={16} /> },
                  { label: 'Cozy', icon: <Heart size={16} className="" fill="currentColor" /> },
                  { label: 'Playful', icon: <Sparkles size={16} /> },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white p-3 text-pink-700 ring-1 ring-pink-100"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
                whileTap={{ scale: 0.96 }}
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
