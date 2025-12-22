import React, { useMemo, useState } from 'react';
import {
  Ghost,
  Shield,
  Map,
  Zap,
  Users,
  Heart,
  History,
  CalendarDays,
  BadgeCheck,
  EyeOff,
  Award,
  Siren,
  Sparkles,
} from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
    <div
      className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transition-none`}
    >
      <span className="transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transition-none">
        {icon}
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const coreFeatures = useMemo(
    () => [
      {
        icon: <Ghost className="text-purple-600" size={28} />,
        color: 'bg-purple-100',
        title: 'Totally Anonymous',
        description:
          'Be yourself without the pressure. Start your day with a fun avatar and chat without revealing your identity unless you want to.',
      },
      {
        icon: <Map className="text-whisp-dark" size={28} />,
        color: 'bg-teal-100',
        title: 'Location Based',
        description:
          'Connect with the people physically around you. Your neighborhood, your campus, your gym, your rules.',
      },
      {
        icon: <Shield className="text-blue-600" size={28} />,
        color: 'bg-blue-100',
        title: 'Secure & Private',
        description:
          'Your chats are yours. We use advanced encryption to ensure your whispers stay between you and the community.',
      },
      {
        icon: <Users className="text-orange-500" size={28} />,
        color: 'bg-orange-100',
        title: 'Community Driven',
        description:
          'Create micro-communities instantly. Perfect for events, apartment complexes, or local interest groups.',
      },
      {
        icon: <Zap className="text-yellow-500" size={28} />,
        color: 'bg-yellow-100',
        title: 'Lightning Fast',
        description:
          'Built for speed. Send messages, share moments, and get updates in real-time without the bloat.',
      },
      {
        icon: <Heart className="text-red-500" size={28} />,
        color: 'bg-red-100',
        title: 'Fun & Expressive',
        description:
          'Share reactions, fun emojis, and engage with content that actually matters to your local circle.',
      },
    ],
    []
  );

  const detailedFeatures = useMemo(
    () => [
      {
        icon: <CalendarDays className="text-indigo-600" size={28} />,
        color: 'bg-indigo-100',
        title: 'Daily Avatar Identity',
        description:
          'Each day you’re assigned an avatar-so people can recognize your vibe across the conversation without knowing who you are.',
      },
      {
        icon: <History className="text-emerald-600" size={28} />,
        color: 'bg-emerald-100',
        title: 'Avatar History (Last 24h)',
        description:
          'See the avatars you’ve crossed paths with in the past day around your favorite areas-great for safety, continuity, and community vibes.',
      },
      {
        icon: <BadgeCheck className="text-sky-600" size={28} />,
        color: 'bg-sky-100',
        title: 'Verified Message Check',
        description:
          'Smart identity checks can mark a message as verified-so you instantly know what to trust in the message center.',
      },
      {
        icon: <EyeOff className="text-slate-600" size={28} />,
        color: 'bg-slate-100',
        title: 'Preview Mode (Offline)',
        description:
          'Try Whisp without committing to an account. Explore the experience first-then onboard in seconds when you’re ready.',
      },
      {
        icon: <Award className="text-amber-600" size={28} />,
        color: 'bg-amber-100',
        title: 'Reputation → Badges',
        description:
          'As people like your posts in an area, your local reputation grows-unlock badges that appear next to your avatar icon.',
      },
      {
        icon: <Siren className="text-rose-600" size={28} />,
        color: 'bg-rose-100',
        title: 'Smart AI Hate-Speech Detection',
        description:
          'Smart AI helps detect hate speech and harmful language so interactions stay respectful and safe-without turning the app into a noisy feed.',
      },
    ],
    []
  );

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-whisp-dark font-semibold uppercase tracking-wider text-sm mb-3">Why Whisp?</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Simple. Secure. Social.</h3>
          <p className="text-xl text-gray-500">
            We stripped away the noise of traditional social media. No followers, no influencers, just real conversations with people nearby.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            className="px-8 py-4 bg-white border border-gray-200 hover:border-whisp-dark text-gray-700 hover:text-whisp-dark text-lg font-semibold rounded-full shadow-sm hover:shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whisp-light focus-visible:ring-offset-2"
          >
            {showMore ? 'Show fewer details' : 'Expand for more details'}
          </button>
        </div>

        <div
          aria-hidden={!showMore}
          className={`mt-12 transition-all duration-500 ease-out ${
            showMore
              ? 'max-h-[2000px] md:max-h-[1400px] opacity-100 translate-y-0 overflow-visible'
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none overflow-hidden'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">More ways Whisp helps</h4>
            <p className="text-lg text-gray-500">Trust signals, continuity, and lightweight gamification-without the noise.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                color={feature.color}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;