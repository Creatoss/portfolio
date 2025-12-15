import React from "react";
import Squares from "./components/Squares";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import Title from "./components/Titles";
import SkillsRoadmap from "./components/SkillsRoadmap";
import ChromaGrid from "./components/ChromaGrid";
import LogoLoop from "./components/LogoLoop";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { techLogos, items } from "./data/skillsData";
function App() {
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
        <SkillsRoadmap />
        {/* <LogoLoop
          logos={techLogos.map((t) => ({
            src: t.icon,
            alt: t.name,
            title: t.name,
          }))}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        /> */}
        <Title title="Projects" />
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
        <Title title="Certifications" />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
