import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Map as MapIcon, Info, Phone, ExternalLink } from 'lucide-react';

const Map = () => {
  const [activeCampus, setActiveCampus] = useState(0);

  const campuses = [
    {
      title: "Campus – 1 (Main)",
      subtitle: "Baddowal, Ferozepur Road",
      address: "Baddowal, Ferozepur Road, Ludhiana – 142021, Punjab, India",
      phone: "0161-2888500",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.834936506468!2d75.7542959!3d30.8684068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a818c8e8556c3%3A0x10d8f9b354b1565d!2sPCTE%20Group%20of%20Institutes!5e0!3m2!1sen!2sin!4v1700000000000",
      externalLink: "https://maps.app.goo.gl/YourCampus1Link"
    },
    {
      title: "Campus – 2",
      subtitle: "Near Baddowal Cantt",
      address: "Near Baddowal Cantt, Ferozepur Road, Ludhiana – 142021",
      phone: "0161-2888522",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.958319345229!2d75.748342!3d30.8665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8198f1680001%3A0x464205e83ec46141!2sPCTE%20Campus%202!5e0!3m2!1sen!2sin!4v1700000000001",
      externalLink: "https://maps.app.goo.gl/YourCampus2Link"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Dynamic Header */}
      <section className="bg-black py-20 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-4"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <MapIcon className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight uppercase">Location <span className="text-primary">Map</span></h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
            Navigate your way to our world-class campuses in Ludhiana.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">

          {/* Campus Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {campuses.map((campus, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCampus(idx)}
                className={`flex flex-col items-center px-8 py-5 rounded-2xl transition-all duration-300 border-2 ${activeCampus === idx
                  ? 'bg-white border-primary shadow-xl scale-105'
                  : 'bg-gray-50 border-transparent hover:bg-gray-100 text-gray-500'
                  }`}
              >
                <MapPin className={`w-6 h-6 mb-2 ${activeCampus === idx ? 'text-primary' : 'text-gray-400'}`} />
                <span className={`font-bold text-lg ${activeCampus === idx ? 'text-secondary' : 'text-gray-500'}`}>{campus.title}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Ferozepur Road</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Box: Map Container */}
            <motion.div
              key={activeCampus}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-[300px] sm:h-[400px] lg:h-auto"
            >
              <iframe
                title={campuses[activeCampus].title}
                src={campuses[activeCampus].mapUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Right Box: Info & Actions */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCampus}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full flex flex-col"
                >
                  <div className="space-y-6 flex-grow">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                      <Info size={12} />
                      Arrival Information
                    </div>

                    <h3 className="text-3xl font-extrabold text-secondary leading-tight">
                      {campuses[activeCampus].title}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="mt-1"><MapPin className="text-primary w-5 h-5" /></div>
                        <p className="text-gray-600 font-medium leading-relaxed">{campuses[activeCampus].address}</p>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-1"><Phone className="text-primary w-5 h-5" /></div>
                        <p className="text-gray-600 font-bold tracking-wider">{campuses[activeCampus].phone}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        "Our campus is strategically located on the Ludhiana-Ferozepur Highway, making it easily accessible for students from all over Punjab."
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 space-y-4">
                    <a
                      href={campuses[activeCampus].externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-secondary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all shadow-md group"
                    >
                      <Navigation size={20} className="group-hover:animate-bounce" />
                      Get Live Directions
                    </a>

                    <button className="w-full py-4 text-secondary font-bold hover:text-primary flex items-center justify-center gap-2 transition-colors border-2 border-transparent hover:border-primary/20 rounded-2xl">
                      <ExternalLink size={16} />
                      Official Route Map
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Transportation Footer */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-secondary mb-4">Reaching PCTE</h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                We provide dedicated transport facilities for students and faculty across Ludhiana and nearby towns. The campus is also well-connected via regular bus services from the main Ludhiana Bus Stand.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1544620347-c4fd4a3d5957' : (i === 2 ? '1570125909232-eb263c188f7e' : '1591033594798-332279057ad3')}?w=100&h=100&fit=crop`} alt="Transport" />
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase">Safe Campus Transport</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Map;


