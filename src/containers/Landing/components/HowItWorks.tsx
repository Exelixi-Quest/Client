import React from "react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Apply",
      description: "Submit your application",
    },
    {
      step: 2,
      title: "Learn",
      description: "Get hands-on experience with real projects",
    },
    {
      step: 3,
      title: "Get Hired",
      description: "Land your dream job at top tech companies",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-gray-400 text-lg">
            Your journey to a successful tech career starts here
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 