import React, { useEffect, useRef, useState } from "react";

export default function IgnitiaTextSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Fast progress calculation
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / windowHeight
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into individual words
  const renderAnimatedText = () => {
    const text = "At Ignitia, we redefine identity and access management with a scalable, modular platform tailored for seamless UX and deployment adaptability. Our pay-as-you-go model ensures you get exactly what you need.";
    const words = text.split(' ');
    
    return words.map((word, index) => {
      const wordProgress = index / words.length;
      const isWhite = scrollProgress > wordProgress;
      const isBold = word === 'Ignitia,' || word === 'scalable,';
      
      return (
        <span
          key={index}
          className={`transition-colors duration-200 ${
            isWhite ? 'text-white' : 'text-white/30'
          } ${isBold ? 'font-semibold' : ''}`}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="bg-black">
   
      <div 
        ref={sectionRef}
        className="relative box-border flex flex-col justify-center items-start p-10 isolate border-b border-white/10 w-full max-w-[1200px] mx-auto h-[272px]"
      >
        <p className="text-[40px] leading-[48px] tracking-[-0.03em]">
          {renderAnimatedText()}
        </p>
        {/* Gradient line effect */}
        <div className="absolute bottom-0 left-[140px] w-[154px] h-[1px] rounded-full bg-gradient-to-r from-[#0B0C0C] to-[#B8DFF9]" />
      </div>

      {/* More spacer for scrolling */}
      <div className="h-screen"></div>
    </div>
  );
}