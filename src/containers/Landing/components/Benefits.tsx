import { FileText, Globe } from "lucide-react";
import { worldMap, dev1, dev2 } from "../../../assets";

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Top developers love EXELIXI. Here's why:
          </h2>
          <p className="text-xl text-gray-400">
            We get the recruiters to you. We help you thrive. We only work with
            the best in the business.
          </p>
          <p className="text-xl font-semibold mt-4">But that's not all.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Job Security Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-100/10 to-purple-300/10 p-6 md:p-8">
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 rounded-2xl backdrop-blur-sm -z-10" />
            <div className="mb-8 space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Guarantee job security with a platform that looks out for you.
            </h3>
            <p className="text-gray-300 text-lg">
              We don’t just train you; we invest in your success. Our platform
              ensures job security by providing industry-level training and
              exclusive 1:1 mentorship from experts who have been in the field.
              We share real-world insights, refine your technical and soft
              skills, and guide you to evolve into a top-tier engineer and a
              confident professional. With our hands-on approach, you’ll be
              equipped to secure a high-paying job and thrive in your career.
            </p>
          </div>

          {/* Global Network Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-yellow-100/10 to-yellow-300/10 p-6 md:p-8">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-500/5 rounded-2xl backdrop-blur-sm -z-10" />
            <div className="relative h-48 mb-8">
              <div className="absolute inset-0">
                <img
                  src={worldMap}
                  alt="World Map"
                  className="object-contain opacity-20 w-full h-full"
                />
              </div>
              {/* Developer Profile Cards */}
              <div className="absolute top-1/4 left-1/4">
                <DeveloperCard
                  name="Rakesh Sahoo"
                  languages="Hindi, English,Odia"
                  image={dev1}
                />
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <DeveloperCard
                  name="Akhankhya Sharma"
                  languages="Hindi, English,Odia"
                  image={dev2}
                />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join a global dev aggregate.
            </h3>
            <p className="text-gray-300 text-lg">
              Local recognition does not cut it anymore. Get vetted and join a
              curated list of top software engineers from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DeveloperCardProps {
  name: string;
  languages: string;
  image: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  languages,
  image,
}) => (
  <div className="bg-white rounded-lg p-2 shadow-lg w-48">
    <div className="flex items-center gap-2">
      <img
        src={image}
        alt="Developer"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <Globe className="w-3 h-3" />
          Speaks {languages}
        </div>
      </div>
    </div>
  </div>
);
