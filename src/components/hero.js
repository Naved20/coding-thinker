import React, { useState, useEffect } from 'react';

// SVG icons import karein - assets/icons folder se
import ReactIcon from '../assets/icons/React.svg';
import KotlinIcon from '../assets/icons/Kotlin.svg'; 
import NextjsIcon from '../assets/icons/Nextjs.svg';
import VueDotJsIcon from '../assets/icons/VueDotJs.svg';
import FlutterIcon from '../assets/icons/Flutter.svg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techIcons = [
    { 
      id: 1, 
      label: 'React', 
      icon: ReactIcon
    },
    { 
      id: 2, 
      label: 'Kotlin', 
      icon: KotlinIcon
    },
    { 
      id: 3, 
      label: 'Nextjs', 
      icon: NextjsIcon
    },
    { 
      id: 4, 
      label: 'VueDotJs', 
      icon: VueDotJsIcon
    },

    { 
      id: 7, 
      label: 'Flutter', 
      icon: FlutterIcon
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Left VS Code-style code window */}
      <div className="absolute left-5 bottom-20 h-2/5 w-3/3">
        <div className="h-full border-b-2  border-l-1 border-gray-700 rounded-2xl bg-gray-900/30 opacity-50 backdrop-blur-sm shadow-lg overflow-hidden">
          {/* Code content */}
          <div className="flex flex-col font-mono text-xs text-gray-300 leading-5 p-3 opacity-50">
            <div className="flex gap-2"><span className="text-gray-500 w-6">01</span><span className="text-green-400">const</span> hero = {'{'} animation: true {'}'};</div>
            <div className="flex gap-2 ml-4"><span className="text-gray-500 w-6">02</span><span className="text-purple-400">interface</span> UX {'{'} animation: boolean {'}'};</div>
            <div className="flex gap-2"><span className="text-gray-500 w-6">03</span>function renderComponent() {'{'}</div>
            <div className="flex gap-2 ml-4"><span className="text-gray-500 w-6">04</span>return <span className="text-blue-400">component</span>;</div>
            <div className="flex gap-2"><span className="text-gray-500 w-6">05</span>{'}'}</div>
            <div className="flex gap-2"><span className="text-gray-500 w-6">06</span>export default hero;</div>
            <div className="flex gap-2"><span className="text-gray-500 w-6">07</span>import React, {'{'} useState {'}'} from 'react';</div>
            <div className="flex gap-2"><span className="text-gray-500 w-6">08</span>const [state, setState] = useState(null);</div>
          </div>
        </div>
      </div>

      {/* Right VS Code-style code window */}
      <div className="absolute right-8 top-15 h-2/5 w-3/3">
        <div className="h-full w-full border-b-2 border-gray-700 rounded-2xl bg-gray-900/30 opacity-50 backdrop-blur-sm shadow-lg overflow-hidden">
          <div className="flex flex-col font-mono text-xs text-gray-300 leading-5 p-3 opacity-50 text-right">
            <div className="flex justify-end gap-2"><span className="text-green-400">const</span> hero = {'{'} animation: true {'}'};</div>
            <div className="flex justify-end gap-2 mr-4"><span className="text-purple-400">interface</span> UX {'{'} animation: boolean {'}'}</div>
            <div className="flex justify-end gap-2">function renderComponent() {'{'}</div>
            <div className="flex justify-end gap-2 mr-4">return <span className="text-blue-400">component</span>;</div>
            <div className="flex justify-end gap-2">{'}'}</div>
            <div className="flex justify-end gap-2">export default hero;</div>
            <div className="flex justify-end gap-2">import React, {'{'} useState {'}'} from 'react';</div>
            <div className="flex justify-end gap-2">const [state, setState] = useState(null);</div>
            <div className="flex justify-end gap-2"><span className="text-green-400">const</span> hero = {'{'} animation: true {'}'};</div>
            <div className="flex justify-end gap-2 mr-4"><span className="text-purple-400">interface</span> UX {'{'} animation: boolean {'}'}</div>
            <div className="flex justify-end gap-2">function renderComponent() {'{'}</div>
            <div className="flex justify-end gap-2 mr-4">return <span className="text-blue-400">component</span>;</div>
            <div className="flex justify-end gap-2">{'}'}</div>
          </div>
        </div>
      </div>

      {/* Top badge */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className={`bg-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full font-bold">NEW</span>
          <span>v1.2 Beta is available</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-32">
        {/* Hero text */}
        <div className="text-center max-w-5xl mb-12">
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Simplify and optimize
          </h1>
          <h2 className={`text-6xl md:text-7xl lg:text-8xl font-light italic mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            your user experience.
          </h2>
        </div>

        {/* Tech icons with imported SVG images */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {techIcons.map((tech, index) => (
            <div
              key={tech.id}
              className="w-16 h-16 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 relative group"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIcon(tech.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Imported SVG Icon */}
              <img 
                src={tech.icon} 
                alt={tech.label}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  console.log(`SVG failed to load: ${tech.label}`);
                }}
              />
              
              {/* Tooltip */}
              {hoveredIcon === tech.id && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-gray-600 z-20">
                  {tech.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-gray-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className={`flex items-center gap-4 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 text-xl font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg rounded-xl shadow-lg">
              Login
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
              Register Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;