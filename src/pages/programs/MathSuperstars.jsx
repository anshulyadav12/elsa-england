import React from 'react';
import PageHero from '../../components/PageHero';
import { Star, Download, Calendar, Mail, CheckCircle } from 'lucide-react';

const MathSuperstars = () => {
  return (
    <div>
      <PageHero 
        title="Math Superstars ⭐" 
        subtitle="Optional math enrichment for curious minds" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Program Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Math Superstars is an optional enrichment program for K-5 students designed to enhance math skills, practice problem-solving, and encourage parent/child teamwork.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The program provides students with additional opportunities to explore mathematical concepts beyond the standard classroom curriculum, fostering a deeper appreciation for the subject.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Program Rules
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Download and print 20 worksheets at home.</li>
                  <li>Submit completed worksheets electronically via the provided link.</li>
                  <li><strong>Important:</strong> Teachers will not accept paper copies.</li>
                  <li>Encouraged as a collaborative activity between parents and students.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-accent" /> Program Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Program Duration</span>
                    <span className="font-bold text-primary">Sept - March</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Final Turn-in Date</span>
                    <span className="font-bold text-primary">April 3, 2026</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-accent" /> Contact Information
                </h3>
                <p className="text-gray-600 mb-4">Questions? Please reach out to the Math Superstars program coordinator:</p>
                <a 
                  href="mailto:eee.mathsuperstars@gmail.com" 
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-all"
                >
                  Email Coordinator
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Math Journey</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to challenge yourself? Download the worksheets from our portal and start solving today!
            </p>
            <a 
              href="https://sites.google.com/view/elsaenglandpta/programs/math-superstars" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Access Math Worksheets <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathSuperstars;
