import React from 'react';
import PageHero from '../../components/PageHero';
import { Globe, FileText, Calendar, Mail, Download } from 'lucide-react';

const GeographySuperstars = () => {
  return (
    <div>
      <PageHero 
        title="Geography Superstars 🌍" 
        subtitle="Exploring the world one continent at a time" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Program Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Geography Superstars is a PTA-sponsored enrichment program designed to enhance students' knowledge of geography, encourage parent/child teamwork, and promote learning about the world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each grade level (K-5) focuses on a different continent, allowing students to build a comprehensive understanding of global geography throughout their elementary years.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Download className="w-5 h-5" /> How to Participate
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Print 15 worksheets at home according to your grade level.</li>
                  <li>Complete worksheets with your child.</li>
                  <li>Submit completed worksheets online via the submission link.</li>
                  <li>Note: One worksheet per submission.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-accent" /> Important Dates
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Program Start</span>
                    <span className="font-bold text-primary">October 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Submission Deadline</span>
                    <span className="font-bold text-primary">March 27, 2026</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-accent" /> Contact Information
                </h3>
                <p className="text-gray-600 mb-4">For any questions regarding the Geography Superstars program, please reach out to our coordinator:</p>
                <a 
                  href="mailto:eee.geographysuperstars@gmail.com" 
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-all"
                >
                  Email Coordinator
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to start exploring?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Download your grade-level worksheets and begin your journey as a Geography Superstar today!
            </p>
            <a 
              href="https://sites.google.com/view/elsaenglandpta/programs/geography-superstars" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Access Worksheets <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeographySuperstars;
