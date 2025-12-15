import React from "react";
import { certifications } from "../data/skillsData";

const Certifications = () => {
  return (
    <section id="certifications" className="w-full  px-4">
      <div className="max-w-6xl mx-auto">
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-[#deebff]/70 backdrop-blur-md border-2 border-blue-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-100 overflow-hidden">
                <div className="flex flex-col md:flex-row items-stretch h-full group-hover:scale-100">
                  {/* Image Section */}
                  <div className="w-full md:w-56 bg-white flex items-center justify-center p-4 border-b md:border-b-0 md:border-r-2 border-blue-200 transition-all group-hover:scale-100">
                    <img
                      src={cert.image}
                      alt={cert.company}
                      className="w-full h-full object-contain transition-all group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                          {cert.title}
                        </h3>
                        {cert.rightLogo && (
                          <img
                            src={cert.rightLogo}
                            alt={cert.company}
                            className="w-8 h-8 object-contain flex-shrink-0 transition-all group-hover:scale-125"
                          />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3 italic">
                        {cert.description}
                      </p>
                      {cert.skills && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-100 border border-blue-300 text-gray-700 text-xs font-medium px-3 py-1 rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-500 text-sm font-medium">
                        {cert.date}
                      </span>
                      <svg
                        className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
