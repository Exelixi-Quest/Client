import React from "react";
import { MapPin, Globe, Briefcase, Code2, FileText } from "lucide-react";
import { dahProff } from "../../../assets";

export const ProfileSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Heading and Numbers */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-pink-200">Make yourself marketable.</span> Let recruiters judge you on actual work,
              not just a resume.
            </h2>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  number: "1",
                  title: "Build a profile for free",
                  description: "Qualify for jobs at top product startups"
                },
                {
                  number: "2",
                  title: "Stand out to recruiters",
                  description: "Globally-competitive salary based on your skills."
                },
                {
                  number: "3",
                  title: "Get offers with zero salary negotiations.",
                  description: "Get interviews on your calendar directly."
                }
              ].map((item) => (
                <div key={item.number} className="flex gap-4 md:gap-6">
                  <span className="text-4xl md:text-6xl font-bold text-gray-800">{item.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="bg-gray-900 rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={dahProff}
                alt="Developer profile"
                className="rounded-lg sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
              />
              <div className="space-y-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Frontend Developer
                </span>
                <h3 className="text-xl font-semibold">Mohit Acharya</h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">Speaks Hindi, English, Odia</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm sm:text-base">Cuttack, Odisha</span>
                </div>
                <select className="bg-gray-800 rounded-md px-3 py-1 text-sm border border-gray-700 w-full sm:w-auto">
                  <option>Odisha</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                  <span>8 AM</span>
                  <span>2 PM</span>
                  <span>4 PM</span>
                  <span>9 PM</span>
                  <span>12 AM</span>
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full">
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-purple-500 rounded-full"></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">6 hours overlap</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex-1 h-12 sm:h-10 flex items-center justify-center gap-2 rounded-md border border-gray-700 hover:bg-gray-800">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Portfolio</span>
              </button>
              <button className="flex-1 h-12 sm:h-10 flex items-center justify-center gap-2 rounded-md border border-gray-700 hover:bg-gray-800">
                <Code2 className="w-4 h-4" />
                <span className="hidden sm:inline">Skills</span>
              </button>
              <button className="flex-1 h-12 sm:h-10 flex items-center justify-center gap-2 rounded-md bg-gray-800 hover:bg-gray-700">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Work Experience</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 