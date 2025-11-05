import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Multiple Code Blocks */}
        <div className="space-y-6">
          {/* Multiple Code Blocks Stack */}
          <div className="space-y-4 transform rotate-1">
            {/* Code Block 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500 shadow-2xl">
              <div className="text-gray-400 text-sm font-mono mb-3">// Environment variables for security and flexibility</div>
              <div className="text-green-400 text-sm font-mono">require('dotenv').config();</div>
            </div>

            {/* Code Block 2 - Slightly Offset */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500 shadow-2xl transform -rotate-1 ml-8">
              <div className="text-gray-400 text-sm font-mono mb-3">// Define the API endpoint and configuration</div>
              <div className="text-gray-400 text-sm font-mono mt-3">const headers = &#123;</div>
              <div className="text-yellow-400 text-sm font-mono ml-4">'Content-Type': 'application/json',</div>
              <div className="text-gray-400 text-sm font-mono">&#125;;</div>
            </div>

            {/* Code Block 3 - Different Offset */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-green-500 shadow-2xl transform rotate-2 -ml-4">
              <div className="text-gray-400 text-sm font-mono mb-3">// Environment variables for security and flexibility</div>
              <div className="text-green-400 text-sm font-mono">require('dotenv').config();</div>
            </div>
          </div>

          {/* Version Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW v1.2 Beta is available
          </div>

          {/* Additional Small Code Blocks */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800/60 rounded-lg p-3 border border-gray-700">
                <div className="text-gray-400 text-xs font-mono">// Config {item}</div>
                <div className="text-cyan-400 text-xs font-mono">headers = &#123;...&#125;</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Hero Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Simplify and optimize
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              your
            </span>
            user experience.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Streamline your development workflow with powerful tools and seamless integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-10 py-5 text-lg font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
              Login
            </button>
            
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 text-lg font-semibold rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;