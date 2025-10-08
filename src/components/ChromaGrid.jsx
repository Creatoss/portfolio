import { useRef, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ChromaGrid = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImages, setCurrentImages] = useState({});
  const [visibleCards, setVisibleCards] = useState({});
  const itemRefs = useRef([]);

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/',
      type: 'Web App',
      description: 'A web application for task management with real-time collaboration features and intuitive user interface.',
      date: '2023-05-15',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400'
      ]
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/',
      type: 'Web App',
      description: 'CI/CD pipeline automation tool that streamlines deployment processes and improves team productivity.',
      date: '2023-07-22',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400'
      ]
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/',
      type: 'Design',
      description: 'Complete redesign of mobile app interface focusing on user experience and modern design principles.',
      date: '2023-03-10',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      images: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
        'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400',
        'https://images.unsplash.com/photo-1561070791-4c9a93a2dcc0?w=400'
      ]
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/',
      type: 'AI',
      description: 'Advanced machine learning model for predictive analytics with 95% accuracy in forecasting market trends.',
      date: '2023-09-01',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      images: [
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
      ]
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/',
      type: 'Mobile App',
      description: 'Cross-platform fitness tracking app with social features and personalized workout recommendations.',
      date: '2023-11-12',
      technologies: ['React Native', 'Firebase', 'Redux'],
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400'
      ]
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/',
      type: 'Web App',
      description: 'Cloud infrastructure optimization tool that reduces costs by 40% while improving performance and scalability.',
      date: '2023-06-20',
      technologies: ['AWS', 'Terraform', 'Lambda', 'CloudFormation'],
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400'
      ]
    }
  ];

  const data = items?.length ? items : demo;
  const filters = ["ALL", "Web App", "Mobile App", "Design", "AI"];
  const filteredData = selectedFilter === "ALL" ? data : data.filter(item => item.type === selectedFilter);

  // Initialize current images and visible cards
  useEffect(() => {
    const initialImages = {};
    const initialVisible = {};
    
    filteredData.forEach((item, index) => {
      initialImages[index] = item.images?.[0] || item.image;
      initialVisible[index] = true;
    });
    
    setCurrentImages(initialImages);
    setVisibleCards(initialVisible);
  }, [filteredData]);

  // Handle filter changes with smooth transitions
  useEffect(() => {
    if (filteredData.length === 0) return;

    // Reset item refs
    itemRefs.current = new Array(filteredData.length).fill(null);
    
    // Trigger reflow for animations
    requestAnimationFrame(() => {
      // Cards will automatically animate due to CSS classes
    });
  }, [filteredData]);

  // Image slideshow effect
  useEffect(() => {
    if (hoveredCard === null) return;

    const cardData = filteredData[hoveredCard];
    if (!cardData?.images || cardData.images.length <= 1) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cardData.images.length;
      
      setCurrentImages(prev => ({
        ...prev,
        [hoveredCard]: cardData.images[currentIndex]
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [hoveredCard, filteredData]);

  // Mouse position tracking for spotlight effect
  useEffect(() => {
    const el = rootRef.current;
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      pos.current = { x: width / 2, y: height / 2 };
      
      // Update CSS variables directly
      el.style.setProperty('--x', `${pos.current.x}px`);
      el.style.setProperty('--y', `${pos.current.y}px`);
    }
  }, []);

  const moveTo = (x, y) => {
    const el = rootRef.current;
    if (!el) return;

    pos.current.x = x;
    pos.current.y = y;
    
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  const handleMove = e => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    
    if (fadeRef.current) {
      fadeRef.current.style.opacity = '0';
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      fadeRef.current.style.opacity = '1';
    }
  };

  const handleCardMove = e => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleCardEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setHoveredCard(null);
  };

  return (
    <div className="container-custom">
      <style jsx>{`
        @keyframes cardEnter {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes imageFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        .card-enter {
          animation: cardEnter 0.6s ease-out forwards;
        }
        
        .image-fade {
          animation: imageFade 0.3s ease-out forwards;
        }
        
        .card-stagger-0 { animation-delay: 0ms; }
        .card-stagger-1 { animation-delay: 100ms; }
        .card-stagger-2 { animation-delay: 200ms; }
        .card-stagger-3 { animation-delay: 300ms; }
        .card-stagger-4 { animation-delay: 400ms; }
        .card-stagger-5 { animation-delay: 500ms; }
      `}</style>

      <div className="flex justify-center gap-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
              selectedFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div
        ref={rootRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`relative w-full h-full flex flex-wrap justify-center items-start px-4 gap-5 ${className}`}
        style={{
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        }}
      >
        {filteredData.map((c, i) => (
          <article
            key={`${c.title}-${c.type}-${i}`}
            ref={el => {
              itemRefs.current[i] = el;
            }}
            onMouseMove={handleCardMove}
            onMouseEnter={() => handleCardEnter(i)}
            onMouseLeave={handleCardLeave}
            className={`group relative flex flex-col w-[350px] rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 card-enter card-stagger-${i % 6}`}
            style={{
              '--card-border': c.borderColor || 'transparent',
              background: c.gradient,
              '--spotlight-color': 'rgba(255,255,255,0.3)',
              opacity: 0 // Start hidden, animation will make it visible
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
              }}
            />
            
            {/* Image Section */}
            <div className="relative z-10 p-4">
              <div className="relative">
                <div className="w-full h-48 rounded-xl shadow-md overflow-hidden">
                  <img
                    id={`card-image-${i}`}
                    src={currentImages[i] || c.images?.[0] || c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover image-fade"
                  />
                </div>
                {/* GitHub Icon - Only appears on hover */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  {c.url.includes('github.com') && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg hover:scale-110"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
                {/* Project Type Badge - Centered at bottom */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {c.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 p-4 pt-0 flex-1 flex flex-col">
              {/* Title and Subtitle side by side */}
              <div className="mb-3 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{c.title}</h3>
                  {c.handle && <p className="text-white/60 text-xs">{c.handle}</p>}
                </div>
                <p className="text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  {c.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="mb-4 flex-1">
                <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                  {c.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-3">
                <p className="text-white/70 text-xs font-medium mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {c.technologies?.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-white px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {c.technologies?.length > 4 && (
                    <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                      +{c.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Date Only */}
              <div className="flex justify-between items-center pt-3 border-t border-white/20">
                <span className="text-white/60 text-xs">
                  {c.date ? new Date(c.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short'
                  }) : 'No date'}
                </span>
              </div>
            </div>
          </article>
        ))}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: '',
            WebkitBackdropFilter: '',
            background: '',
            maskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
          }}
        />
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: '',
            WebkitBackdropFilter: '',
            background: '',
            maskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
            opacity: 1
          }}
        />
      </div>
    </div>
  );
};

export default ChromaGrid;
