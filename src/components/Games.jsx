import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';
import MemoryMatch from './MemoryMatch';
import NumberGuess from './NumberGuess';

export default function Games() {
  return (
    <section id="games" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Gamepad2 size={20} />
          </div>
          <h2 className="text-2xl font-bold text-pink-700">Playful Corners</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow ring-1 ring-pink-100">
            <h3 className="mb-3 flex items-center gap-2 text-pink-700"><Heart size={16} /> Memory Match</h3>
            <MemoryMatch />
          </div>

          <div className="rounded-2xl bg-white p-4 shadow ring-1 ring-pink-100">
            <h3 className="mb-3 flex items-center gap-2 text-pink-700"><Heart size={16} /> Romantic Number Guess</h3>
            <NumberGuess />
          </div>
        </div>
      </div>
    </section>
  );
}
