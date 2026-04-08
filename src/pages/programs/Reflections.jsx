import React from 'react';
import PageHero from '../../components/PageHero';
import { Palette, Camera, Music, Video, Book, User, Mail, ExternalLink } from 'lucide-react';

const Reflections = () => {
  const categories = [
    { name: 'Dance Choreography', icon: <User className="w-6 h-6" /> },
    { name: 'Film Production', icon: <Video className="w-6 h-6" /> },
    { name: 'Literature', icon: <Book className="w-6 h-6" /> },
    { name: 'Music Composition', icon: <Music className="w-6 h-6" /> },
    { name: 'Photography', icon: <Camera className="w-6 h-6" /> },
    { name: 'Visual Arts', icon: <Palette className="w-6 h-6" /> },
  ];

  return (
    <div>
      <PageHero 
        title="Reflections Arts Program 🎨" 
        subtitle="Unleash your creative potential and express your unique vision" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Program Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reflections is a National PTA arts recognition program that helps students explore their thoughts, feelings, and ideas through various artistic mediums. For over 50 years, this program has encouraged millions of students to create original works of art based on a student-selected theme.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Students in Pre-K through Grade 12 are invited to submit their works in any of the six categories listed. The program fosters artistic literacy and gives students a platform to showcase their talents at local, state, and national levels.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Artistic Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
                    <div className="text-accent">{cat.icon}</div>
                    <span className="font-semibold text-gray-700 text-sm">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary text-white p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden mb-20">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Call for Entries</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                We are now accepting entries for the current school year! Students are encouraged to create original works that reflect this year's theme.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:englandpta.reflections@gmail.com" 
                  className="bg-accent text-primary font-extrabold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Contact Coordinator
                </a>
                <a 
                  href="https://www.txpta.org/reflections" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 font-bold py-4 px-10 rounded-xl text-lg hover:bg-white/20 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  Texas PTA Rules <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 -mr-16 -mt-16 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent opacity-10 -ml-16 -mb-16 rounded-full"></div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Questions?</h3>
            <p className="text-gray-600 mb-6">Please reach out to our Reflections Chair, <strong>Preeti Patel</strong>, for more information on entry requirements and deadlines.</p>
            <a href="mailto:englandpta.reflections@gmail.com" className="text-primary font-bold hover:text-accent underline transition-colors">
              englandpta.reflections@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reflections;
