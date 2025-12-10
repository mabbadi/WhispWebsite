import React from 'react';
import { Ghost, Shield, Map, Zap, Users, Heart } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
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
          <FeatureCard 
            icon={<Ghost className="text-purple-600" size={28} />}
            color="bg-purple-100"
            title="Totally Anonymous"
            description="Be yourself without the pressure. Choose a fun avatar and chat without revealing your identity unless you want to."
          />
          <FeatureCard 
            icon={<Map className="text-whisp-dark" size={28} />}
            color="bg-teal-100"
            title="Location Based"
            description="Connect with the people physically around you. Your neighborhood, your campus, your gym, your rules."
          />
          <FeatureCard 
            icon={<Shield className="text-blue-600" size={28} />}
            color="bg-blue-100"
            title="Secure & Private"
            description="Your chats are yours. We use advanced encryption to ensure your whispers stay between you and the community."
          />
          <FeatureCard 
            icon={<Users className="text-orange-500" size={28} />}
            color="bg-orange-100"
            title="Community Driven"
            description="Create micro-communities instantly. Perfect for events, apartment complexes, or local interest groups."
          />
          <FeatureCard 
            icon={<Zap className="text-yellow-500" size={28} />}
            color="bg-yellow-100"
            title="Lightning Fast"
            description="Built for speed. Send messages, share moments, and get updates in real-time without the bloat."
          />
          <FeatureCard 
            icon={<Heart className="text-red-500" size={28} />}
            color="bg-red-100"
            title="Fun & Expressive"
            description="Share reactions, fun emojis, and engage with content that actually matters to your local circle."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;