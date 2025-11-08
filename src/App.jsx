import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Game from './components/Game';
import Gallery from './components/Gallery';
import MessageBox from './components/MessageBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Favicon hint is handled in index.html template; using pink theme throughout */}
      <Hero />
      <About />
      <Game />
      <Gallery />
      <MessageBox />
      <Footer />
    </div>
  );
}

export default App;
