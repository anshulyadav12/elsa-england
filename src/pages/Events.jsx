import React from 'react';
import PageHero from '../components/PageHero';
import EventCard from '../components/EventCard';
import { Mail } from 'lucide-react';

const Events = () => {
  const allEvents = [
    {
      title: 'Meet Your Neighbor Night',
      date: 'Feb 6, 2026',
      isoDate: '2026-02-06',
      description: 'Kick off the semester by meeting your neighbors and fellow England families in a relaxed community setting.',
    },
    {
      title: 'Spring Picnic',
      date: 'Mar 29, 2026',
      isoDate: '2026-03-29',
      description: 'An outdoor celebration for the whole England Elementary family. Food, games, and community fun.',
    },
    {
      title: 'PTA Meeting',
      date: 'Apr 9, 2026',
      isoDate: '2026-04-09',
      description: 'Stay informed about school initiatives and upcoming events. All parents and staff are welcome!',
    },
    {
      title: 'Movie Night',
      date: 'Apr 24, 2026',
      isoDate: '2026-04-24',
      description: 'Join us for a fun family movie night under the stars on the school playground! Free admission for all PTA families.',
    },
    {
      title: 'Spirit Night (Baskin Robbins & Happy Slice)',
      date: 'Aug 26, 2026',
      isoDate: '2026-08-26',
      description: 'A portion of sales from your orders at Baskin Robbins and Happy Slice will be donated to the Elsa England PTA.',
    },
    {
      title: 'Spooky Fun Run',
      date: 'Oct 2026',
      isoDate: '2026-10-01',
      description: 'Our annual Halloween-themed fundraiser. Students run laps while dressed in their favorite costumes!',
    },
  ];

  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = allEvents
    .filter(event => event.isoDate >= today)
    .sort((a, b) => a.isoDate.localeCompare(b.isoDate));
  
  const pastEvents = allEvents
    .filter(event => event.isoDate < today)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

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
            <div className="aspect-w-16 aspect-h-9 md:h-[700px] w-full">
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=englandptawebmaster%40gmail.com&src=4212b5f26fa808f9decdd5536956ae5fc9c24a505e124a830fd94a1e032370d0%40group.calendar.google.com&ctz=America%2FChicago&color=%231B3A6B&color=%23F5A623" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                loading="lazy"
                title="PTA and School Calendars"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm italic">
            * Events are subject to change. Please check back regularly for updates.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, i) => (
                <div key={i} className="flex flex-col">
                  <EventCard {...event} />
                  <div className="mt-4 px-6 flex items-center gap-2 text-sm text-gray-500">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Contact: <a href="mailto:englandptapresident@gmail.com" className="hover:text-primary underline">englandptapresident@gmail.com</a></span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic col-span-3 text-center">Check back soon for more upcoming events!</p>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-400 mb-4">Past Events</h2>
              <div className="w-20 h-1.5 bg-gray-200 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 opacity-75">
              {pastEvents.map((event, i) => (
                <div key={i} className="flex flex-col grayscale">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zeffy Ticketing Embed */}
      <section className="py-20 bg-gray-50">
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
