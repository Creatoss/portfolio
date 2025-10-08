// components/Sidebar.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { name: 'github', href: 'https://github.com/yourusername', icon: FaGithub, color: 'gray-800', label: 'Visit my GitHub profile' },
    { name: 'linkedin', href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin, color: 'gray-800', label: 'Visit my LinkedIn profile' },
    { name: 'facebook', href: 'https://facebook.com/yourusername', icon: FaFacebook, color: 'gray-800', label: 'Visit my Facebook profile' },
    { name: 'email', href: 'mailto:your.email@example.com', icon: FaEnvelope, color: 'gray-800', label: 'Send me an email' },
    { name: 'upwork', href: 'https://www.upwork.com/freelancers/yourusername', icon: FaBriefcase, color: 'gray-800', label: 'Visit my Upwork profile' },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 pr-6 z-50">
      {icons.map((item) => {
        const IconComponent = item.icon;
        const isHovered = hoveredIcon === item.name;

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIcon(item.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`text-gray-500 hover:text-${item.color} transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'} ${hoveredIcon && !isHovered ? 'scale-90' : ''}`}
            aria-label={item.label}
          >
            <IconComponent className="text-3xl" /> 
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
