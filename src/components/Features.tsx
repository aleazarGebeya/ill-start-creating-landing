
import React from 'react';
import { Dumbbell, Users, UtensilsCrossed, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
    title: 'Modern Equipment',
    description: 'Train with the latest and greatest equipment to maximize your performance and results.',
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: 'Expert Trainers',
    description: 'Our certified trainers are dedicated to helping you achieve your personal fitness goals.',
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-orange-500" />,
    title: 'Nutrition Plans',
    description: 'Get custom-tailored nutrition plans to complement your workouts and boost your energy.',
  },
  {
    icon: <Calendar className="w-12 h-12 text-orange-500" />,
    title: 'Flexible Schedules',
    description: 'Book classes and training sessions that fit your busy lifestyle with our flexible calendar.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-lg text-gray-400 mt-2">The best features to help you on your fitness journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
