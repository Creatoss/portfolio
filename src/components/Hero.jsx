import { useState, useEffect } from "react";

// Typewriter Effect Component
function TypewriterEffect({ messages, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    
    if (isPaused) {
      timer = window.setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }
    
    const currentMessage = messages[messageIndex];
    
    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        timer = window.setTimeout(() => {
          setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayedText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setMessageIndex((messageIndex + 1) % messages.length);
        setIsTyping(true);
      }
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [displayedText, isTyping, isPaused, messageIndex, messages, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-w-[200px] h-9 text-left whitespace-nowrap overflow-hidden">
      {displayedText}
      <span className="inline-block w-1 h-5 bg-blue-500 ml-1 animate-pulse"></span>
    </span>
  );
}

// Hero Component
export default function Hero() {
  const messages = [
    "CS Student",
    "Graphic Designer", 
    "Full-Stack Developer"
  ];

  return (
    <section className="h-screen flex  items-center justify-center   relative overflow-hidden">
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 ">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 animate-float">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                <span className="block text-gray-900 mb-2 animate-glow-text">Hi, I'm Mohamed Ghaith HAMZAOUI</span>
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent block min-h-[1.2em] animate-pulse-gradient">
                  <TypewriterEffect 
                    messages={messages} 
                    typingSpeed={80} 
                    deletingSpeed={40} 
                    pauseDuration={1500}
                  />
                </span>
              </h1>

    
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl ">
                <img 
                  src="/profilepic.png" 
                  alt="Mohamed Ghaith Hamzaoui" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-lg shadow-lg border border-gray-200 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-medium text-gray-800 whitespace-nowrap">Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-5px) rotate(0.5deg);
          }
          66% {
            transform: translateY(3px) rotate(-0.5deg);
          }
        }
        
        @keyframes float-button {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes float-button-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(3px);
          }
        }
        
        @keyframes glow-text {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes pulse-gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.02);
            opacity: 1;
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-button {
          animation: float-button 3s ease-in-out infinite;
        }
        
        .animate-float-button-reverse {
          animation: float-button-reverse 3s ease-in-out infinite;
        }
        
        .animate-glow-text {
          animation: glow-text 4s ease-in-out infinite;
        }
        
        .animate-pulse-gradient {
          animation: pulse-gradient 5s ease-in-out infinite;
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        /* Hover enhancements */
        .animate-float:hover {
          animation-duration: 3s;
        }
        
        .animate-float-button:hover {
          animation-duration: 1s;
        }
      `}</style>
    </section>
  );
}
