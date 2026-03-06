import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Globe, ExternalLink } from 'lucide-react';

const LifeAtPCTE = () => {

  const features = [
    {
      title: "Glorious Stars at PCTE",
      description: "Celebrating our brightest achievers who have made us proud in academics, sports, and technical competitions nationwide.",
      image: "/Pg-Courses.jpg",
      link: "/life/stars",
      icon: <Trophy className="w-5 h-5 text-amber-500" />
    },
    {
      title: "British Parliamentary Debate",
      description: "Host to one of India's biggest Inter-varsity British Parliamentary debating championships, fostering critical thinking.",
      image: "/CSE-scaled.jpg",
      link: "/life/debate",
      icon: <Users className="w-5 h-5 text-red-600" />
    },
    {
      title: "Teaching Abroad",
      description: "Connecting global talent with local opportunities through our international teaching programs and faculty exchanges.",
      image: "/UG-courses.jpg",
      link: "/life/teaching-abroad",
      icon: <Globe className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section - Matches the "rest pages" theme */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          >
            Life at PCTE
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumb Section - Matches the "rest pages" theme */}
      <nav className="border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-400 font-medium">Life at PCTE</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">

        {/* Intro Section with Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-[#880000] text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A Vibrant Campus Where <br />
              <span className="text-black">Dreams Take Flight</span>
            </h2>
            <div className="w-20 h-1 bg-[#880000] mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Life at PCTE is a unique blend of high-energy academics and rich extracurricular experiences. We pride ourselves on creating an environment where students from 40+ countries cooperate, compete, and grow together.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From the intellectual challenges of the British Parliamentary Debate to the celebratory moments of our Glorious Stars, every day at PCTE offers something new to learn and experience.
            </p>
            <Link
              to="/photo-tour"
              className="inline-flex items-center px-6 py-3 bg-[#880000] text-white font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:bg-black transition-all group"
            >
              Explore Photo Tour <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-100 -z-10 rounded-2xl transition-transform group-hover:scale-105 duration-500"></div>
              <img
                src="/life_at_pcte_hero.jpg"
                alt="PCTE Campus Life"
                className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Categories Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-[#880000] text-2xl font-bold uppercase tracking-widest mb-4">
              Explore Our Highlights
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              "Experience the multifaceted growth opportunities that define the PCTE legacy."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#880000] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-[#880000] font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all"
                  >
                    View Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Stats Banner */}
        <section className="bg-gray-50 rounded-2xl p-10 border border-gray-100 flex flex-col md:flex-row justify-around items-center gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-[#880000] mb-1">40+</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Nationalities</div>
          </div>
          <div className="w-[1px] h-12 bg-gray-200 hidden md:block"></div>
          <div>
            <div className="text-4xl font-black text-[#880000] mb-1">15+</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Annual Massive Events</div>
          </div>
          <div className="w-[1px] h-12 bg-gray-200 hidden md:block"></div>
          <div>
            <div className="text-4xl font-black text-[#880000] mb-1">500+</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Industry Tie-ups</div>
          </div>
        </section>

      </main>

      {/* CTA Section - Consistent with Home/Admission */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ready to experience campus life?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Join the vibrant community at PCTE and start your journey towards a global career.
            </p>
          </div>
          <a
            href="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#880000] text-white font-bold uppercase tracking-widest rounded shadow-lg hover:bg-black transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LifeAtPCTE;
