import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621238235961-6c10977cef1f?q=80&w=1138&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1375&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=2574&auto=format&fit=crop"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Join the Community</h2>
                <p className="text-gray-500 text-lg">Real people, real connections. Just around the corner.</p>
            </div>
        <a href="https://web.whispapp.co" className="text-whisp-dark font-semibold hover:text-teal-600 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2 rounded">
                See what's happening near you &rarr;
            </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-80">
            {images.map((src, idx) => (
          <div key={idx} className={`relative rounded-3xl overflow-hidden group ${idx % 2 === 0 ? 'mt-0 md:mt-8' : 'mt-8 md:mt-0'} h-full shadow-md`}>
                    <img 
                        src={src} 
                        alt="Community member" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        {/* <span className="text-white font-medium text-sm">📍 San Francisco, CA</span> */}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;