import React from 'react';
import PageHero from '../../components/PageHero';
import { BookOpen, Calendar, Info, Mail, CheckCircle, ClipboardList } from 'lucide-react';

const SpellingBee = () => {
  const rounds = [
    { title: 'Round 1: Written Test', date: 'November', location: 'Classroom' },
    { title: 'Semi-finals: Written Test', date: 'December', location: 'Library' },
    { title: 'Finals: Verbal Competition', date: 'January', location: 'Cafeteria Stage' },
  ];

  return (
    <div>
      <PageHero 
        title="Spelling Bee 📝" 
        subtitle="Celebrating linguistic excellence and sportsmanship" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Program Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Elsa England Spelling Bee is an annual competition for students in grades 2–5. It provides a platform for students to showcase their spelling abilities, improve their vocabulary, and develop confidence in public speaking.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The program is open to all England families, and PTA membership is not required to participate. We encourage all interested students to register and join this exciting academic challenge.
              </p>
              
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" /> How to Participate
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Register your child during the open window (Sept 15 – Oct 1).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Access study materials provided by the Scripps National Spelling Bee.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Participate in the classroom written test in November.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-accent" /> Competition Rounds
              </h3>
              <div className="space-y-6">
                {rounds.map((round, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-primary">{round.title}</h4>
                      <p className="text-sm text-gray-500">{round.location}</p>
                    </div>
                    <span className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {round.date}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  * Registration takes place from September 15th to October 1st.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Questions about the Bee?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              For more information about registration or study guides, please visit the official program page on our Google Site.
            </p>
            <a 
              href="https://sites.google.com/view/elsaenglandpta/programs/spelling-bee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Official Program Page <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpellingBee;
