import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Heart } from 'lucide-react';

// Simple "Catch the Heart" canvas game
const Game = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  // Game state
  const player = useRef({ x: 150, y: 260, w: 60, h: 16 });
  const hearts = useRef([]);
  const keys = useRef({ left: false, right: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const spawnHeart = () => {
      hearts.current.push({ x: Math.random() * (canvas.width - 24), y: -20, size: 18 + Math.random() * 10, speed: 1.2 + Math.random() * 1.4 });
    };

    const drawHeart = (x, y, size, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 24, size / 24);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(12, 21);
      ctx.bezierCurveTo(10, 19, 4, 15, 4, 10);
      ctx.bezierCurveTo(4, 6, 7, 4, 9.5, 4);
      ctx.bezierCurveTo(11.5, 4, 12.8, 5.2, 12.9, 6.4);
      ctx.bezierCurveTo(13, 5.2, 14.3, 4, 16.3, 4);
      ctx.bezierCurveTo(18.8, 4, 22, 6, 22, 10);
      ctx.bezierCurveTo(22, 15, 16, 19, 12, 21);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.current.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd') keys.current.right = true;
    };
    const handleKeyUp = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.current.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd') keys.current.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let spawnTimer = 0;

    const loop = () => {
      if (!running) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Background
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#F8E1E7');
      grad.addColorStop(1, '#ffffff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Player
      const p = player.current;
      if (keys.current.left) p.x -= 4;
      if (keys.current.right) p.x += 4;
      p.x = Math.max(0, Math.min(w - p.w, p.x));

      // Draw paddle with soft gradient
      const padGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.h);
      padGrad.addColorStop(0, '#FFC0CB');
      padGrad.addColorStop(1, '#FFB6C1');
      ctx.fillStyle = padGrad;
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(p.x, p.y + p.h - 2, p.w, 2);

      // Hearts
      spawnTimer += 1;
      if (spawnTimer > 35) {
        spawnHeart();
        spawnTimer = 0;
      }

      hearts.current.forEach((heart) => {
        heart.y += heart.speed;
        drawHeart(heart.x + heart.size / 2, heart.y + heart.size / 2, heart.size, '#ff6b9b');
      });

      // Collision
      hearts.current = hearts.current.filter((heart) => {
        const caught = heart.y + heart.size >= p.y && heart.x + heart.size > p.x && heart.x < p.x + p.w;
        if (caught) {
          setScore((s) => s + 1);
          if (audioRef.current && !muted) {
            try { audioRef.current.currentTime = 0; audioRef.current.play(); } catch {}
          }
          return false;
        }
        return heart.y < h + 30; // remove hearts off-screen
      });

      animationId = requestAnimationFrame(loop);
    };

    // Set canvas size responsive
    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = Math.min(360, Math.max(260, width * 0.45));
      canvas.width = width;
      canvas.height = height;
      player.current.y = height - 40;
      player.current.w = Math.max(60, Math.min(120, width * 0.25));
    };
    resize();
    window.addEventListener('resize', resize);

    animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [running, muted]);

  return (
    <section id="game" className="py-24 bg-gradient-to-b from-white to-[#F8E1E7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Catch the Heart</h3>
            <p className="text-gray-600 mt-2">Move with A/← and D/→ to catch falling hearts. Gentle music available.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setRunning((v) => !v)} className="px-4 py-2 rounded-full bg-[#FFC0CB] hover:bg-[#FFB6C1] text-white font-medium transition">{running ? 'Pause' : 'Play'}</button>
            <button onClick={() => setMuted((m) => !m)} className="p-2 rounded-full bg-white shadow text-rose-500 hover:bg-rose-50 transition" aria-label="Toggle sound">
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="px-3 py-2 rounded-full bg-white shadow text-rose-500 font-semibold flex items-center gap-2"><Heart size={18} /> {score}</div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl overflow-hidden shadow-xl border border-rose-100 bg-white">
          <canvas ref={canvasRef} className="w-full block" />
        </div>
        <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_9ae3f7f2fa.mp3?filename=button-click-124467.mp3" preload="auto" />
        {/* Soft background music loop */}
        <audio src="https://cdn.pixabay.com/download/audio/2021/10/26/audio_5b27d7742d.mp3?filename=calm-ambient-110582.mp3" loop autoPlay muted={muted} onCanPlay={(e) => { if (!muted) e.currentTarget.play().catch(()=>{}); }} />
      </div>
    </section>
  );
};

export default Game;
