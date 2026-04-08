import React from 'react';

const VolunteerCard = ({ icon, title, timeCommitment, description, contactEmail, contactSubject }) => {
  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-accent hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <span className="inline-block bg-blue-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
        {timeCommitment}
      </span>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <a
        href={mailtoLink}
        className="inline-block bg-accent hover:bg-opacity-90 text-primary font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-center w-full"
      >
        Sign Up
      </a>
    </div>
  );
};

export default VolunteerCard;
