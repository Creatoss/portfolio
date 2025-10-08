import React from "react";
import Squares from "./components/Squares";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import Title from "./components/Titles";
import SkillsExperienceSection from "./components/Skills";
import ChromaGrid from "./components/ChromaGrid";
import LogoLoop from "./components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
  import Component from "./components/comp-531";

function App() {
  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

  const items = [
    {
      image: "/images/Eventini.jpg",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#06B6D4",
      gradient: "#c1ddfe",
      url: "https://github.com/sarahjohnson",
      type: "Web App",
      description: "Developed a responsive web application for event planning.",
      date: "2023-08-10",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      images: [
        "/images/Eventini.jpg",
        "https://i.pravatar.cc/300?img=1",
        "https://i.pravatar.cc/300?img=2"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#0EA5E9",
      gradient: "#c1ddfe",
      url: "https://linkedin.com/in/mikechen",
      type: "Web App",
      description: "Built a scalable API for a social media platform.",
      date: "2023-04-25",
      technologies: ["Node.js", "Express", "MongoDB"],
      images: [
        "https://i.pravatar.cc/300?img=2",
        "https://i.pravatar.cc/300?img=3"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Emma Davis",
      subtitle: "Mobile Developer",
      handle: "@emmadavis",
      borderColor: "#38BDF8",
      gradient: "#c1ddfe",
      url: "https://github.com/emmadavis",
      type: "Mobile App",
      description: "Created a cross-platform mobile app for task management.",
      date: "2023-10-05",
      technologies: ["Flutter", "Dart", "Firebase"],
      images: [
        "https://i.pravatar.cc/300?img=3",
        "https://i.pravatar.cc/300?img=4",
        "https://i.pravatar.cc/300?img=5"
      ]
    },
    {
      image: "/images/japan.png",
      title: "Liam Brown",
      subtitle: "UI/UX Designer",
      handle: "@liambrown",
      borderColor: "#22D3EE",
      gradient: "#c1ddfe",
      url: "https://dribbble.com/liambrown",
      type: "Design",
      description: "Designed user interfaces for a fintech application.",
      date: "2023-02-15",
      technologies: ["Figma", "Sketch", "Adobe XD"],
      images: [
        "/images/japan.png",
        "https://i.pravatar.cc/300?img=6"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=5",
      title: "Olivia Smith",
      subtitle: "Data Scientist",
      handle: "@oliviasmith",
      borderColor: "#0284C7",
      gradient: "#c1ddfe",
      url: "https://kaggle.com/oliviasmith",
      type: "AI",
      description: "Developed a predictive model for customer churn.",
      date: "2023-12-01",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      images: [
        "https://i.pravatar.cc/300?img=5",
        "https://i.pravatar.cc/300?img=7",
        "https://i.pravatar.cc/300?img=8"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=6",
      title: "Noah Wilson",
      subtitle: "Cloud Architect",
      handle: "@noahwilson",
      borderColor: "#0369A1",
      gradient: "#1f2937",
      url: "https://aws.amazon.com/",
      type: "Web App",
      description: "Optimized cloud infrastructure for high availability.",
      date: "2023-06-30",
      technologies: ["AWS", "Terraform", "Docker"],
      images: [
        "https://i.pravatar.cc/300?img=6",
        "https://i.pravatar.cc/300?img=9"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=7",
      title: "Ava Taylor",
      subtitle: "Mobile Developer",
      handle: "@avataylor",
      borderColor: "#0EA5E9",
      gradient: "#1f2937",
      url: "https://github.com/avataylor",
      type: "Mobile App",
      description: "Built a mobile app for real-time messaging.",
      date: "2023-09-20",
      technologies: ["React Native", "GraphQL", "Apollo"],
      images: [
        "https://i.pravatar.cc/300?img=7",
        "https://i.pravatar.cc/300?img=10",
        "https://i.pravatar.cc/300?img=11"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "James Lee",
      subtitle: "AI Researcher",
      handle: "@jameslee",
      borderColor: "#06B6D4",
      gradient: "#1f2937",
      url: "https://linkedin.com/in/jameslee",
      type: "AI",
      description: "Researched NLP models for sentiment analysis.",
      date: "2023-07-15",
      technologies: ["Python", "TensorFlow", "NLTK"],
      images: [
        "https://i.pravatar.cc/300?img=8",
        "https://i.pravatar.cc/300?img=12"
      ]
    },
    {
      image: "https://i.pravatar.cc/300?img=9",
      title: "Sophia Martinez",
      subtitle: "Product Designer",
      handle: "@sophiamartinez",
      borderColor: "#38BDF8",
      gradient: "#1f2937",
      url: "https://dribbble.com/sophiamartinez",
      type: "Design",
      description: "Designed a user-friendly dashboard for analytics.",
      date: "2023-05-01",
      technologies: ["Figma", "Adobe Illustrator"],
      images: [
        "https://i.pravatar.cc/300?img=9",
        "https://i.pravatar.cc/300?img=13",
        "https://i.pravatar.cc/300?img=14"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-blue-50 relative overflow-hidden">
      <div className="fixed inset-0 z-0 w-full bg-blue-300 overflow-hidden">
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
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
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
        <Title title="Professional experience" />
        <Component />
          <Title title="Projects" />

      </div>

      {/* Sidebar */}
      <div className="relative z-30">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
