import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart } from 'lucide-react';

const MessageBox = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!text.trim()) return;
    setMessages((m) => [...m, text.trim()]);
    setText('');
  };

  return (
    <section id="message" className="py-24 bg-gradient-to-b from-[#F8E1E7] to-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Leave a Little Message</h3>
        <p className="text-gray-600 mt-2">Write something sweet for N. It will float across the screen.</p>

        <div className="mt-6 flex items-center gap-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a gentle note..."
            className="flex-1 px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/70 backdrop-blur placeholder:text-rose-300"
          />
          <button onClick={handleSend} className="px-4 py-3 rounded-xl bg-[#FFC0CB] hover:bg-[#FFB6C1] text-white font-semibold flex items-center gap-2 transition">
            <Send size={18} /> Send
          </button>
        </div>

        <div className="relative mt-10 h-48 overflow-hidden rounded-2xl bg-white/60 border border-rose-100">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: [ -60, 0, 60], opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 6, ease: 'easeInOut' }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full shadow"
                style={{ top: `${20 + (idx * 18) % 70}%` }}
              >
                <div className="flex items-center gap-2"><Heart size={16} className="text-rose-400" /> {msg}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MessageBox;
