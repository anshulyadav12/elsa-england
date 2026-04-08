import React from 'react';
import PageHero from '../../components/PageHero';
import { ShoppingBag, Camera, HelpCircle, Mail, ExternalLink } from 'lucide-react';

const Yearbook = () => {
  return (
    <div>
      <PageHero 
        title="England Elementary Yearbook 📸" 
        subtitle="Capturing memories that last a lifetime" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <ShoppingBag className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Order Your Yearbook</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The yearbook is a cherished keepsake packed with class photos, event highlights, and student memories. Order yours before the deadline!
              </p>
              <div className="bg-white p-4 rounded-xl border border-blue-100 mb-8 w-full">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Order Deadline</p>
                <p className="text-gray-500 italic">Check back for 2025–2026 ordering deadlines.</p>
              </div>
              <a
                href="https://jostensyearbooks.com/?REF=A01145889"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 mt-auto"
              >
                Order in the Store <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <Camera className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Contribute Photos</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Help us capture the year! Submit photos from school events to be considered for inclusion in the 2025–2026 yearbook.
              </p>
              <div className="bg-white p-4 rounded-xl border border-blue-100 mb-8 w-full">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">What to Submit</p>
                <p className="text-gray-500">School events, spirit days, group photos.</p>
              </div>
              <a
                href="mailto:elsaenglandyb@gmail.com?subject=Yearbook Photo Submission"
                className="bg-primary text-white font-extrabold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 mt-auto"
              >
                Submit Photos <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-accent" /> Yearbook FAQ
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-2">When are yearbooks distributed?</h3>
                <p className="text-gray-600 leading-relaxed">Yearbooks are typically distributed to students in late April or early May. We'll announce the exact distribution date as the time approaches.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-2">What's included in the yearbook?</h3>
                <p className="text-gray-600 leading-relaxed">The yearbook includes class photos, event highlights, staff and student spotlights, and memories from throughout the entire school year.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-2">How do I order?</h3>
                <p className="text-gray-600 leading-relaxed">Orders are placed through the Jostens website. A direct link will be provided here when the 2025–2026 ordering window opens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yearbook;
