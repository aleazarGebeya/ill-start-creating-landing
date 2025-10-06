
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fit<span className="text-orange-500">Fusion</span></h3>
            <p className="text-gray-400">Your ultimate fitness partner. Join us to transform your body and mind.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#workouts" className="hover:text-orange-500 transition-colors">Workouts</a></li>
              <li><a href="#trainers" className="hover:text-orange-500 transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 py-6 text-center text-gray-500">
          <p>&copy; 2025 FitFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
