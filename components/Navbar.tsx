import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img
             src="/public/whisp_logo_big.png"
             alt="Whisp - Your Local Whisper"
             className="h-12 md:h-16 w-auto object-contain"
             onError={(e) => {
              // Fallback if image fails or isn't present
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback');
              if (fallback) fallback.classList.remove('hidden');
             }}
            />
           {/* Fallback text only shown if image fails */}
           <span id="logo-fallback" className="hidden text-2xl font-bold tracking-tight text-whisp-dark">
             Whisp
           </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-whisp-dark font-medium transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-600 hover:text-whisp-dark font-medium transition-colors">Local Vibes</a>
          <button
            aria-disabled="true"
            disabled
            title="Work in progress"
            className="text-gray-500 cursor-not-allowed font-medium transition-colors flex items-center gap-2"
          >
            Download
            <span className="inline-block text-xs bg-yellow-400 text-black px-1 rounded">WIP</span>
            <span className="sr-only">Coming soon</span>
          </button>
          <a 
            href="https://web.whispapp.co" 
            className="px-6 py-2.5 bg-whisp-dark hover:bg-teal-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Launch Web App
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-fade-in-down">
          <a href="#features" className="text-lg font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#use-cases" className="text-lg font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Local Vibes</a>
          <button
            aria-disabled="true"
            disabled
            className="text-lg font-medium text-gray-500 cursor-not-allowed flex items-center gap-2"
          >
            Download
            <span className="inline-block text-xs bg-yellow-400 text-black px-1 rounded">WIP</span>
          </button>
          <a 
            href="https://web.whispapp.co" 
            className="text-center px-6 py-3 bg-whisp-dark text-white font-semibold rounded-full mt-2"
          >
            Launch Web App
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;