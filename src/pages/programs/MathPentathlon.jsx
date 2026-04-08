import React from 'react';
import PageHero from '../../components/PageHero';
import { Calculator, Users, Calendar, ExternalLink, Info } from 'lucide-react';

const MathPentathlon = () => {
  return (
    <div>
      <PageHero 
        title="Math Pentathlon ➕" 
        subtitle="Strategic board games that build mathematical minds" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Program Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Math Pentathlon is a K-7 program of interactive board games, coupled with a problem-solving curriculum and assessment tool. The program uses five strategic board games to develop students' problem-solving, logical reasoning, and strategic thinking skills.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aligned with national math standards, these games strengthen basic math concepts while fostering a supportive and cooperative learning environment.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5" /> How it Works
                </h3>
                <p className="text-gray-700">
                  Students meet weekly to learn and practice the five games for their specific division (Division I: K-1, Division II: 2-3, Division III: 4-5). The program culminates in regional tournaments where students can test their skills against peers from other schools.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-accent" /> Meeting Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Start Date</span>
                    <span className="font-bold text-primary">October 25, 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Day & Time</span>
                    <span className="font-bold text-primary">Wednesdays, 5:30 PM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Location</span>
                    <span className="font-bold text-primary">Grade-level Common Areas</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-accent" /> Get Involved
                </h3>
                <p className="text-gray-600 mb-4">Math Pentathlon relies on parent volunteers to coach and monitor games. No advanced math skills required—just a willingness to learn the games with the kids!</p>
                <a 
                  href="https://www.mathpentath.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-all"
                >
                  Visit Math Pentathlon Institute <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Want to learn more about the games?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Check out the official Math Pentathlon website for game descriptions, instructional videos, and tournament information.
            </p>
            <a 
              href="https://www.mathpentath.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Explore Official Website <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathPentathlon;
