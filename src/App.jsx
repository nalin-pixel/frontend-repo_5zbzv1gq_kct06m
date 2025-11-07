import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Explore from './components/Explore';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [mode, setMode] = useState('signup');

  const openSignUp = () => { setMode('signup'); setAuthOpen(true); };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero onSignUp={openSignUp} />
        <Features />
        <Explore />
        <footer id="about" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} EventSphere. All rights reserved.</p>
            <div className="flex items-center gap-5 text-sm">
              <a className="text-gray-600 hover:text-gray-900" href="#features">Features</a>
              <a className="text-gray-600 hover:text-gray-900" href="#explore">Explore</a>
              <a className="text-gray-600 hover:text-gray-900" href="#about">About</a>
            </div>
          </div>
        </footer>
      </main>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} mode={mode} />
    </div>
  );
}

export default App;
