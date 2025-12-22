import React, { useEffect, useRef, useState } from 'react';
import {
  Dumbbell,
  GraduationCap,
  Home,
  Coffee,
  Music,
  Train,
  Plane,
  Briefcase,
  Trophy,
  ShoppingBag,
  Trees,
  Building2,
  Heart,
} from 'lucide-react';

type ReputationBadge = {
  emoji: string;
  label: string;
};

const LoveButton: React.FC<{
  initialLoved: boolean;
  initialCount: number;
}> = ({ initialLoved, initialCount }) => {
  const [loved, setLoved] = useState(initialLoved);
  const [count, setCount] = useState(initialCount);

  const toggle = () => {
    setLoved((prev) => {
      const next = !prev;
      setCount((c) => {
        const updated = next ? c + 1 : c - 1;
        return Math.max(0, updated);
      });
      return next;
    });
  };

  return (
    <button
      type="button"
      aria-pressed={loved}
      onClick={toggle}
      className="inline-flex items-center gap-2 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2 rounded"
    >
      <Heart
        size={16}
        className={loved ? 'text-red-500 fill-red-500' : 'text-gray-400'}
      />
      <span className="text-gray-500 tabular-nums">{count}</span>
    </button>
  );
};

const Case: React.FC<{
  title: string;
  subtitle: string;
  example: string;
  description: string;
  messageAvatar: string;
  verified?: boolean;
  reputationBadge: ReputationBadge;
  activeCount: number;
  sentTime: string;
  initialLoved: boolean;
  initialLoveCount: number;
  icon: React.ReactNode;
  align: 'left' | 'right';
  bgImage: string;
}> = ({
  title,
  subtitle,
  example,
  description,
  messageAvatar,
  verified,
  reputationBadge,
  activeCount,
  sentTime,
  initialLoved,
  initialLoveCount,
  icon,
  align,
  bgImage,
}) => {
  return (
  <div
    className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 mb-24 ${
      align === 'right' ? 'md:flex-row-reverse' : ''
    }`}
  >
    {/* image with whisp example */}
    <div className="flex-1 w-full">
      <div className={`h-80 w-full rounded-[2rem] flex items-center justify-center relative overflow-hidden group shadow-xl`}>
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0">
             <img 
                src={bgImage} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none" 
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-6">
            {/* Simple Abstract Representation of Chat */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 motion-reduce:transition-none motion-reduce:transform-none">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-full shadow-sm">{icon}</div>
                    <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-800 text-sm block">{title} Channel</span>
                        </div>
                        <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse motion-reduce:animate-none"></span> {activeCount} active
                        </span>
                    </div>
                </div>
                <div className="mb-2">
                  <div className="bg-whisp-bg p-4 pr-14 rounded-xl rounded-tl-none border border-whisp-light/20 relative">
                    {verified && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white border border-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">
                        ✓
                      </div>
                    )}
                    <div className="text-[11px] font-bold text-gray-500 mb-1">
                      {reputationBadge.emoji} {reputationBadge.label}
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{example}</p>
                    <div className="absolute -bottom-3 -right-3 w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-lg shadow-sm">
                      {messageAvatar}
                    </div>
                  </div>
                </div>
                   <div className="mt-5 flex items-center justify-between">
                     <LoveButton initialLoved={initialLoved} initialCount={initialLoveCount} />
                     <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Sent • {sentTime}</span>
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
        {description}
      </p>
      <button className="mt-8 text-whisp-dark font-semibold hover:text-teal-600 transition-colors flex items-center justify-center md:justify-start gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2 rounded">
        Explore {title} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  </div>
  );
};

const ImageOnlyCase: React.FC<{
  title: string;
  example: string;
  messageAvatar: string;
  verified?: boolean;
  reputationBadge: ReputationBadge;
  activeCount: number;
  sentTime: string;
  initialLoved: boolean;
  initialLoveCount: number;
  icon: React.ReactNode;
  bgImage: string;
}> = ({
  title,
  example,
  messageAvatar,
  verified,
  reputationBadge,
  activeCount,
  sentTime,
  initialLoved,
  initialLoveCount,
  icon,
  bgImage,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;

      // progress: -1 (boven) .. 1 (onder)
      const raw = (rect.top - viewportHeight * 0.5) / (viewportHeight * 0.5);
      const clamped = Math.max(-1, Math.min(1, raw));
      setParallaxY(-clamped * 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-700 ease-out will-change-[opacity,filter] ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div style={{ transform: `translateY(${parallaxY}px)` }} className="will-change-transform">
        <div className="h-80 w-full rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0">
            <img
              src={bgImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl max-w-sm w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-50 rounded-full shadow-sm">{icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 text-sm block">{title} Channel</span>
                  </div>
                  <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> {activeCount} active
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="bg-whisp-bg p-4 pr-14 rounded-xl rounded-tl-none border border-whisp-light/20 relative">
                  {verified && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white border border-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">
                      ✓
                    </div>
                  )}
                  <div className="text-[11px] font-bold text-gray-500 mb-1">
                    {reputationBadge.emoji} {reputationBadge.label}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{example}</p>
                  <div className="absolute -bottom-3 -right-3 w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-lg shadow-sm">
                    {messageAvatar}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <LoveButton initialLoved={initialLoved} initialCount={initialLoveCount} />
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Sent • {sentTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageOnlyCarousel: React.FC<{
  title?: string;
  subtitle?: string;
  items: Array<{
    title: string;
    example: string;
    messageAvatar: string;
    verified?: boolean;
    reputationBadge: ReputationBadge;
    activeCount: number;
    sentTime: string;
    initialLoved: boolean;
    initialLoveCount: number;
    icon: React.ReactNode;
    bgImage: string;
  }>;
}> = ({ title, subtitle, items }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByPage = (direction: -1 | 1) => {
    const element = scrollerRef.current;
    if (!element) return;

    const amount = Math.max(280, Math.floor(element.clientWidth * 0.9));
    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    if (direction === 1) {
      const nearEnd = element.scrollLeft >= maxScrollLeft - 8;
      if (nearEnd) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }
    }

    if (direction === -1) {
      const nearStart = element.scrollLeft <= 8;
      if (nearStart) {
        element.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        return;
      }
    }

    element.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const element = scrollerRef.current;
    if (!element) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || isPaused) return;

    const interval = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const nearEnd = el.scrollLeft >= maxScrollLeft - 8;

      if (nearEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const amount = Math.max(280, Math.floor(el.clientWidth * 0.9));
        el.scrollBy({ left: amount, behavior: 'smooth' });
      }
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="mt-16 bg-transparent">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-8">
          {title && <h4 className="text-2xl font-bold text-gray-900 mb-3">{title}</h4>}
          {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
        </div>
      )}

      <div
        className="relative bg-transparent"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="hidden md:flex items-center justify-between pointer-events-none absolute inset-y-0 left-0 right-0 z-10">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByPage(-1)}
            className="pointer-events-auto ml-2 h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-gray-700"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByPage(1)}
            className="pointer-events-auto mr-2 h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-gray-700"
          >
            →
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 bg-transparent [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={item.title} className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)]">
              <ImageOnlyCase
                title={item.title}
                example={item.example}
                messageAvatar={item.messageAvatar}
                verified={item.verified}
                reputationBadge={item.reputationBadge}
                activeCount={item.activeCount}
                sentTime={item.sentTime}
                initialLoved={item.initialLoved}
                initialLoveCount={item.initialLoveCount}
                icon={item.icon}
                bgImage={item.bgImage}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex md:hidden items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByPage(-1)}
            className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm active:scale-[0.98] transition-all text-gray-700"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByPage(1)}
            className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm active:scale-[0.98] transition-all text-gray-700"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  const [showMorePlaces, setShowMorePlaces] = useState(false);

  return (
    <section id="use-cases" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <p className="text-whisp-dark font-bold tracking-widest uppercase text-sm mb-3">Live Channels</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Where to Whisp?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Your world is full of micro-communities waiting to happen. Jump in.</p>
        </div>

        <Case 
            title="The Gym"
            subtitle="Find your spotter or check crowd levels."
            example="Can someone show me how to use the squat rack? I'm too shy to ask in person! 🏋️‍♀️"
          description="At the gym, you can ask quick questions, check how busy it is, and find a spotter—without interrupting anyone or swapping numbers. Open the channel for this location and jump in."
            messageAvatar="🤖"
            verified
            reputationBadge={{ emoji: '🏆', label: 'Gold' }}
            activeCount={37}
            sentTime="1m ago"
            initialLoved={false}
            initialLoveCount={18}
            icon={<Dumbbell size={28} className="text-blue-500"/>}
            align="left"
            bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
        />

        <Case 
            title="The Neighborhood"
            subtitle="Borrow sugar or discuss the new fence."
            example="Did anyone else just hear that weird noise outside? 🏡"
          description="In your neighborhood, use Whisp for quick local updates—lost packages, odd noises, a heads-up about roadworks—without turning it into a public social feed."
            messageAvatar="🦄"
            reputationBadge={{ emoji: '🥈', label: 'Silver' }}
            activeCount={12}
            sentTime="7m ago"
            initialLoved={true}
            initialLoveCount={6}
            icon={<Home size={28} className="text-green-500"/>}
            align="right"
            bgImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1470&auto=format&fit=crop"
        />

        <Case 
            title="University Campus"
            subtitle="Study groups and campus events."
            example="Library is fully packed, try the north hall study room! 📚"
          description="On campus, find study partners, share live tips (quiet rooms, queue times), and coordinate events—fast and lightweight, without joining yet another formal group chat."
            messageAvatar="🦉"
            verified
            reputationBadge={{ emoji: '🏅', label: 'Trusted' }}
            activeCount={64}
            sentTime="Just now"
            initialLoved={false}
            initialLoveCount={41}
            icon={<GraduationCap size={28} className="text-purple-500"/>}
            align="left"
            bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
        />
        
        <Case 
            title="Local Coffee Shop"
            subtitle="Remote workers unite."
            example="Does anyone have a Macbook charger I can borrow for 10 mins? ☕"
          description="In a coffee shop, ask for a charger, claim a spare seat, or check whether the Wi‑Fi is down—without awkwardly broadcasting to the whole room."
            messageAvatar="🐱"
            reputationBadge={{ emoji: '🌿', label: 'Kind' }}
            activeCount={9}
            sentTime="12m ago"
            initialLoved={false}
            initialLoveCount={3}
            icon={<Coffee size={28} className="text-orange-500"/>}
            align="right"
            bgImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1470&auto=format&fit=crop"
        />

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowMorePlaces((v) => !v)}
            aria-expanded={showMorePlaces}
            className="px-8 py-4 bg-white border border-gray-200 hover:border-whisp-dark text-gray-700 hover:text-whisp-dark text-lg font-semibold rounded-full shadow-sm hover:shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2"
          >
            {showMorePlaces ? 'Show fewer places' : 'Expand for more details'}
          </button>
        </div>

        <div
          aria-hidden={!showMorePlaces}
          className={`mt-10 overflow-hidden transition-all duration-500 ease-out ${
            showMorePlaces
              ? 'max-h-[2000px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >

          <ImageOnlyCarousel
            title="More places to Whisp"
            subtitle="Swipe through real-world channels — fast, lightweight, and designed for in-the-moment conversations."
            items={[
              {
                title: 'Concerts & Festivals',
                example:
                  'Heads up: entrance B is moving fast. Anyone know if water is allowed? Also—verified update only please ✅ 🎶',
                messageAvatar: '🦊',
                verified: true,
                reputationBadge: { emoji: '🏅', label: 'Trusted' },
                activeCount: 118,
                sentTime: '2m ago',
                initialLoved: true,
                initialLoveCount: 224,
                icon: <Music size={28} className="text-pink-500" />,
                bgImage:
                  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Public Transit',
                example:
                  'Train delayed 10 mins. Is there an earlier connection at the next stop? (If you’re a daily avatar I’ve seen before, say hi 👋)',
                messageAvatar: '🐼',
                reputationBadge: { emoji: '🥉', label: 'Bronze' },
                activeCount: 42,
                sentTime: '5m ago',
                initialLoved: false,
                initialLoveCount: 17,
                icon: <Train size={28} className="text-slate-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Airports & Travel',
                example:
                  'Gate changed to A14—just got a verified notification ✅ Anyone else on this flight want to split a taxi at arrival? ✈️',
                messageAvatar: '🦅',
                verified: true,
                reputationBadge: { emoji: '🏆', label: 'Gold' },
                activeCount: 57,
                sentTime: 'Just now',
                initialLoved: false,
                initialLoveCount: 92,
                icon: <Plane size={28} className="text-sky-500" />,
                bgImage:
                  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Workplaces & Conferences',
                example:
                  'Anyone know which room the talk moved to? I’m in preview mode and onboarding later—this app is fast 😅',
                messageAvatar: '🤖',
                reputationBadge: { emoji: '🪵', label: 'Starter' },
                activeCount: 23,
                sentTime: '18m ago',
                initialLoved: false,
                initialLoveCount: 8,
                icon: <Briefcase size={28} className="text-indigo-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Stadiums & Sports',
                example:
                  'Section 112 line is flying. Anyone know if Gate C is the fastest right now? 🏟️',
                messageAvatar: '🦁',
                reputationBadge: { emoji: '🏅', label: 'Trusted' },
                activeCount: 86,
                sentTime: '4m ago',
                initialLoved: true,
                initialLoveCount: 63,
                icon: <Trophy size={28} className="text-amber-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Shopping Malls',
                example:
                  'Is the Apple Store appointment line moving or should I come back later? 🛍️',
                messageAvatar: '🐰',
                reputationBadge: { emoji: '🥈', label: 'Silver' },
                activeCount: 29,
                sentTime: '9m ago',
                initialLoved: false,
                initialLoveCount: 12,
                icon: <ShoppingBag size={28} className="text-emerald-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Parks & Outdoors',
                example:
                  'Any pickup soccer happening near the main field? Also—where’s the nearest water fountain? 🌳',
                messageAvatar: '🦊',
                reputationBadge: { emoji: '🌿', label: 'Kind' },
                activeCount: 17,
                sentTime: '22m ago',
                initialLoved: false,
                initialLoveCount: 5,
                icon: <Trees size={28} className="text-green-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1470&auto=format&fit=crop',
              },
              {
                title: 'Co-working Spaces',
                example:
                  'Anyone in the quiet zone know the Wi‑Fi password changed? I’m here for 2 hours. 💻',
                messageAvatar: '🤖',
                verified: true,
                reputationBadge: { emoji: '🏆', label: 'Gold' },
                activeCount: 31,
                sentTime: '3m ago',
                initialLoved: true,
                initialLoveCount: 37,
                icon: <Building2 size={28} className="text-sky-600" />,
                bgImage:
                  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop',
              },
            ]}
          />
        </div>

      </div>
    </section>
  );
};

export default UseCases;