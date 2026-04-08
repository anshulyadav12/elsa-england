import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ icon, title, description, link, contactEmail, contactSubject }) => {
  const isInternalLink = link && link.startsWith('/');
  const mailtoLink = contactEmail ? `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject || '')}` : null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      {isInternalLink ? (
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors duration-200"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      ) : mailtoLink ? (
        <a
          href={mailtoLink}
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors duration-200"
        >
          Contact Coordinator <Mail className="w-4 h-4" />
        </a>
      ) : null}
    </div>
  );
};

export default ProgramCard;
