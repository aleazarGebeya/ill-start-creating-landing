
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Workouts from './components/Workouts';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Workouts />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
