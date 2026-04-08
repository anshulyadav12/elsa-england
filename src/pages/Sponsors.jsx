import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SponsorTierSection from '../components/SponsorTierSection';
import { Mail, Send, Award, Building as Business } from 'lucide-react';

const Sponsors = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    tier: 'Gold',
    message: ''
  });

  const platinumBenefits = [
    'Prime logo placement on website homepage',
    'Exclusive "Sponsor of the Month" feature',
    'Logo on all event volunteer shirts',
    'Largest banner display at all school events',
    'Recognition in all PTA communications',
  ];

  const goldBenefits = [
    'Logo on website homepage',
    'Recognition at all major PTA events',
    'Full-page feature in PTA digital newsletter',
    'Prominent banner display at school events',
  ];

  const silverBenefits = [
    'Logo on sponsors page',
    'Recognition at select major events',
    'Featured in monthly PTA newsletter',
    'Social media recognition posts',
  ];

  const bronzeBenefits = [
    'Business name listed on sponsors page',
    'Recognition during various school events',
    'Inclusion in end-of-year donor list',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`PTA Sponsorship Inquiry: ${formData.business}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Business: ${formData.business}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Tier Interest: ${formData.tier}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:englandptapresident@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <PageHero 
        title="Our Community Sponsors" 
        subtitle="Local businesses making a difference for England Elementary students" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary text-white p-10 md:p-16 rounded-3xl shadow-xl mb-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Thank You to Our Partners</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed italic">
              "Our sponsors make it possible to fund programs, events, and resources for every England Elementary student. We are deeply grateful for their generous support of our school community."
            </p>
          </div>

          <SponsorTierSection 
            tier="Platinum" 
            benefits={platinumBenefits} 
            placeholderCount={1} 
          />

          <SponsorTierSection 
            tier="Gold" 
            benefits={goldBenefits} 
            placeholderCount={2} 
          />

          <SponsorTierSection 
            tier="Silver" 
            benefits={silverBenefits} 
            placeholderCount={3} 
          />

          <SponsorTierSection 
            tier="Bronze" 
            benefits={bronzeBenefits} 
            placeholderCount={4} 
          />

          {/* Become a Sponsor Section */}
          <div className="mt-32 bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Award className="w-10 h-10 text-accent" /> Partner With Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Sponsoring the England Elementary PTA is a great way to support local education while getting your business in front of hundreds of engaged families in the Pearson Ranch and Austin Hill Country area.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Business className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium">Reach 1000+ local kids and their families weekly.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Business className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium">Show your support for Austin education.</p>
                  </div>
                </div>
              </div>

              <div className="p-12 md:p-16 bg-white">
                <h3 className="text-2xl font-bold text-primary mb-8">Sponsorship Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={formData.business}
                        onChange={(e) => setFormData({...formData, business: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tier Interest</label>
                    <select 
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      value={formData.tier}
                      onChange={(e) => setFormData({...formData, tier: e.target.value})}
                    >
                      <option>Gold</option>
                      <option>Silver</option>
                      <option>Bronze</option>
                      <option>Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="3"
                      placeholder="Tell us about your business or ask any questions..."
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-accent text-primary font-extrabold py-4 px-8 rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Sponsorship Inquiry <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
