import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md text-white shadow-lg py-4 pb-4 z-50 border-t border-white/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center shadow-md overflow-hidden">
                <img src="/logo.png" alt="CodingThinker Logo" className="w-full h-full object-contain"/>
              </div>
              <span className="text-2xl md:text-xl font-bold text-white">
                Coding Thinker
              </span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-white hover:text-white px-4 py-3 md:px-5 md:py-4 text-2xl md:text-xl font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              Home
            </a>
            <a href="#" className="text-white hover:text-white px-4 py-3 md:px-5 md:py-4 text-2xl md:text-xl font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              About
            </a>
            <a href="#" className="text-white hover:text-white px-4 py-3 md:px-5 md:py-4 text-2xl md:text-xl font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              Technical Lead
            </a>
            <a href="#" className="text-white hover:text-white px-4 py-3 md:px-5 md:py-4 text-2xl md:text-xl font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              Workshop
            </a>
          </nav>

          {/* Right Section - Login/Register (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 lg:px-7 lg:py-3 text-2xl md:text-xl font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg rounded-xl shadow-lg">
              Login
            </a>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 lg:px-7 lg:py-3 rounded-xl text-2xl md:text-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-2 rounded-lg transition-all duration-200 hover:bg-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg mt-4 p-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-white px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
                Home
              </a>
              <a href="#" className="text-white hover:text-white px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
                About coding thinker
              </a>
              <a href="#" className="text-white hover:text-white px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
                Technical Lead
              </a>
              <a href="#" className="text-white hover:text-white px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
                Workshop
              </a>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 text-center text-sm font-medium transition-all duration-200 hover:bg-white/20 rounded-lg">
                  Login
                </a>
                <a href="#" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 rounded-lg">
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;