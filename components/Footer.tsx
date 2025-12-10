import React from 'react';
import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold tracking-tight text-white">Whisp</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Redefining local connection through privacy, security, and spontaneous conversation. Built for the community, by the community.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-whisp">Product</h4>
            <ul className="space-y-4">
              <li><a href="https://web.whispapp.co" className="text-gray-400 hover:text-white transition-colors">Web App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iOS (Coming Soon)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Android (Coming Soon)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-whisp">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
                &copy; {currentYear} Whisp Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-whisp transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-whisp transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-whisp transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                Made with <Heart size={12} className="text-red-500 fill-current" /> in San Francisco
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;