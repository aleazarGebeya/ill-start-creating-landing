
import React from 'react';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$29',
    features: ['Access to Gym Floor', 'Basic Fitness Classes', 'Locker Room Access'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    features: ['All Basic Features', 'Unlimited Group Classes', 'Access to Sauna & Steam Room', '1 Personal Training Session/Month'],
    isPopular: true,
  },
  {
    name: 'Elite',
    price: '$79',
    features: ['All Pro Features', 'Unlimited Personal Training', 'Towel Service', 'Guest Passes'],
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Membership Plans</h2>
          <p className="text-lg text-gray-400 mt-2">Choose a plan that fits your needs.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col ${tier.isPopular ? 'border-4 border-orange-500 transform scale-105' : 'border-2 border-gray-700'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-center mb-4">{tier.name}</h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold">{tier.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 ${tier.isPopular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-700 hover:bg-orange-500'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
