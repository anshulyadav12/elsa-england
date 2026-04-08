import React from 'react';
import { CheckCircle } from 'lucide-react';

const SponsorTierSection = ({ tier, benefits, placeholderCount }) => {
  const tierColors = {
    Gold: 'bg-accent text-primary',
    Silver: 'bg-gray-200 text-gray-700',
    Bronze: 'bg-orange-200 text-orange-800',
  };

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <h2 className={`text-2xl font-bold px-4 py-1 rounded-full ${tierColors[tier]}`}>
          {tier === 'Gold' ? '🥇' : tier === 'Silver' ? '🥈' : '🥉'} {tier} Sponsors
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-4 text-primary">Sponsorship Benefits:</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[...Array(placeholderCount)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center aspect-square"
            >
              <p className="text-gray-400 font-medium leading-tight">
                Your Business Here<br />
                <span className="text-sm">({tier} Sponsor)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorTierSection;
