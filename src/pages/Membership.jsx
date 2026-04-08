import React from 'react';
import PageHero from '../components/PageHero';
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const benefits = [
    'Support student enrichment programs',
    'Vote on how PTA funds are spent',
    'Stay informed with member updates',
    'Build lasting connections with the England community',
    'Help create a better school for every child',
  ];

  return (
    <div>
      <PageHero 
        title="Join the PTA" 
        subtitle="Be part of something bigger and make a direct impact at Elsa England" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Why Your Membership Matters</h2>
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transform hover:-translate-x-1 transition-transform">
                    <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to become a member?</h2>
                <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                  Join hundreds of other Elsa England families in supporting our school. Every membership counts!
                </p>
                <div className="bg-white/10 p-6 rounded-2xl mb-10 backdrop-blur-sm border border-white/20">
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Member Benefits</p>
                  <p className="text-white font-medium">Voting Rights • Event Access • School Support</p>
                </div>
                <a
                  href="https://txpta.my.salesforce-sites.com/JoinPTA?_gl=1*sqclk6*_ga*MTg2MTMzMDk1MS4xNzYxMTQ3NTM1*_ga_KF2J8CWMTX*czE3NjExNDc1MzUkbzEkZzAkdDE3NjExNDc1MzUkajYwJGwwJGgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold py-4 px-10 rounded-xl text-lg hover:bg-opacity-90 transition-all shadow-lg w-full justify-center"
                >
                  Join Now via Texas PTA <ExternalLink className="w-5 h-5" />
                </a>
                <p className="mt-8 text-sm text-blue-200">
                  Questions about membership? Email <a href="mailto:englandptapresident@gmail.com" className="underline hover:text-white">englandptapresident@gmail.com</a>
                </p>
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-10 -ml-16 -mt-16 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent opacity-10 -mr-16 -mb-16 rounded-full"></div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Not sure yet?</h3>
            <Link
              to="/why-join"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent underline transition-colors text-lg"
            >
              Learn why the PTA matters <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
