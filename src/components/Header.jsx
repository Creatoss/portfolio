import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[70%] font-sans ">
      <div className="bg-white/10  backdrop-blur-xl rounded-2xl border border-white/20">
        <nav className="relative mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              <span className="primaryColor font-bold">
                Mohamed Ghaith Hamzaoui
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="primaryColor hover:text-blue-900 transition-colors duration-200 font-medium font-['Inter'] relative group "
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <button
              className="lg:hidden p-2 primaryColor hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <div className="flex flex-col space-y-2 px-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleScroll(item.href)}
                    className="primaryColor hover:text-blue-900 transition-colors duration-200 py-2 font-['Inter'] px-4 text-left border-b border-white/10 last:border-b-0"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
