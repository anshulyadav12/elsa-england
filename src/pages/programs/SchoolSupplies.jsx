import React from 'react';
import PageHero from '../../components/PageHero';
import { CheckCircle, ShoppingCart, Info, Mail, ExternalLink } from 'lucide-react';

const SchoolSupplies = () => {
  const benefits = [
    'Teacher-approved supplies',
    'Saves shopping time',
    'Supports the PTA',
  ];

  const grades = [
    'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'
  ];

  return (
    <div>
      <PageHero 
        title="School Supply Kits 🎒" 
        subtitle="Back-to-school made easy with pre-packaged kits" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary">{benefit}</h3>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-10 rounded-2xl shadow-xl mb-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Effortless Preparation</h2>
              <p className="text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
                The England PTA offers pre-packaged school supply kits for each grade level. Everything your child needs for the school year, curated by their teacher — delivered right to the school before the first day.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Grade Level Kits</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {grades.map((grade, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{grade}</h3>
                <p className="text-gray-500 mb-6 italic">Supplies curated specifically for {grade} teachers.</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-bold">Price: TBD</span>
                  <a
                    href="/store"
                    className="bg-primary text-white py-2 px-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
                  >
                    Order <ShoppingCart className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Info className="w-6 h-6 text-accent" /> Ordering Information
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">Order Deadline & Pickup</h3>
                  <p className="text-gray-600">Details for the 2025–2026 school year will be announced in May. Stay tuned!</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Questions? Email <a href="mailto:ptaenglandvc@outlook.com" className="text-primary underline">ptaenglandvc@outlook.com</a></span>
                </div>
              </div>
              <div>
                <a 
                  href="https://sproutsupplies.com/school-supply-kits/england-elementary-school-supply-kits/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent underline"
                >
                  Visit Sprout Supplies Official Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolSupplies;
