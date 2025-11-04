import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-md text-white shadow-lg py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CodingThinker Logo" 
                  className="w-full h-full object-contain"

                />
</div>
              <span className="text-xl font-bold text-green-500">
                CodingThinker
              </span>
            </div>
          </div>
          {/* Center Section - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white px-5 py-4 text-base font-medium flex items-center transition-all duration-200 hover:bg-white/10 rounded-lg">
              Home
            </a>
            
            <a href="#" className="text-white hover:text-white px-5 py-4 text-base font-medium flex items-center transition-all duration-200 hover:bg-white/10 rounded-lg">
              About coding thinker
            </a>

            <a href="#" className="text-white hover:text-white px-5 py-4 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              Technical Lead
            </a>
            
            <a href="#" className="text-white hover:text-white px-5 py-4 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-lg">
              Workshop
            </a>
          </nav>

          {/* Right Section - Login/Register */}
            <div className="flex items-center space-x-6">
              <a href="#" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg rounded-lg shadow-lg">
                Login
              </a>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-7 py-3 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                Register Now
              </a>
            </div>
        </div>
      </div>
    </header>

    
  );
};
export default Header;