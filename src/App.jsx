import React from "react";
import Squares from "./components/Squares";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import Title from "./components/Titles";
import SkillsExperienceSection from "./components/Skills";
import ChromaGrid from "./components/ChromaGrid";
import LogoLoop from "./components/LogoLoop";
import Contact from "./components/Contact";
function App() {

  const techLogos = [
  { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
  { name: "C", icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000" },
  { name: "C++", icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000" },
  { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
  { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
  { name: "Python", icon: "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000" },
  { name: "HTML5", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
  { name: "CSS3", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
  { name: "React", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
  { name: "Angular", icon: "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000" },
  { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
  { name: "Express.js", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
  { name: "Three.js", icon: "https://img.icons8.com/?size=100&id=j0beBVnUo5dZ&format=png&color=000000" },
  { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
  { name: "Adobe Illustrator", icon: "https://img.icons8.com/?size=100&id=6nVfKqkrGRxh&format=png&color=000000" },
  { name: "Adobe Photoshop", icon: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
  { name: "Figma", icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
  { name: "NumPy", icon: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000" },
  { name: "Pandas", icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000" },
  { name: "Scikit-learn", icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
  { name: "Matplotlib", icon: "https://img.icons8.com/?size=100&id=TkX1totjFmAD&format=png&color=000000" }
];


  const items = [
    {
      image: "/images/Eventini.jpg",
      title: "Eventini",
      subtitle: "Academic Project",
      borderColor: "#0284C7",
      gradient: "#000128",
      url: "https://github.com/Creatoss/Eventini_front.git",
      type: "Mobile App",
      description: "Eventini is an Android app developed in Java with a Spring Boot backend that lets users browse Tunisian cultural events, view detailed information, book tickets, manage their reservations and favorites, and sign in to their account, while the backend ensures reliable and up-to-date data on shows, artists, venues, and bookings.",
      date: "02-05-2025",
      technologies: ["Java", "Spring Boot", "Android XML"],
      images: [
        "/images/Eventini.jpg",

      ]
    },
    {
      title: "Log Monitor ",
      subtitle: "Academic Project",
      borderColor: "#0EA5E9",
      gradient: "#000128",
      
      url: "https://github.com/Creatoss/System-Log-Monitor-.git",
      type: "Software",
      description: "This project is a centralized log monitoring solution that collects logs from multiple Linux client machines and sends them to a central RHEL server. It allows administrators to monitor system activity, search and filter logs, and analyze events through a real-time Next.js web dashboard",
      date: "2025-04-25",
      technologies: ["React", "RsysLog", "FastApi"],
      images: [
        "/images/watchlogs.jpg",

      ]
    },
    {
      title: "Spectacle DB ",
      subtitle: "Academic Project",
      borderColor: "#38BDF8",
      gradient: "#000128",
      url: "https://github.com/Creatoss/Data_base_system_project.git",
      type: "Software",
      description: "This project is a Spectacle and Venue Management System built using a relational database with PL/SQL procedures, designed to manage performance venues, shows, and program segments. It enables administrators to add, modify, cancel, and search for venues and events while enforcing business rules through triggers and procedures. ",
      date: "2024-11-05",
      technologies: ["PL/SQL", "Oracle DataBase"],
      images: [
        "/images/SpectacleSystem.png",

      ]
    },
    {
      title: "ENIConnect",
      subtitle: "Academic Project",
      borderColor: "#0284C7",
      gradient: "#000128",
      url: "",
      type: "Web App",
      description: "This project is a web-based Student Survey and Feedback Platform designed to systematically gather student opinions on courses and academic services. It provides a centralized system for distributing surveys, collecting feedback, and analyzing student responses to help administrators identify strengths and areas for improvement. Built with NextJS, Spring Boot, and PostgreSQL . ",
      date: "2025-04-11",
      technologies: ["Spring framework", "PostgreSQL"],
      images: [
        "/images/Enniconnect.jpg",

      ]
    },
    {
      title: "NoteHub Backend",
      subtitle: "Personal Project",
      borderColor: "#0369A1",
      gradient: "#000128",
      url: "https://github.com/Creatoss/NoteHub_Backend.git",
      type: "Web App",
      description: "This is a personal project built with Express.js to understand web development concepts. It is a backend application that uses MongoDB for data storage and implements authentication using JWT (JSON Web Tokens). The backend serves an Angular frontend that allows family members to add, view, and delete notes for personal and family use. The project is still in development as I continue learning and improving it.",
      date: "2024-06-30",
      technologies: ["ExpressJS", "NodeJS", "JWT"],
      images: [
         "/images/NoteHub.png"
      ]
    },
    {
      title: "Pitchy ",
      subtitle: "Internship Project",
      borderColor: "#0EA5E9",
      gradient: "#000128",
      url: "",
      type: "AI",
      description: "This project, PITCHI, is an AI-powered sales meeting simulator. It creates realistic practice sessions where users interact with a dynamic AI client avatar. The platform uses live analysis of a user's speech, tone, and facial expressions to provide real-time coaching feedback, helping sales teams improve their skills in a risk-free environment",
      date: "2025-08-15",
      technologies: ["LLMs", "ThreeJs", "RAG"],
      images: [
     "/images/PitchiMockUp.png"
      ]
    },

  ];

  return (
    <div className="flex flex-col w-full bg-blue-50 relative overflow-hidden">
      <div className="fixed inset-0 z-0 w-full bg-blue-200 overflow-hidden">
        <Squares
          speed={0.1}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#aaa"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-12 items-center">
        <Header />
        <Hero />
        <ShowcaseSection />
        <Title title="Skills and Expertise" />
        <SkillsExperienceSection />
            <LogoLoop
              logos={techLogos.map(t => ({ src: t.icon, alt: t.name, title: t.name }))}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology partners"
            />
        <Title title="Projects" />
        <ChromaGrid 
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
        <Contact />
      </div>
    </div>
  );
}

export default App;
