import React from 'react';

const WaitingList: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-whisp-dark relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-teal-900 opacity-20 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to join the noise?</h2>
        <p className="text-teal-100 text-xl max-w-2xl mx-auto mb-10">
            Whisp is currently available on the web and rolling out to iOS and Android soon. Be part of the first wave of local whisperers.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
                href="https://web.whispapp.co" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-whisp-dark font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
                Launch Web App
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
                Join iOS Waitlist
            </button>
        </div>
        
        <p className="mt-8 text-sm text-teal-200 opacity-80">
            * By joining, you agree to our Terms of Service. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default WaitingList;