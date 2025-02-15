import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[url('https://assets-global.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa419_footer%20bg%20latest.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight">
          Find tech jobs with companies{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fee3b2] to-[#fdbec9]">
            that care
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            about your work
          </span>{" "}
          more than your resume.
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Break into a successful tech career with Exelixi. Get flexible jobs
          with direct access to top companies.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <p className="text-lg">Average salaries of 10 LPA</p>
          <span className="hidden md:inline text-gray-500">•</span>
          <p className="text-lg">For Students in India 🇮🇳</p>
        </div>
        <Link to="/join">
          <div className="el-hero-button">
            <div className="el-hero-button-text">Join Exelixi Today</div>
            <div className="colored-button-gradient-layer"> </div>
            <div className="colored-button-border-layer"></div>
            <div></div>
          </div>
        </Link>
      </div>
    </section>
  );
};
