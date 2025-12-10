import React from 'react';
import { Dumbbell, GraduationCap, Home, Coffee } from 'lucide-react';

const Case: React.FC<{
  title: string;
  subtitle: string;
  example: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
  bgImage: string;
}> = ({ title, subtitle, example, icon, align, bgImage }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 mb-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 w-full">
      <div className={`h-80 w-full rounded-[2rem] flex items-center justify-center relative overflow-hidden group shadow-2xl`}>
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0">
             <img 
                src={bgImage} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-6">
            {/* Simple Abstract Representation of Chat */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-sm w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-full shadow-sm">{icon}</div>
                    <div>
                        <span className="font-bold text-gray-800 text-sm block">{title} Channel</span>
                        <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 24 active
                        </span>
                    </div>
                </div>
                <div className="bg-whisp-bg p-4 rounded-xl rounded-tl-none mb-2 border border-whisp-light/20">
                    <p className="text-gray-700 text-sm font-medium">{example}</p>
                </div>
                 <div className="flex gap-2 justify-end">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Sent • Just now</span>
                 </div>
            </div>
        </div>
      </div>
    </div>
    <div className="flex-1 text-center md:text-left">
      <div className="inline-block p-4 rounded-2xl bg-whisp-bg text-whisp-dark mb-6 shadow-sm">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900 mb-4">{title}</h3>
      <h4 className="text-xl text-whisp-dark font-medium mb-6">{subtitle}</h4>
      <p className="text-gray-500 leading-relaxed text-lg">
        Whisp changes how you interact with these spaces. No need to exchange numbers or join a formal Facebook group. Just open the app, see the channel, and join the conversation instantly.
      </p>
      <button className="mt-8 text-whisp-dark font-bold hover:text-teal-600 transition-colors flex items-center justify-center md:justify-start gap-2 group">
        Explore {title} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-whisp-dark font-bold tracking-widest uppercase text-sm mb-3">Live Channels</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Where to Whisp?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Your world is full of micro-communities waiting to happen. Jump in.</p>
        </div>

        <Case 
            title="The Gym"
            subtitle="Find your spotter or check crowd levels."
            example="Can someone show me how to use the squat rack? I'm too shy to ask in person! 🏋️‍♀️"
            icon={<Dumbbell size={28} className="text-blue-500"/>}
            align="left"
            bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
        />

        <Case 
            title="The Neighborhood"
            subtitle="Borrow sugar or discuss the new fence."
            example="Did anyone else just hear that weird noise outside? 🏡"
            icon={<Home size={28} className="text-green-500"/>}
            align="right"
            bgImage="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=1470&auto=format&fit=crop"
        />

        <Case 
            title="University Campus"
            subtitle="Study groups and campus events."
            example="Library is fully packed, try the north hall study room! 📚"
            icon={<GraduationCap size={28} className="text-purple-500"/>}
            align="left"
            bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
        />
        
        <Case 
            title="Local Coffee Shop"
            subtitle="Remote workers unite."
            example="Does anyone have a Macbook charger I can borrow for 10 mins? ☕"
            icon={<Coffee size={28} className="text-orange-500"/>}
            align="right"
            bgImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1470&auto=format&fit=crop"
        />

      </div>
    </section>
  );
};

export default UseCases;