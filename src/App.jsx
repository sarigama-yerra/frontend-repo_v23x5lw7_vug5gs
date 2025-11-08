import React, { useState } from 'react';
import Hero from './components/Hero';
import Games from './components/Games';
import Footer from './components/Footer';
import PopupLove from './components/PopupLove';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-pink-900">
      <Hero onOpenPopup={() => setOpen(true)} />

      <main className="space-y-8">
        <Games />
      </main>

      <Footer />

      <PopupLove open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
