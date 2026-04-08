import React from 'react';
import PageHero from '../../components/PageHero';
import { Shield, UserCheck, Heart, Mail, ExternalLink, Calendar } from 'lucide-react';

const WatchDogs = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Enhanced School Security',
      description: 'The presence of father figures on campus provides an extra layer of visibility and security.',
    },
    {
      icon: <UserCheck className="w-8 h-8 text-accent" />,
      title: 'Positive Role Models',
      description: 'Providing students with more positive male role models in the educational environment.',
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: 'Deeper Connection',
      description: 'Strengthen the bond with your child and get to see their world at school.',
    },
  ];

  return (
    <div>
      <PageHero 
        title="Watch D.O.G.S.® 🐕" 
        subtitle="Dads Of Great Students — Supporting our school and kids" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-10 md:p-16 border border-gray-100 shadow-sm mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">What is Watch D.O.G.S.?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  WATCH D.O.G.S. is an innovative program being used by schools across America which helps them to be positively influenced by their father figures. The program is an initiative of the National Center for Fathering.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent rounded-full p-1 mt-1 flex-shrink-0">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium">Fathers, grandfathers, stepfathers, and uncles are all welcome!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent rounded-full p-1 mt-1 flex-shrink-0">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium">Spend a full or half day volunteering at Elsa England.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-tight">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">How to Participate</h2>
              <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-lg flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">Step 1: Background Check</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  All volunteers must have an approved background check on file with Round Rock ISD.
                </p>
                <a
                  href="https://roundrockisd.org/parents/volunteer-at-rrisd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 mt-auto"
                >
                  RRISD Background Check <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-accent shadow-lg flex flex-col items-center text-center">
                <Calendar className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">Step 2: Sign Up</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Once approved, select a date on our Watch D.O.G.S. calendar to spend time at the school.
                </p>
                <a
                  href="mailto:englandptapresident@gmail.com?subject=Watch DOGS Sign Up"
                  className="bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 mt-auto"
                >
                  Request Calendar Link <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Questions about Watch D.O.G.S.?</h3>
              <p className="text-blue-100 mb-6">Our coordinator is happy to help you get started with this rewarding program.</p>
              <a 
                href="mailto:englandptapresident@gmail.com?subject=Watch DOGS Inquiry" 
                className="text-accent hover:underline font-bold text-lg"
              >
                englandptapresident@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchDogs;
