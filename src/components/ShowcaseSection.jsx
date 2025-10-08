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
            pauseOnHover={false}
            width={600} // optional
          >
            {[1, 2, 3].map((num) => (
              <Card key={num}>
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl border border-white/30 shadow-xl p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
                    <span className="text-2xl font-bold text-blue-950">S</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {num === 1 ? "Smooth" : num === 2 ? "Stylish" : "Simple"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {num === 1
                      ? "Fluid animations and seamless transitions that enhance user experience."
                      : num === 2
                      ? "Clean layouts and modern design principles applied throughout."
                      : "A minimal approach that keeps the focus on what matters most."}
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
