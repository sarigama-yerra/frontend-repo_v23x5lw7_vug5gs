import React, { useEffect, useMemo, useState } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

const EMOJIS = ['💖','🌸','🎀','🧸','🍓','✨','🌷','💌'];

const createDeck = () => {
  const base = EMOJIS.flatMap((e, i) => [
    { id: `${i}-a`, value: e },
    { id: `${i}-b`, value: e },
  ]);
  // shuffle
  for (let i = base.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  return base.map((card, idx) => ({ ...card, index: idx }));
};

const MemoryMatch = () => {
  const [deck, setDeck] = useState(createDeck());
  const [flipped, setFlipped] = useState([]); // indices
  const [matched, setMatched] = useState(new Set()); // indices
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const allMatched = useMemo(() => matched.size === deck.length, [matched, deck]);

  useEffect(() => {
    if (flipped.length === 2) {
      setLocked(true);
      const [i1, i2] = flipped;
      const c1 = deck[i1];
      const c2 = deck[i2];
      const isMatch = c1.value === c2.value;
      setTimeout(() => {
        if (isMatch) {
          const next = new Set(matched);
          next.add(i1); next.add(i2);
          setMatched(next);
        }
        setFlipped([]);
        setLocked(false);
      }, isMatch ? 500 : 800);
      setMoves((m) => m + 1);
    }
  }, [flipped, deck, matched]);

  const onFlip = (idx) => {
    if (locked) return;
    if (flipped.includes(idx)) return;
    if (matched.has(idx)) return;
    if (flipped.length === 2) return;
    setFlipped((f) => [...f, idx]);
  };

  const reset = () => {
    setDeck(createDeck());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2">
              Memory Match
              <Sparkles className="text-rose-500" size={24} />
            </h3>
            <p className="text-gray-600 mt-2">Temukan pasangan emoji cinta. Balik dua kartu yang sama untuk mencocokkan.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-2 rounded-full bg-rose-50 text-rose-600 font-semibold">Langkah: {moves}</div>
            <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC0CB] hover:bg-[#FFB6C1] text-white font-medium transition">
              <RotateCcw size={18} /> Reset
            </button>
          </div>
        </div>

        {allMatched && (
          <div className="mt-6 p-4 rounded-xl bg-rose-50 text-rose-700 font-medium">
            Sempurna! Kamu mencocokkan semua kartu dalam {moves} langkah. 💗
          </div>
        )}

        <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {deck.map((card, idx) => {
            const isFaceUp = flipped.includes(idx) || matched.has(idx);
            return (
              <button
                key={card.id}
                onClick={() => onFlip(idx)}
                className={`relative aspect-square rounded-xl select-none focus:outline-none focus:ring-2 focus:ring-rose-300 transition-transform ${isFaceUp ? 'bg-rose-100' : 'bg-white'} shadow border border-rose-100 hover:scale-[1.02]`}
                aria-label={isFaceUp ? card.value : 'Hidden card'}
              >
                <div className={`absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl transition-opacity ${isFaceUp ? 'opacity-100' : 'opacity-0'}`}>
                  {card.value}
                </div>
                <div className={`absolute inset-0 flex items-center justify-center text-sm text-rose-400 font-semibold tracking-wide ${isFaceUp ? 'opacity-0' : 'opacity-100'}`}>
                  Tap
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryMatch;
