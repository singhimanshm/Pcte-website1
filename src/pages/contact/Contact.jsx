import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "0161 - 2888500",
      subDetails: "Mon-Sat: 9:00 AM - 5:00 PM",
      link: "tel:01612888500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@pcte.edu.in",
      subDetails: "admissions@pcte.edu.in",
      link: "mailto:info@pcte.edu.in"
    }
  ];

  const campuses = [
    {
      title: "Campus – 1",
      address: "Baddowal, Ferozepur Road, Ludhiana – 142021, Punjab, India",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Campus – 2",
      address: "Near Baddowal Cantt, Ferozepur Road, Ludhiana – 142021",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Hero Section */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          >
            Contact PCTE
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-30 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                <MessageSquare className="text-primary" />
                Contact Information
              </h3>

              <div className="space-y-8">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    variants={itemVariants}
                    key={idx}
                    href={method.link}
                    className="flex items-start gap-4 group transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-lg group-hover:text-primary transition-colors">{method.title}</p>
                      <p className="text-gray-600 font-medium">{method.details}</p>
                      <p className="text-gray-400 text-sm">{method.subDetails}</p>
                    </div>
                  </motion.a>
                ))}

                <hr className="border-gray-100" />

                {campuses.map((campus, idx) => (
                  <motion.div variants={itemVariants} key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary shadow-sm">
                      {campus.icon}
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-lg">{campus.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{campus.address}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex gap-4">
                  <div className="flex-1 bg-gray-50 p-4 rounded-xl text-center">
                    <Globe className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider">Socials</p>
                    <div className="flex justify-center gap-2 mt-2">
                      {/* Add social tiny icons here if needed */}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-xl text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider">Office</p>
                    <p className="text-[10px] text-gray-500 mt-1 font-bold">24/7 SUPPORT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location CTA Card */}
            <motion.div
              variants={itemVariants}
              className="bg-primary rounded-2xl p-8 text-white shadow-xl overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transform group-hover:scale-110 transition-transform">
                <MapPin size={120} />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">Visit Our Campus</h4>
              <p className="text-white/80 mb-6 relative z-10 leading-relaxed">
                Take a physical tour of our state-of-the-art facilities and meet our expert faculty.
              </p>
              <Link
                to="/contact/map"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all relative z-10"
              >
                Get Directions
              </Link>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 md:p-12 pb-4">
                <h3 className="text-3xl font-bold text-secondary mb-2">Send us a Message</h3>
                <p className="text-gray-500">We usually respond within 24 hours.</p>
              </div>
              <iframe
                src="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 'none', borderRadius: '8px' }}
                title="Admission Enquiry Form 2026"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

