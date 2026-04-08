import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormCard = ({ icon, title, description, href, isExternal = true, comingSoon = false }) => {
  const CardContent = (
    <div className={`h-full flex flex-col p-6 bg-white rounded-xl shadow-md border ${
      comingSoon ? 'border-dashed border-gray-300 opacity-75 grayscale' : 'border-gray-100 hover:shadow-lg transition-shadow duration-300'
    }`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      {comingSoon ? (
        <button disabled className="bg-gray-100 text-gray-500 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" /> Coming Soon
        </button>
      ) : isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Open <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <Link
          to={href}
          className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-center"
        >
          Go to Page
        </Link>
      )}
    </div>
  );

  return <div className="h-full">{CardContent}</div>;
};

export default FormCard;
