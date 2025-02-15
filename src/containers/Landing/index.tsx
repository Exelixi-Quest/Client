import React from "react";
//import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { ProfileSection } from "./components/ProfileSection";
import { LiveSessions } from "./components/LiveSessions";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BenefitsSection } from "./components/Benefits";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ProfileSection />
      <LiveSessions />
      <BenefitsSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
