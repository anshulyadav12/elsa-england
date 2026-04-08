import React from 'react';
import PageHero from '../components/PageHero';
import { Megaphone, Calendar, ArrowRight, Facebook } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      title: 'Welcome Back to School!',
      date: 'August 2025',
      description: 'The PTA is excited to kick off another great year at England Elementary! We have many events and programs planned to support our students and staff.',
    },
    {
      title: 'Spring Picnic Announced',
      date: 'March 2025',
      description: "Mark your calendars — our annual Spring Picnic is coming up! It's our biggest community event of the year with food, games, and music.",
    },
    {
      title: 'PTA Membership Open',
      date: 'September 2025',
      description: 'Join the PTA today and help make this year the best one yet! Your membership directly funds important enrichment programs.',
    },
  ];

  return (
    <div>
      <PageHero 
        title="Announcements" 
        subtitle="Stay up to date with the latest PTA news and school updates" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="bg-accent/10 p-4 rounded-full">
              <Megaphone className="w-12 h-12 text-primary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {announcements.map((ann, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-accent flex flex-col hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                  <Calendar className="w-4 h-4 text-accent" />
                  {ann.date}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{ann.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {ann.description}
                </p>
                <button disabled className="text-gray-400 font-bold flex items-center gap-2 cursor-not-allowed">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-12 rounded-3xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Want More Updates?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              For the latest real-time updates, event photos, and community discussions, follow Elsa England on Facebook or contact our president.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://www.facebook.com/rrisd.england/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                <Facebook className="w-5 h-5 text-[#1877F2]" /> School Facebook
              </a>
              <a
                href="mailto:englandptapresident@gmail.com"
                className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Email President
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcements;
