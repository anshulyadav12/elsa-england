import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4 py-12">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold text-primary">{item.question}</span>
            <ChevronDown 
              className={`w-6 h-6 text-accent transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 p-4 border-t border-gray-200' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
