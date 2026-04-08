import React from 'react';
import PageHero from '../components/PageHero';
import BoardMemberCard from '../components/BoardMemberCard';
import { ExternalLink, Globe, Phone, MapPin } from 'lucide-react';

const About = () => {
  const boardMembers = [
    { role: 'President', name: 'Vishal Patel', email: 'englandptapresident@gmail.com' },
    { role: 'Vice President', name: 'Anshul Yadav', email: 'elsaenglandptavp@gmail.com' },
    { role: 'Treasurer', name: 'Ruby Sahoo', email: 'englandptatreasurer@gmail.com' },
    { role: 'Volunteer Coordinator', name: 'Ariana Arce', email: 'ptaenglandvc@outlook.com' },
    { role: 'Webmaster', name: 'Sweta Patel', email: 'englandptawebmaster@gmail.com' },
  ];

  return (
    <div>
      <PageHero 
        title="About Our PTA" 
        subtitle="Dedicated parents, teachers, and staff working together for every child" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary text-white p-8 md:p-12 rounded-2xl shadow-xl text-center mb-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed text-blue-100">
                "England Elementary PTA is an independent, non-profit organization whose mission is to support the staff and students of Elsa England Elementary School. We enhance the educational experience of every child by organizing events, fundraisers, and programs throughout the school year."
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 -mr-16 -mt-16 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent opacity-10 -ml-16 -mb-16 rounded-full"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">2025–2026 Executive Board</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {boardMembers.map((member, i) => (
              <BoardMemberCard key={i} {...member} />
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">School Information</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Location</h3>
                    <p className="text-gray-600">
                      Elsa England Elementary School<br />
                      8801 Pearson Ranch Road<br />
                      Austin, TX 78717
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Phone</h3>
                    <p className="text-gray-600">512-704-1200</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://england.roundrockisd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-700">Official School Website</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://docs.google.com/document/d/1yOWQ47_Lb1SnSkgflv7lQjQsXpXzMDK2XTIF-tBZgBo/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-700">Parent Guidebook 2025–2026</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Re-importing icon if missed above
import { BookOpen } from 'lucide-react';

export default About;
