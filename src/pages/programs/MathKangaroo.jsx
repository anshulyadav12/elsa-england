import React from 'react';
import PageHero from '../../components/PageHero';
import { Calculator, Calendar, Info, Mail } from 'lucide-react';

const MathKangaroo = () => {
  return (
    <div>
      <PageHero 
        title="Math Kangaroo 🐾" 
        subtitle="An international mathematical competition for students" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-50 p-4 rounded-full mb-8">
            <Calculator className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            We are currently updating our information for the Math Kangaroo program. This international math competition challenges students with fun and engaging logic problems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Info className="w-6 h-6 text-accent" /> What is Math Kangaroo?
              </h3>
              <p className="text-gray-600">
                Math Kangaroo is an international mathematical competition with more than 6 million participants in 92 countries. It aims to promote mathematical thinking and stimulate an interest in math through problem-solving.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6 text-accent" /> Stay Updated
              </h3>
              <p className="text-gray-600">
                Information about registration and test dates will be posted here as soon as it becomes available for the upcoming season.
              </p>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-blue-100 mb-8">
              If you have immediate questions about Math Kangaroo at Elsa England, please contact our program coordinator.
            </p>
            <a 
              href="mailto:englandptapresident@gmail.com" 
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" /> Contact PTA President
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathKangaroo;
