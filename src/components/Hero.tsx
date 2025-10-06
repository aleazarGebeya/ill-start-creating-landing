
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white pt-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4 animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Unleash Your Inner <span className="text-orange-500">Athlete</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
          Achieve your fitness goals with our world-class trainers, state-of-the-art facilities, and a community that inspires.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#features" className="animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
