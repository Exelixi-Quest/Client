import React from "react";
import { Link } from "react-router-dom";

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#7850c5] via-[#d84b8f] to-[#e19668]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of aspiring developers who have launched their careers
          with Exelixi
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/join"
            className="px-8 py-3 rounded-md bg-white text-purple-500 font-medium hover:bg-white/90 transition-colors"
          >
            Join Exelixi Today
          </Link>
          <Link
            to="#"
            className="px-8 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}; 