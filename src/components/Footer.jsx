import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🏫</span> Elsa England PTA
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Supporting England Elementary students and staff. Together we help every child flourish through community, enrichment, and advocacy.
            </p>
            <a 
              href="https://england.roundrockisd.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
            >
              School Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent uppercase tracking-wider">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/volunteer" className="hover:text-accent transition-colors">Volunteer</Link></li>
              <li><Link to="/store" className="hover:text-accent transition-colors">Store</Link></li>
              <li><Link to="/sponsors" className="hover:text-accent transition-colors">Sponsors</Link></li>
              <li><Link to="/forms" className="hover:text-accent transition-colors">Forms</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">President (Vishal Patel)</p>
                  <a href="mailto:englandptapresident@gmail.com" className="hover:text-accent text-sm">englandptapresident@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">VP (Anshul Yadav)</p>
                  <a href="mailto:elsaenglandptavp@gmail.com" className="hover:text-accent text-sm">elsaenglandptavp@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">8801 Pearson Ranch Road, Austin, TX 78717</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">512-704-1200</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center text-xs text-blue-200">
          <p className="mb-2">
            © 2025–2026 Elsa England PTA. Independent non-profit supporting England Elementary School.
          </p>
          <p>
            8801 Pearson Ranch Road, Austin, TX 78717 | 512-704-1200
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
