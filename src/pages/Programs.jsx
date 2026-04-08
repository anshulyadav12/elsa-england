import React from 'react';
import PageHero from '../components/PageHero';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
  const programs = [
    {
      icon: '🌍',
      title: 'Geography Superstars',
      description: 'Students explore world geography through fun competitions and map activities.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Geography Superstars Inquiry',
    },
    {
      icon: '➕',
      title: 'Math Pentathlon',
      description: 'A multi-round math competition that builds problem-solving and teamwork skills.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Math Pentathlon Inquiry',
    },
    {
      icon: '⭐',
      title: 'Math Superstars',
      description: 'Weekly math enrichment packets that reinforce classroom learning at home.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Math Superstars Inquiry',
    },
    {
      icon: '🎨',
      title: 'Reflections',
      description: 'A national PTA arts recognition program celebrating student creativity in various art forms.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Reflections Program Inquiry',
    },
    {
      icon: '📝',
      title: 'Spelling Bee',
      description: 'School-wide spelling competition. Winners advance to district and regional levels.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Spelling Bee Inquiry',
    },
    {
      icon: '📸',
      title: 'Yearbook',
      description: 'Capturing the memories of the school year. Join the committee or submit photos!',
      link: '/programs/yearbook',
    },
    {
      icon: '🎒',
      title: 'School Supply Kits',
      description: 'Pre-packaged grade-level supply kits for back to school. Saves time and supports the PTA.',
      link: '/programs/school-supplies',
    },
    {
      icon: '🐾',
      title: 'Math Kangaroo',
      description: 'An international math competition that challenges students with fun and engaging logic problems.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'Math Kangaroo Inquiry',
    },
  ];

  return (
    <div>
      <PageHero 
        title="PTA Programs" 
        subtitle="Enriching student learning inside and outside the classroom through diverse initiatives" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Programs</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The Elsa England PTA is proud to sponsor and organize a wide range of academic and creative programs that inspire our students to explore their interests and excel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <ProgramCard key={i} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Watch D.O.G.S. Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="text-6xl md:text-8xl">🐕</div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-accent">Watch D.O.G.S.®</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Dads Of Great Students — an innovative program being used by schools across America which helps them to be positively influenced by their father figures.
            </p>
            <a
              href="/programs/watchdogs"
              className="inline-block bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Learn More About Watch D.O.G.S.
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
