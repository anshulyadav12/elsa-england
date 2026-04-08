import React from 'react';
import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import { Link } from 'react-router-dom';
import { BookOpen, Vote, Users, Bell, ArrowRight } from 'lucide-react';

const WhyJoin = () => {
  const stats = [
    { value: '1000+', label: 'Kids at England Elementary' },
    { value: '10+', label: 'PTA-funded programs and events' },
    { value: '100%', label: 'Of funds stay at our school' },
  ];

  const values = [
    {
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      title: 'Support Student Programs',
      description: 'Your membership directly funds Math Pentathlon, Geography Superstars, Reflections, Spelling Bee, and more.',
    },
    {
      icon: <Vote className="w-10 h-10 text-accent" />,
      title: 'Have a Voice',
      description: 'PTA members vote on how funds are spent and have a say in school events and initiatives.',
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: 'Build Community',
      description: 'Connect with other England families, teachers, and staff at events throughout the year.',
    },
    {
      icon: <Bell className="w-10 h-10 text-accent" />,
      title: 'Stay Informed',
      description: 'Members get priority updates on school news, events, and important announcements.',
    },
  ];

  const faqs = [
    {
      question: "Do I have to volunteer if I join?",
      answer: "Not at all! Membership alone is a huge help. Volunteering is always welcome but never required."
    },
    {
      question: "How much does membership cost?",
      answer: "Visit our membership page or store for current pricing. Every dollar stays at England Elementary."
    },
    {
      question: "Can teachers join?",
      answer: "Yes! Teachers and staff are welcome and valued PTA members."
    },
    {
      question: "Is the PTA affiliated with the school district?",
      answer: "England Elementary PTA is an independent non-profit. We work closely with the school but operate separately from Round Rock ISD, under the Texas National PTA."
    },
    {
      question: "When can I join?",
      answer: "You can join anytime during the school year!"
    }
  ];

  return (
    <div>
      <PageHero 
        title="Why Join the PTA?" 
        subtitle="Your membership makes a real difference in the lives of our students" 
      />

      {/* Stats Strip */}
      <section className="py-12 bg-white -mt-8 relative z-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-accent text-center transform hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">What Your Membership Supports</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Ready to Join?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/membership"
              className="bg-accent text-primary font-extrabold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Join Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/volunteer"
              className="bg-white border-2 border-primary text-primary font-bold py-4 px-10 rounded-xl text-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
            >
              See Volunteer Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoin;
