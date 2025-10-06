
import React from 'react';

const workouts = [
  {
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    title: 'CrossFit',
    description: 'High-intensity functional training that combines elements of cardio, weightlifting, and gymnastics.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    title: 'Strength Training',
    description: 'Build muscle, increase strength, and improve your metabolism with our guided weightlifting programs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1599447385532-3b6b371541c9?q=80&w=2070&auto=format&fit=crop',
    title: 'Yoga & Pilates',
    description: 'Improve flexibility, balance, and mindfulness with our calming and restorative classes.',
  },
];

const Workouts: React.FC = () => {
  return (
    <section id="workouts" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Workout Programs</h2>
          <p className="text-lg text-gray-400 mt-2">Find the perfect program to match your fitness level and goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
              <img src={workout.image} alt={workout.title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">{workout.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">{workout.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
