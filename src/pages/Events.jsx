import React from 'react';
import PageHero from '../components/PageHero';
import EventCard from '../components/EventCard';
import { Mail } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Spring Picnic',
      date: 'May 2025',
      description: 'An end-of-year outdoor celebration for the whole England Elementary family. Food, games, and community fun.',
    },
    {
      title: 'Meet Your Neighbor Night',
      date: 'August 2025',
      description: 'Kick off the school year by meeting your neighbors and fellow England families in a relaxed community setting.',
    },
    {
      title: 'Spooky Fun Run',
      date: 'October 2025',
      description: 'Our Halloween-themed school run fundraiser. Students get pledges and run laps — all while dressed in costumes!',
    },
  ];

  return (
    <div>
      <PageHero 
        title="Events & Calendar" 
        subtitle="Stay connected with everything happening at England Elementary" 
      />

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">PTA Calendar</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
            {/* Google Calendar Embed Container */}
            <div className="aspect-w-16 aspect-h-9 md:h-[600px] w-full">
              {/* Replace src with your public Google Calendar embed URL */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FChicago" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                loading="lazy"
                title="PTA Calendar"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm italic">
            * Events are subject to change. Please check back regularly for updates.
          </p>
        </div>
      </section>

      {/* Signature Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Signature Events</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {events.map((event, i) => (
              <div key={i} className="flex flex-col">
                <EventCard {...event} />
                <div className="mt-4 px-6 flex items-center gap-2 text-sm text-gray-500">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>Contact: <a href="mailto:englandptapresident@gmail.com" className="hover:text-primary underline">englandptapresident@gmail.com</a></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zeffy Ticketing Embed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Purchase Tickets & Register</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="w-full md:h-[900px] h-[600px]">
              <iframe 
                src="https://www.zeffy.com/en-US/ticketing/823d1459-17e1-44cc-b5b4-ead0c4fe182d" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowtransparency="true" 
                loading="lazy"
                title="Event Tickets"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6 font-medium">
            Having trouble? <a href="https://www.zeffy.com/en-US/ticketing/823d1459-17e1-44cc-b5b4-ead0c4fe182d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Zeffy directly</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;
