import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WaitingList from './components/WaitingList';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-whisp-light selection:text-whisp-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <UseCases />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
};

export default App;