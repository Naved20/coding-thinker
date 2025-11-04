import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Simplify and optimize your <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            user experience.
          </span>
        </h1>

        {/* Code Snippet */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 text-left border border-gray-700 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">JavaScript</span>
          </div>
          <pre className="text-cyan-100 text-sm md:text-base overflow-x-auto">
            <code>

            </code>
          </pre>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto">
            Login
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto">
            Register Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;