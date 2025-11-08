import React, { useMemo, useState } from 'react';
import { Heart, HelpCircle, Dice5, Sparkles } from 'lucide-react';

const NumberGuess = () => {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 50) + 1);
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('Tebak angka 1-50.');
  const [won, setWon] = useState(false);

  const onGuess = (e) => {
    e.preventDefault();
    const n = parseInt(guess, 10);
    if (Number.isNaN(n) || n < 1 || n > 50) {
      setMessage('Masukkan angka 1-50 ya.');
      return;
    }
    if (won) return;

    setHistory((h) => [n, ...h].slice(0, 8));
    if (n === target) {
      setMessage('Benar! Kamu hebat 💗');
      setWon(true);
    } else if (n < target) {
      setMessage('Terlalu kecil ✨');
    } else {
      setMessage('Terlalu besar ✨');
    }
    setGuess('');
  };

  const reset = () => {
    setTarget(Math.floor(Math.random() * 50) + 1);
    setGuess('');
    setHistory([]);
    setMessage('Tebak angka 1-50.');
    setWon(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8E1E7] to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2">Romantic Number Guess <Sparkles className="text-rose-500" size={22} /></h3>
            <p className="text-gray-600 mt-2">Kamu bisa menebaknya? Aku menyimpan angka rahasia antara 1 sampai 50.</p>
          </div>
          <button onClick={reset} className="px-4 py-2 rounded-full bg-[#FFC0CB] hover:bg-[#FFB6C1] text-white font-medium transition inline-flex items-center gap-2">
            <Dice5 size={18} /> Ulangi
          </button>
        </div>

        <form onSubmit={onGuess} className="mt-6 flex items-center gap-3">
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            type="number"
            placeholder="Angka 1-50"
            className="w-40 px-4 py-2 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <button type="submit" className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold">Tebak</button>
          <div className="text-rose-600 font-medium">{message}</div>
        </form>

        {history.length > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            Riwayat tebakan: {history.join(', ')}
          </div>
        )}
      </div>
    </section>
  );
};

export default NumberGuess;
