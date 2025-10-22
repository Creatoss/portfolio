import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Simple light blue color scheme (one color, no gradient)
  const colorSchemes = {
    "Web App": [
      { borderColor: "#60a5fa", background: "#d2e4ff" }, // blue-400 border, light blue bg
    ],
    "Mobile App": [{ borderColor: "#60a5fa", background: "#d2e4ff" }],
    AI: [{ borderColor: "#60a5fa", background: "#d2e4ff" }],
    Software: [{ borderColor: "#60a5fa", background: "#d2e4ff" }],
  };


  const data = items?.length ? items : demo;
  const filters = ["ALL", "Web App", "Mobile App", "Software","AI" ];
  const filteredData =
    selectedFilter === "ALL"
      ? data
      : data.filter((item) => item.type === selectedFilter);

  // Function to get color scheme based on project type and index
  const getColorScheme = (type, index) => {
    const schemes = colorSchemes[type] || colorSchemes["Web App"];
    return schemes[index % schemes.length];
  };

  const moveTo = (x, y) => {
    const el = rootRef.current;
    if (!el) return;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const handleMove = (e) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);

    if (fadeRef.current) {
      fadeRef.current.style.opacity = "0";
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      fadeRef.current.style.opacity = "1";
    }
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
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
    <div id= "projects" className="container-custom">
      <div className="flex justify-center gap-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 border ${
              selectedFilter === filter
                ? "bg-[#60a5fa] text-white border-[#60a5fa] shadow-lg"
                : "bg-white/80 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
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
        className={`relative w-full h-full flex flex-wrap justify-center items-start px-4 gap-12 ${className}`}
        style={{
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        }}
      >
        {filteredData.map((c, i) => {
          const colorScheme = getColorScheme(c.type, i);
          return (
            <article
              key={`${c.title}-${c.type}-${i}`}
              onMouseMove={handleCardMove}
              onMouseEnter={() => handleCardEnter(i)}
              onMouseLeave={handleCardLeave}
              className={`group relative flex flex-col w-[350px] rounded-[20px] overflow-hidden border-2 transition-all duration-300 hover:scale-[1.06] hover:shadow-xl`}
              style={{
                backgroundColor: colorScheme.background,
                "--spotlight-color": "rgba(255,255,255,0.3)",
                boxShadow: `0 10px 30px -5px ${colorScheme.borderColor}20`,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                }}
              />

              {/* Image Section */}
              <div className="relative z-10 p-4">
                <div className="relative">
                  <div className="relative w-full h-48 rounded-xl shadow-md overflow-hidden">
                    <img
                      src={c.images?.[0] || c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06] brightness-100 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                  </div>
                  {/* GitHub Icon - Only appears on hover */}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                    {c.url.includes("github.com") && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-all duration-200 shadow-lg hover:scale-110 hover:shadow-xl"
                        style={{ color: colorScheme.borderColor }}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md"
                      style={{
                        backgroundColor: `${colorScheme.borderColor}33`,
                        color: "#ffffff",
                        borderColor: colorScheme.borderColor,
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {c.title}
                    </h3>
                    {c.handle && (
                      <p className="text-gray-700 text-xs">{c.handle}</p>
                    )}
                  </div>
                  <p
                    className="text-gray-800 text-sm font-medium px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${colorScheme.borderColor}`,
                      color: "white",
                      borderColor: colorScheme.borderColor,
                    }}
                  >
                    {c.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-4 flex-1">
                  <p className="text-gray-800 text-sm leading-relaxed ">
                    {c.description}
                  </p>
                </div>

                {/* Technologies + Date (same line) */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-300">
                  <div className="flex flex-wrap gap-1">
                    {c.technologies?.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded text-xs font-medium border"
                        style={{
                          backgroundColor: `${colorScheme.borderColor}1A`,
                          color: "#0f172a",
                          borderColor: colorScheme.borderColor,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {c.technologies?.length > 4 && (
                      <span
                        className="px-2 py-1 rounded text-xs font-medium border"
                        style={{
                          backgroundColor: `${colorScheme.borderColor}1A`,
                          color: "#0f172a",
                          borderColor: colorScheme.borderColor,
                        }}
                      >
                        +{c.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <span className="text-gray-700 text-xs whitespace-nowrap ml-2">
                    {c.date
                      ? new Date(c.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })
                      : "No date"}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: "",
            WebkitBackdropFilter: "",
            background: "",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          }}
        />
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: "",
            WebkitBackdropFilter: "",
            background: "",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default ChromaGrid;
