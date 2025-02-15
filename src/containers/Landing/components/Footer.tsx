import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  const quickLinks = ["For Students", "For Companies", "Success Stories", "About Us"];
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Exelixi</h3>
            <p className="text-gray-400 max-w-md">
              Empowering the next generation of developers in India through
              practical learning and direct industry connections.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialIcons.map((Icon, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Exelixi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}; 