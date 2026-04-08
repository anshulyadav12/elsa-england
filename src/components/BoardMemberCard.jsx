import React from 'react';
import { Mail } from 'lucide-react';

const BoardMemberCard = ({ role, name, email }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        {role}
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{name}</h3>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
      >
        <Mail className="w-5 h-5" />
        <span className="truncate">{email}</span>
      </a>
    </div>
  );
};

export default BoardMemberCard;
