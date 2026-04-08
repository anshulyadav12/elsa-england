import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ title, date, description, link = '/events' }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-accent hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center gap-2 text-primary font-bold mb-3 uppercase text-sm tracking-widest">
        <Calendar className="w-4 h-4 text-accent" />
        {date}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors duration-200"
      >
        Learn More <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default EventCard;
