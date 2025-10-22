import React from "react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="w-full py-20 bg-blue-100/60 backdrop-blur-sm">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or just having a friendly chat. 
              Let's create something amazing together!
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden m-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just say hello, 
                  I'd love to hear from you. I'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">mohamedghaith.hamzaoui@enicar.ucar.tn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Aryanah, Tunisia</p>
                    </div>
                  </div>
                  
                 
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg font-medium">Prefer other ways to connect?</p>
            <div className="flex justify-center space-x-8 mb-12">
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/mohamed-ghaith-hamzaoui-007980291" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/Creatoss" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/ghaith.hamzaoui.5/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Upwork */}
              {/* <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 transform hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.406 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.863h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a> */}
              
              {/* Kaggle */}
              <a href="https://www.kaggle.com/ghaithhamzaoui" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.129 6.191 6.458 8.174c.095.104.117.208.07.358"/>
                </svg>
              </a>
            </div>

            {/* Copyright and Made with React */}
            <div className="border-t border-gray-300/50 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-600 text-sm">
                  © {currentYear} Mohamed Ghaith Hamzaoui. All rights reserved.
                </p>
                <div className="flex items-center text-gray-600 text-sm">
                  <span>Made with</span>
                  <span className="text-red-500 mx-1">❤️</span>
                  <span>and React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
