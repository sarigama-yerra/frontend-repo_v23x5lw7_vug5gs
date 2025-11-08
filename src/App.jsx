import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Game from './components/Game';
import MemoryMatch from './components/MemoryMatch';
import NumberGuess from './components/NumberGuess';
import Gallery from './components/Gallery';
import MessageBox from './components/MessageBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Hero />
      <About />
      <Game />
      <MemoryMatch />
      <NumberGuess />
      <Gallery />
      <MessageBox />
      <Footer />
    </div>
  );
}

export default App;
