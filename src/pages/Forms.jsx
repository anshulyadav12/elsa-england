import React from 'react';
import PageHero from '../components/PageHero';
import FormCard from '../components/FormCard';
import { Mail } from 'lucide-react';

const Forms = () => {
  const parentResources = [
    {
      icon: '📖',
      title: 'Parent Guidebook 2025–2026',
      description: 'Everything families need to know about England Elementary, from school policies to student life.',
      href: 'https://docs.google.com/document/d/1yOWQ47_Lb1SnSkgflv7lQjQsXpXzMDK2XTIF-tBZgBo/edit?tab=t.0',
    },
    {
      icon: '📐',
      title: 'School Supply List',
      description: 'Grade-level supply lists for the 2025–2026 school year. Available for all grade levels K–5.',
      href: 'https://docs.google.com/spreadsheets/d/1TJqe76vqgZHevuNoxFlUhdhP7z2yKEddIC82eVN4ixU/edit?usp=sharing',
    },
    {
      icon: '📅',
      title: 'Report an Absence',
      description: 'The official Round Rock ISD form to submit an absence for your child.',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScNJ9EUCoDYo2EBlscwVcYtjnQ7xEHVeLFi9AmpezocEaaTfw/viewform',
    },
    {
      icon: '🚗',
      title: 'Arrival & Dismissal Info',
      description: 'Important information on car line procedures, drop-off/pick-up times, and campus maps.',
      href: 'https://drive.google.com/drive/folders/1CJ6wu0a7EHYUPtHVwfuAQq3QRMUuT47B',
    },
    {
      icon: '🍎',
      title: 'Staff Favorites Spreadsheet',
      description: 'A guide for teacher gifts and classroom wishlists for the 2025-26 school year.',
      href: '#', // Placeholder or actual link if found
      comingSoon: true,
    },
    {
      icon: '🍕',
      title: 'Food Menus',
      description: 'View school lunch and breakfast menus provided by Round Rock ISD Food Services.',
      href: 'https://foodservices.roundrockisd.org/',
    },
    {
      icon: '🤝',
      title: 'Volunteer Interest Form',
      description: 'Sign up to volunteer with the PTA and help support our school community.',
      href: '/volunteer',
      isExternal: false,
    },
  ];

  const boardResources = [
    {
      icon: '💰',
      title: 'Expense Reimbursement',
      description: 'Submit receipts for PTA-approved expenses. Required for all board and committee spending.',
      href: 'mailto:englandptatreasurer@gmail.com',
      comingSoon: true,
    },
    {
      icon: '📝',
      title: 'Event Proposal Form',
      description: 'Have a new idea for a PTA event or program? Submit your proposal here for board review.',
      href: 'mailto:englandptapresident@gmail.com',
      comingSoon: true,
    },
    {
      icon: '🧾',
      title: 'Donation Receipt Request',
      description: 'Request a tax-exempt receipt for your generous donation to the Elsa England PTA.',
      href: 'mailto:englandptatreasurer@gmail.com',
      comingSoon: true,
    },
  ];

  return (
    <div>
      <PageHero 
        title="Forms & Resources 📋" 
        subtitle="Everything you need to navigate the school year in one place" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">For Parents</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {parentResources.map((resource, i) => (
              <FormCard key={i} {...resource} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">For PTA Board & Volunteers</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 italic">Coming Soon for the 2025–2026 school year</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {boardResources.map((resource, i) => (
              <FormCard key={i} {...resource} />
            ))}
          </div>

          <div className="bg-primary text-white p-12 rounded-2xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Don't see what you need?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              If you're looking for a specific form or resource not listed here, please reach out and we'll help you find it.
            </p>
            <a 
              href="mailto:englandptapresident@gmail.com" 
              className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" /> Contact President
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forms;
