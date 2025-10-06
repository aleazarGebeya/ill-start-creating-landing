
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold tracking-wider">
              Fit<span className="text-orange-500">Fusion</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              <a href="#workouts" className="text-gray-300 hover:text-white transition-colors duration-300">Workouts</a>
              <a href="#trainers" className="text-gray-300 hover:text-white transition-colors duration-300">Trainers</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </nav>
          </div>
          <div className="hidden md:block">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20">
              Join Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
            <a href="#workouts" className="text-gray-300 hover:text-white transition-colors duration-300">Workouts</a>
            <a href="#trainers" className="text-gray-300 hover:text-white transition-colors duration-300">Trainers</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20">
              Join Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
