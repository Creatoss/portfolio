import React from 'react';
import { 
  Code, 
  PenTool, 
  Database,
  Terminal
} from "lucide-react";

const SkillsExperiences = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", color: "bg-red-100" },
        { name: "C", icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", color: "bg-blue-100" },
        { name: "C++", icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000", color: "bg-blue-100" },
        { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", color: "bg-yellow-100" },
        { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000", color: "bg-blue-100" },
        { name: "Python", icon: "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000", color: "bg-blue-100" }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML 5", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", color: "bg-orange-100" },
        { name: "CSS 3", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", color: "bg-blue-100" },
        { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", color: "bg-cyan-100" },
        { name: "React", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", color: "bg-sky-100" },
        { name: "Angular", icon: "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000", color: "bg-red-100" },
        { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", color: "bg-green-100" },
        { name: "ExpressJS", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000", color: "bg-green-100" },
        { name: "Three.js", icon: "https://img.icons8.com/?size=100&id=j0beBVnUo5dZ&format=png&color=000000", color: "bg-purple-100" },
        { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000", color: "bg-green-100" },
       
      ]
    },
    {
      title: "Design",
      icon: <PenTool className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Adobe Illustrator", icon: "https://img.icons8.com/?size=100&id=6nVfKqkrGRxh&format=png&color=000000", color: "bg-orange-100" },
        { name: "Adobe Photoshop", icon: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000", color: "bg-blue-100" },
        { name: "Figma", icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", color: "bg-purple-100" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "PostgreSQL", icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", color: "bg-blue-100" },
        { name: "Oracle Database", icon: "https://img.icons8.com/?size=100&id=39913&format=png&color=000000", color: "bg-red-100" },
        { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000", color: "bg-green-100" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Background with 50% opacity */}
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-pink-200/20 rounded-full blur-3xl z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="p-4 rounded-lg bg-blue-100/50 backdrop-blur-sm border border-gray-300/70 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-blue-500/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              {/* Skills Grid - Responsive */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-white shadow-sm group-hover:shadow-md transition-all duration-300 p-2 group-hover:scale-105 border border-gray-200">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExperiences;
