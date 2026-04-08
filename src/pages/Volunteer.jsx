import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import VolunteerCard from '../components/VolunteerCard';
import { Mail, Send, CheckSquare, Clock, Users } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: 'K',
    interests: [],
    availability: [],
    comments: ''
  });

  const opportunities = [
    {
      icon: '🎉',
      title: 'Event Volunteer',
      timeCommitment: '2–4 hrs/event',
      description: 'Help set up, run, and clean up at PTA events like the Spring Picnic, Fun Run, and Meet Your Neighbor Night.',
      contactEmail: 'ptaenglandvc@outlook.com',
      contactSubject: 'Event Volunteer Sign Up',
    },
    {
      icon: '🏠',
      title: 'Homeroom Parent',
      timeCommitment: 'Ongoing',
      description: "Be the communication bridge between your child's teacher and classroom families. Coordinate class parties.",
      contactEmail: 'elsaenglandptavp@gmail.com',
      contactSubject: 'Homeroom Parent Interest',
    },
    {
      icon: '📦',
      title: 'School Supplies Helper',
      timeCommitment: '2–3 hrs',
      description: 'Help sort and distribute pre-packaged school supply kits at the start of the school year.',
      contactEmail: 'ptaenglandvc@outlook.com',
      contactSubject: 'School Supplies Volunteer',
    },
    {
      icon: '🎨',
      title: 'Program Support',
      timeCommitment: 'Varies',
      description: 'Assist with Math Pentathlon, Geography Superstars, Reflections, and Spelling Bee coordinators.',
      contactEmail: 'ptaenglandvc@outlook.com',
      contactSubject: 'Program Support Volunteer',
    },
    {
      icon: '🧹',
      title: 'Setup & Logistics',
      timeCommitment: '1–3 hrs',
      description: 'Help with room setup, decorating, and logistics for various school and PTA events.',
      contactEmail: 'ptaenglandvc@outlook.com',
      contactSubject: 'Setup Crew Volunteer',
    },
    {
      icon: '📋',
      title: 'PTA Committee Member',
      timeCommitment: 'Monthly+',
      description: 'Join a standing committee (fundraising, programs, communications) and shape PTA decisions.',
      contactEmail: 'englandptapresident@gmail.com',
      contactSubject: 'PTA Committee Interest',
    },
  ];

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Volunteer Interest: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Child's Grade: ${formData.grade}\n` +
      `Interests: ${formData.interests.join(', ')}\n` +
      `Availability: ${formData.availability.join(', ')}\n` +
      `Comments: ${formData.comments}`
    );
    window.location.href = `mailto:ptaenglandvc@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <PageHero 
        title="Volunteer With Us 🤝" 
        subtitle="There's a place for everyone — and every hour counts" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Every Hand Makes a Difference</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From a one-hour task to a full committee role, our volunteers are the heartbeat of the England PTA. No experience needed — just a willingness to help our students flourish!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {opportunities.map((opt, i) => (
              <VolunteerCard key={i} {...opt} />
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-20">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary p-12 text-white flex flex-col justify-center">
                <Users className="w-16 h-16 text-accent mb-6" />
                <h2 className="text-3xl font-bold mb-6">Interested in Being a Homeroom Parent?</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Homeroom parents play a vital role in connecting teachers with classroom families. You'll help coordinate holiday parties, teacher appreciation week gifts, and communicate important PTA news to your class.
                </p>
                <div className="flex items-center gap-2 font-bold text-accent">
                  <Clock className="w-5 h-5" />
                  <span>Commitment: School Year (Flexible)</span>
                </div>
              </div>
              <div className="p-12 bg-white">
                <h3 className="text-2xl font-bold text-primary mb-8">General Interest Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Child's Grade</label>
                    <select 
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    >
                      <option>K</option>
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                      <option>5th</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">Areas of Interest</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Event Volunteer', 'Homeroom Parent', 'School Supplies', 'Program Support', 'Setup Crew', 'Committee Member'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value={opt} 
                            onChange={(e) => handleCheckboxChange(e, 'interests')}
                            className="rounded text-primary focus:ring-primary h-4 w-4" 
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">Availability</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Weekday Mornings', 'Weekday Afternoons', 'Evenings', 'Weekends'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value={opt} 
                            onChange={(e) => handleCheckboxChange(e, 'availability')}
                            className="rounded text-primary focus:ring-primary h-4 w-4" 
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Comments</label>
                    <textarea 
                      rows="3"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      value={formData.comments}
                      onChange={(e) => setFormData({...formData, comments: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-accent text-primary font-extrabold py-4 px-8 rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    Send My Interest <Send className="w-5 h-5" />
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

export default Volunteer;
