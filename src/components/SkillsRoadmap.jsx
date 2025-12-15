import React from "react";
import { skillsRoadmap } from "../data/skillsData";

const SkillsRoadmap = () => {
  return (
    <section id="skills-roadmap" className="w-full px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Learning Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for all screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#1f2937] z-0"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {skillsRoadmap.map((block, blockIndex) => (
              <div key={block.year} className="relative">
                {/* Year marker and dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-14 h-14 bg-[#1f2937] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                    {block.year}
                  </div>
                </div>

                {/* Mobile year header */}
                <div className="md:hidden mb-4 flex justify-center">
                  <div className="inline-block bg-[#1f2937] text-white px-4 py-2 rounded-full font-bold text-sm">
                    {block.year}
                  </div>
                </div>

                {/* Content - Alternating left/right */}
                <div
                  className={`md:flex md:items-start gap-3 ${
                    blockIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text section */}
                  <div
                    className={`md:w-1/2 md:text-left ${
                      blockIndex % 2 === 0 ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="mb-4 md:mb-0 border-2  rounded-lg p-4 bg-[#deebff]/70 backdrop-blur-md shadow-sm relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {block.title}
                      </h3>
                      {block.subtitle && (
                        <p className="text-gray-600 text-xs md:text-sm font-medium mb-2 italic">
                          {block.subtitle}
                        </p>
                      )}
                      <p className="text-gray-500 text-sm md:text-base">
                        {block.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills block */}
                  <div
                    className={`md:w-1/2 ${
                      blockIndex % 2 === 0 ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div className="bg-[#deebff]/70 backdrop-blur-md rounded-xl p-6 border-2  shadow-md hover:shadow-lg transition-all duration-300 mt-4 md:mt-0 relative z-10">
                      <div className="grid grid-cols-3 md:grid-cols-3 gap-1.5">
                        {block.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex flex-col items-center group"
                          >
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-white shadow-sm group-hover:shadow-md transition-all duration-300 p-2 group-hover:scale-110 border border-gray-300">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium text-center text-gray-700 group-hover:text-gray-900">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRoadmap;
