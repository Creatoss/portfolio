import React from "react";
import CardSwap, { Card } from "./CardSwap";

const ShowcaseSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full md:px-12 py-16 gap-12">
      
      {/* Left Big Text */}
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left lg:items-start">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-800">
          Beauty lies in <span className="text-blue-600">simplicity</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
          Minimalism isn’t about removing things you love, it’s about keeping
          what truly matters.
        </p>
      </div>

      {/* Right Cards with Swap - hidden on smaller screens */}
      <div className="hidden lg:flex flex-1 w-full max-w-lg md:max-w-xl lg:max-w-2xl justify-center items-center">
        <div className="w-full">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={true}
            width={600} 
          >
            {[1, 2, 3].map((num) => (
              <Card key={num}>
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl border border-white/30 shadow-xl p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ml-3 ">
                    <span className="text-2xl font-bold text-blue-500">{num === 1 ? "About Me " : num === 2 ? "Graphic Designer " : "CS enthusiast"}</span>
                   </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {num === 1
                      ? "Away from tech, I’m passionate about video games and the gaming community. I also love sports, especially football. I’m a calm person who enjoys laughing, spending quality time with friends, and connecting with nature."
                      : num === 2
                      ? "I’m a graphic designer passionate about the art of creating visual content for both online and offline media, with experience in Adobe Illustrator, Adobe Photoshop, and Figma."
                      : "I’m a third-year Computer Science student at the National School of Engineering in Carthage, passionate about cloud computing, artificial intelligence, and web development."}
                  </p>
                  <div className="text-8xl font-bold text-blue-500/20 text-right">{num}</div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
