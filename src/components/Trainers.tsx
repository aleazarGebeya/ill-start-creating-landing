
import React from 'react';

const trainers = [
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop',
    name: 'Abebe Bikila',
    specialty: 'Endurance and Marathon Coach',
  },
  {
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop',
    name: 'Fatuma Roba',
    specialty: 'Strength and Conditioning Expert',
  },
  {
    image: 'https://images.unsplash.com/photo-1577221084712-45b044c67f04?q=80&w=2070&auto=format&fit=crop',
    name: 'Derartu Tulu',
    specialty: 'Yoga and Flexibility Instructor',
  },
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Expert Trainers</h2>
          <p className="text-lg text-gray-400 mt-2">World-class professionals dedicated to your success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img src={trainer.image} alt={trainer.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-orange-500 font-medium">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
