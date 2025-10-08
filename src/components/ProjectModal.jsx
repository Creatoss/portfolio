import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { FaTimes, FaGithub, FaCalendar, FaCode, FaImages, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useLayoutEffect(() => {
    if (modalRef.current && backdropRef.current) {
      // Backdrop animation
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      // Modal animation
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
      );
    }

    return () => {
      if (modalRef.current && backdropRef.current) {
        gsap.to([modalRef.current, backdropRef.current], {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    };
  }, []);

  if (!project) return null;

  // Check if there's a GitHub link
  const hasGitHubLink = project.url && project.url.includes('github.com');

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 p-6 text-white">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 text-lg">{project.subtitle}</p>
            </div>
            <button 
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 ml-4 flex-shrink-0"
            >
              <FaTimes size={20} />
            </button>
          </div>
          
          {/* Project Type Badge */}
          <div className="absolute -bottom-3 left-6">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              {project.type}
            </span>
          </div>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Gallery</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images?.map((img, index) => (
                  <div key={index} className="group relative">
                    <img
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
                  </div>
                )) || (
                  <div className="col-span-2 text-center py-12 text-gray-500">
                    <FaImages size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No images available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Description */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About this Project</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description || 'No description available for this project.'}
                </p>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Details</h3>
                
                {/* Date */}
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="font-medium text-gray-800">
                      {project.date ? new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Not specified'}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      )) || (
                        <span className="text-gray-500 text-sm">No technologies listed</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Links - Only show if GitHub link exists */}
              {hasGitHubLink && (
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Links</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <FaGithub size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          {project.additionalInfo && (
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Additional Information</h3>
              <p className="text-blue-700">{project.additionalInfo}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              {project.handle && `By ${project.handle}`}
            </p>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
