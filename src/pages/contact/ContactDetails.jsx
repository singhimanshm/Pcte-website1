import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Headphones, GraduationCap } from 'lucide-react';

const ContactDetails = () => {
  const departments = [
    {
      category: "Admissions & Inquiries",
      icon: <GraduationCap className="text-primary" />,
      contacts: [
        { label: "Admissions Office", phone: "0161 - 2888500", email: "admissions@pcte.edu.in" },
        { label: "General Information", phone: "0161 - 2888501", email: "info@pcte.edu.in" },
      ]
    },
    {
      category: "Support & Administration",
      icon: <Headphones className="text-primary" />,
      contacts: [
        { label: "Student Support", phone: "Ext. 505", email: "support@pcte.edu.in" },
        { label: "Registrar Office", phone: "Ext. 510", email: "registrar@pcte.edu.in" },
      ]
    }
  ];

  const campuses = [
    {
      name: "Campus – 1 (Main Campus)",
      address: "Baddowal, Ferozepur Road, Ludhiana – 142021, Punjab, India",
      phone: "0161 - 2888500",
      mapLink: "https://maps.google.com"
    },
    {
      name: "Campus – 2",
      address: "Near Baddowal Cantt, Ferozepur Road, Ludhiana – 142021",
      phone: "0161 - 2888522",
      mapLink: "https://maps.google.com"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="w-full bg-black py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full opacity-20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            Contact <span className="text-primary">Directory</span>
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 font-medium max-w-lg mx-auto">
            Direct lines to our departments and campus offices.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left 2 Columns: Departments */}
            <div className="lg:col-span-2 space-y-8">
              {departments.map((dept, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex items-center gap-3">
                    {dept.icon}
                    <h3 className="text-xl font-bold text-secondary">{dept.category}</h3>
                  </div>
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dept.contacts.map((contact, cidx) => (
                      <div key={cidx} className="space-y-4">
                        <h4 className="font-bold text-primary flex items-center gap-2">
                          <ShieldCheck size={18} />
                          {contact.label}
                        </h4>
                        <div className="space-y-2">
                          <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-medium">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center"><Phone size={14} /></div>
                            {contact.phone}
                          </a>
                          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-medium">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center"><Mail size={14} /></div>
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Campus Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {campuses.map((campus, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4">{campus.name}</h3>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed font-medium">{campus.address}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-50 text-sm">
                      <span className="font-bold text-secondary flex items-center gap-2">
                        <Phone size={14} className="text-primary" /> {campus.phone}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Office Hours & Quick Links */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="text-primary" />
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/60">Monday - Friday</span>
                    <span className="font-bold">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/60">Saturday</span>
                    <span className="font-bold">9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center text-primary">
                    <span className="text-white/60">Sunday</span>
                    <span className="font-bold uppercase tracking-widest text-xs">Closed</span>
                  </div>
                </div>

                <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-white/60 leading-relaxed italic">
                    * Timings may vary during public holidays and university events.
                  </p>
                </div>
              </motion.div>

              {/* Quick Support Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-gray-50 group-hover:text-gray-100 transition-colors">
                  <Phone size={120} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2 relative z-10">Emergency?</h4>
                <p className="text-gray-500 mb-6 text-sm relative z-10">Our security team is available 24/7 for campus emergencies.</p>
                <a href="tel:01612888500" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg relative z-10 hover:bg-red-800 transition-colors">
                  Call Security
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
