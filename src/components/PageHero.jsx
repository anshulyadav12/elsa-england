import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-[#1B3A6B] to-[#254E8B] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;
