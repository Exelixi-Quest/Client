import React from "react";
import { Calendar, Phone, Mail, User, Briefcase, GraduationCap, Heart } from "lucide-react";

export const JoiningForm: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">EXELIXI</span> Today
            </h2>
            <p className="text-gray-400 text-lg">
              Start your journey towards a successful tech career
            </p>
          </div>

          <form className="space-y-8 bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-800">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email and DOB */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            {/* Profile and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Profile</label>
                <select className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
                  <option value="">Select Profile</option>
                  <option value="web">Web Development</option>
                  <option value="apigee">Apigee</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </label>
              <textarea
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-24"
                placeholder="Tell us about your work experience..."
              />
            </div>

            {/* Education */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </label>
              <textarea
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-24"
                placeholder="Tell us about your educational background..."
              />
            </div>

            {/* Hobbies */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Hobbies
              </label>
              <textarea
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-24"
                placeholder="What do you like to do in your free time?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}; 