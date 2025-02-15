import React from "react";
import { Code2, GraduationCap, Building2, Wallet } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why choose Exelixi?
          </h2>
          <p className="text-gray-400 text-lg">
            We're revolutionizing how developers start their tech careers in India
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<Code2 className="h-10 w-10 text-purple-500" />}
              title="Learn by Doing"
              description="Real projects. Real experience. Real growth."
            />
            <FeatureCard
              icon={<GraduationCap className="h-10 w-10 text-pink-500" />}
              title="Mentorship"
              description="1:1 guidance from industry experts"
            />
          </div>
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<Building2 className="h-10 w-10 text-blue-500" />}
              title="Top Companies"
              description="Direct access to leading tech employers"
            />
            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-orange-500" />}
              title="Competitive Pay"
              description="Average package of 10 LPA"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-800 bg-black/50">
    {icon}
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
); 