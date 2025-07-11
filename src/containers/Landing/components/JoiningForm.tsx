import React, { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  Mail,
  User,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApi } from "../../../hooks/useApi";
import { API_ENDPOINTS } from "../../../utils/apiEndpoints";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  profile: Yup.string().required("Profile selection is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  workExperience: Yup.string().required("Work experience is required"),
  education: Yup.string().required("Education details are required"),
});

interface RegisterResponse {
  userId: string;
  message: string;
}

// Modal component
const Modal: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm z-999">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <p className="text-white text-lg">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const JoiningForm: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const { postData, error, success, loading } = useApi<RegisterResponse>();
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleCloseModal = () => {
    setModalMessage(null);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      profile: "",
      mobileNumber: "",
      workExperience: "",
      education: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await postData(API_ENDPOINTS.USER.JOIN, {
          ...values,
          skills,
        });
      } catch (err) {
        setModalMessage(
          "Registration failed: " +
            (err instanceof Error ? err.message : "An error occurred")
        ); // Show modal with error message
      }
    },
  });

  useEffect(() => {
    if (success) {
      setModalMessage("Registration successful!"); // Show modal with success message
    }
    if (error) {
      setModalMessage("Registration failed: " + (error || "An error occurred")); // Show modal with error message
    }
  }, [success, error]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (indexToDelete: number) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="py-20 bg-black">
      {/* Modal for messages */}
      {modalMessage && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                EXELIXI
              </span>{" "}
              Today
            </h2>
            <p className="text-gray-400 text-lg">
              Start your journey towards a successful tech career
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-8 bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-800"
          >
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  First Name
                </label>
                <input
                  type="text"
                  {...formik.getFieldProps("firstName")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                  placeholder=""
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Last Name
                </label>
                <input
                  type="text"
                  {...formik.getFieldProps("lastName")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                  placeholder=""
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </div>
                )}
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
                  {...formik.getFieldProps("email")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                  placeholder=""
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  {...formik.getFieldProps("dateOfBirth")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.dateOfBirth}
                  </div>
                )}
              </div>
            </div>

            {/* Profile and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Profile</label>
                <select
                  {...formik.getFieldProps("profile")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.profile && formik.errors.profile
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                >
                  <option value="">Select Profile</option>
                  <option value="web">DevOps</option>
                  <option value="apigee">Apigee</option>
                </select>
                {formik.touched.profile && formik.errors.profile && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.profile}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  {...formik.getFieldProps("mobileNumber")}
                  className={`w-full px-4 py-2.5 bg-gray-800 border ${
                    formik.touched.mobileNumber && formik.errors.mobileNumber
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                  placeholder=""
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mobileNumber}
                  </div>
                )}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </label>
              <textarea
                {...formik.getFieldProps("workExperience")}
                className={`w-full px-4 py-2.5 bg-gray-800 border ${
                  formik.touched.workExperience && formik.errors.workExperience
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-24`}
                placeholder="Tell us about your work experience..."
              />
              {formik.touched.workExperience &&
                formik.errors.workExperience && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.workExperience}
                  </div>
                )}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </label>
              <textarea
                {...formik.getFieldProps("education")}
                className={`w-full px-4 py-2.5 bg-gray-800 border ${
                  formik.touched.education && formik.errors.education
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-24`}
                placeholder="Tell us about your educational background..."
              />
              {formik.touched.education && formik.errors.education && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.education}
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Skills
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700 flex items-center gap-1"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleDeleteSkill(index)}
                      className="ml-1 hover:text-red-400 focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Type your skill and click [+] to add"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2.5 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-local rounded-md p-2 hover:opacity-90 transition-opacity ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Join Exelixi Today"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
