import React from 'react';
import PageHero from '../components/PageHero';
import { ShoppingBag } from 'lucide-react';

const Store = () => {
  return (
    <div>
      <PageHero 
        title="PTA Spirit Store 🛍️" 
        subtitle="Show your England pride and support our school with high-quality gear" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <ShoppingBag className="w-8 h-8 text-accent" /> Shop Official Spirit Wear
            </h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
              From t-shirts and water bottles to **PTA memberships**, every purchase helps fund programs, events, and resources for our students and staff.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-12">
            <div className="w-full md:h-[1000px] h-[700px]">
              <iframe 
                src="https://www.zeffy.com/en-US/ticketing/823d1459-17e1-44cc-b5b4-ead0c4fe182d" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowtransparency="true" 
                loading="lazy"
                title="PTA Store"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
            <p className="text-gray-500 font-medium">
              Having trouble loading the store? <a href="https://www.zeffy.com/en-US/ticketing/823d1459-17e1-44cc-b5b4-ead0c4fe182d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click here to visit our Zeffy store page directly</a>.
            </p>
            <p className="mt-4 text-sm text-gray-400 italic">
              * Store inventory is updated periodically throughout the school year.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
