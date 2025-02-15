import React from "react";
import { testimonial1,testimonial3 } from "../../../assets";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Exelixi helped me transition from a non-tech background to a software developer role. The practical experience and mentorship were invaluable.",
      name: "Sanjiv Pradhan",
      role: "Software Developer at Bitwise",
      image: testimonial1
    },
    {
      quote: "The hands-on projects and industry mentorship gave me the confidence to pursue my dream tech career.",
      name: "Archana Jena",
      role: "Software Developer at Zydus",
      image: testimonial3
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-400 text-lg">
            Hear from our graduates who transformed their careers through Exelixi
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-xl border border-gray-800 bg-black/50">
              <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt="Graduate"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 