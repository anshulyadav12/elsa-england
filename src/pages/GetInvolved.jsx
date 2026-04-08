import React from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Heart, Users, FileText, HelpCircle, ExternalLink, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const panels = [
    {
      title: 'Donate',
      icon: <Heart className="w-12 h-12 text-accent" />,
      description: 'Your donations directly fund student programs, teacher support, and school events. Every dollar makes a difference.',
      cta: 'Donate via Zeffy',
      href: 'https://www.zeffy.com/en-US/ticketing/823d1459-17e1-44cc-b5b4-ead0c4fe182d',
      isExternal: true,
      bg: 'bg-white'
    },
    {
      title: 'Volunteer',
      icon: <Users className="w-12 h-12 text-accent" />,
      description: "From one-hour event help to year-round committee roles, there's a spot for you. Help us build our community.",
      cta: 'See Volunteer Opportunities',
      href: '/volunteer',
      isExternal: false,
      bg: 'bg-white'
    },
    {
      title: 'Forms & Resources',
      icon: <FileText className="w-12 h-12 text-accent" />,
      description: 'Guidebooks, absence forms, supply lists, and more — all in one convenient place for England families.',
      cta: 'Go to Forms Hub',
      href: '/forms',
      isExternal: false,
      bg: 'bg-white'
    },
    {
      title: 'Why Join?',
      icon: <HelpCircle className="w-12 h-12 text-accent" />,
      description: 'New to the PTA? Learn why membership matters and how it directly helps every student at England.',
      cta: 'Learn More',
      href: '/why-join',
      isExternal: false,
      bg: 'bg-white'
    }
  ];

  return (
    <div>
      <PageHero 
        title="Get Involved" 
        subtitle="Every contribution — big or small — makes England Elementary better for every child" 
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {panels.map((panel, i) => (
              <div key={i} className={`${panel.bg} p-10 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="mb-6 p-4 bg-gray-50 rounded-full">{panel.icon}</div>
                <h2 className="text-2xl font-bold text-primary mb-4">{panel.title}</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed flex-grow">
                  {panel.description}
                </p>
                
                {panel.isExternal ? (
                  <a
                    href={panel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-primary font-extrabold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg"
                  >
                    {panel.cta} <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <Link
                    to={panel.href}
                    className="bg-primary text-white font-extrabold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg"
                  >
                    {panel.cta} <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Your Participation Matters</h2>
          <p className="text-xl text-gray-600 leading-relaxed italic mb-12">
            "We believe that when parents and teachers work together, our children thrive. Whether you can give an hour of your time, a donation of any size, or simply your membership support, you are making Elsa England a better place for our students."
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Local Impact</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Any</div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Time Amount</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">One</div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
