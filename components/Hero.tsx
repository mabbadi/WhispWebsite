import React from 'react';
import { ArrowRight, Lock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-whisp-bg to-white">
      {/* Background Decor - now subtler */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-whisp-light/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-whisp-light/30 text-whisp-dark text-sm font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-whisp opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-whisp"></span>
              </span>
              v1.0 Coming Soon
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]">
              Speak Freely. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-whisp-dark to-teal-600">Connect Locally.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-medium">
              Whisp is the secure, anonymous, and fun way to chat with the people around you. Your neighbors, your gym, your campus—connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://web.whispapp.co" 
                className="px-8 py-4 bg-whisp-dark hover:bg-teal-600 text-white text-lg font-bold rounded-full shadow-md hover:shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2"
              >
                Start Whispering <ArrowRight size={20} />
              </a>
              <a 
                href="#features" 
                className="px-8 py-4 bg-white border border-gray-200 hover:border-whisp-dark text-gray-700 hover:text-whisp-dark text-lg font-semibold rounded-full shadow-sm hover:shadow-md transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-semibold">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-whisp-bg rounded-full text-whisp-dark">
                    <Lock size={16} /> 
                </div>
                Secure & Encrypted
              </div>
              <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-whisp-bg rounded-full text-whisp-dark">
                    <MapPin size={16} /> 
                </div>
                Location Based
              </div>
            </div>
          </div>

          {/* Image Content - Composition */}
          <div className="lg:w-1/2 w-full relative z-10 mt-12 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Main Lifestyle Image */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-xl transform rotate-1">
                <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop" 
                    alt="Friends laughing and looking at phone" 
                    className="w-full h-full object-cover opacity-90 hover:scale-[1.03] transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
{/*}
              {/* App Screenshot Floating on top
              <div className="absolute -bottom-10 -left-6 md:-bottom-12 md:-left-12 w-2/3 md:w-3/5 transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-20">
                  <div className="relative inline-flex bg-white rounded-3xl shadow-2xl border-[6px] border-white overflow-hidden">
                    <img
                      src="/images/map.png"
                      alt="Whisp App Interface"
                      className="block w-auto max-w-full h-auto"
                    />
                  </div>
                   {/* Chat Bubble Widget
                   <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl rounded-bl-none shadow-xl animate-bounce-slow hidden sm:block z-30 max-w-[180px]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl shadow-inner">🎉</div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Campus</p>
                                <p className="text-sm font-bold text-gray-800 leading-tight">Party at the quad tonight?</p>
                            </div>
                        </div>
                   </div>
              </div>
*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;