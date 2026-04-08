import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import BoardMemberCard from '../components/BoardMemberCard';
import { Calendar, BookOpen, Users, ShoppingBag, ExternalLink } from 'lucide-react';
import { fetchUpcomingEvents } from '../services/calendar';

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const quickLinks = [
    { name: 'Events', icon: <Calendar className="w-8 h-8" />, href: '/events' },
    { name: 'Programs', icon: <BookOpen className="w-8 h-8" />, href: '/programs' },
    { name: 'Volunteer', icon: <Users className="w-8 h-8" />, href: '/volunteer' },
    { name: 'Store', icon: <ShoppingBag className="w-8 h-8" />, href: '/store' },
  ];

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchUpcomingEvents(3);
      setUpcomingEvents(events);
      setLoading(false);
    };
    loadEvents();
  }, []);

  const boardMembers = [
    { role: 'President', name: 'Vishal Patel', email: 'englandptapresident@gmail.com' },
    { role: 'Vice President', name: 'Anshul Yadav', email: 'elsaenglandptavp@gmail.com' },
    { role: 'Treasurer', name: 'Ruby Sahoo', email: 'englandptatreasurer@gmail.com' },
    { role: 'Volunteer Coordinator', name: 'Ariana Arce', email: 'ptaenglandvc@outlook.com' },
    { role: 'Webmaster', name: 'Sweta Patel', email: 'englandptawebmaster@gmail.com' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B3A6B] to-[#254E8B] text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="text-accent">Elsa England PTA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Together We Help Every Child Flourish. Join us in supporting our students, teachers, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/membership"
                className="bg-accent hover:bg-opacity-90 text-primary font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg text-center"
              >
                Join the PTA
              </Link>
              <Link
                to="/get-involved"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl text-lg transition-all text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Building a Thriving Community</h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            "Welcome to the Elsa England PTA website, your gateway to active involvement in our school community! The Elsa England Parent-Teacher Association (PTA) is a dedicated group of parents, teachers, and staff committed to enhancing the educational experience of every child. We collaborate closely with school administration to organize events, fundraisers, and programs that support our students' academic success, well-being, and overall development. Join us in making a difference – together, we can create a thriving environment where every child can flourish!"
          </p>
        </div>
      </section>

      {/* Volunteer CTA Strip */}
      <section className="bg-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-primary text-xl md:text-2xl font-bold text-center md:text-left">
            Want to get involved? There's a place for everyone.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/volunteer"
              className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all text-center"
            >
              See Volunteer Opportunities
            </Link>
            <Link
              to="/why-join"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all text-center"
            >
              Why Join the PTA?
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="bg-primary hover:bg-[#254E8B] text-white p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all transform hover:-translate-y-2 shadow-lg group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="font-bold text-lg">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>
            </div>
            <Link to="/events" className="hidden md:block text-primary font-bold hover:text-accent underline transition-colors">
              View Full Calendar
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl shadow-md border-l-8 border-accent/20"></div>
              ))
            ) : upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, i) => (
                <EventCard key={i} {...event} />
              ))
            ) : (
              <p className="text-gray-500 italic col-span-3">Check back soon for more upcoming events!</p>
            )}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/events"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Zeffy Store Banner */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Shop PTA Spirit Wear & More</h2>
          <p className="text-xl text-primary font-medium mb-10 opacity-80">
            Support our school while showing your England pride!
          </p>
          <Link
            to="/store"
            className="bg-primary text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all shadow-xl inline-flex items-center gap-2"
          >
            Visit the Store <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Sponsors Section Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Community Sponsors</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-16"></div>

          <div className="space-y-12 mb-16">
            <div>
              <p className="text-gray-400 font-bold uppercase tracking-widest mb-6 text-sm">Gold Tier</p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="w-48 h-24 bg-white border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300 font-medium">Your Business</div>
                <div className="w-48 h-24 bg-white border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300 font-medium">Your Business</div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 font-bold uppercase tracking-widest mb-6 text-sm">Silver Tier</p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="w-40 h-20 bg-white border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300 font-medium">Your Business</div>
                <div className="w-40 h-20 bg-white border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300 font-medium">Your Business</div>
                <div className="w-40 h-20 bg-white border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300 font-medium">Your Business</div>
              </div>
            </div>
          </div>

          <Link
            to="/sponsors"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent underline transition-colors"
          >
            View All Sponsors & Become One <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Board Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Your PTA Board</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {boardMembers.map((member, i) => (
              <BoardMemberCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
