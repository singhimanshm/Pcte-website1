import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  MessageCircle,
  Shield
} from 'lucide-react';

const Enquire = () => {
  const highlights = [
    { icon: <GraduationCap className="w-5 h-5" />, text: '30+ Programs Offered' },
    { icon: <Users className="w-5 h-5" />, text: '10,000+ Alumni Network' },
    { icon: <Award className="w-5 h-5" />, text: 'NAAC A+ Accredited' },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      label: 'Call Us',
      value: '+91-161-5052728',
      href: 'tel:+911615052728',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      value: 'admissions@pcte.edu.in',
      href: 'mailto:admissions@pcte.edu.in',
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Campus',
      value: 'Near Baddowal Cantt, Ludhiana',
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: 'Office Hours',
      value: 'Mon - Sat, 9 AM - 5 PM',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#880000]/20 via-transparent to-[#880000]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide">
              Admission Enquiry
            </h1>
            <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
              Take the first step towards a transformative education at PCTE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-[#880000] transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-400 font-medium">Admission Enquiry</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 md:py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left: Sidebar Info */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:w-[340px] shrink-0 space-y-6"
          >
            {/* Why Enquire Card */}
            <div className="bg-[#1a1c23] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#880000] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold">Why Enquire?</h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#880000] mt-1.5 shrink-0"></span>
                  Get personalized course guidance from our expert counselors
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#880000] mt-1.5 shrink-0"></span>
                  Learn about available scholarships & fee waivers
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#880000] mt-1.5 shrink-0"></span>
                  Understand eligibility criteria for your program
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#880000] mt-1.5 shrink-0"></span>
                  Fast-track your admission process
                </li>
              </ul>
            </div>

            {/* Highlights */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">PCTE at a Glance</h3>
              <div className="space-y-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#880000] border border-gray-100 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Contact Admissions</h3>
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-[#880000] shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-gray-800 hover:text-[#880000] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-gray-800">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Courses Link */}
            <Link
              to="/courses"
              className="flex items-center justify-between w-full p-5 bg-[#880000] text-white rounded-2xl hover:bg-[#6d0000] transition-colors group"
            >
              <div>
                <div className="font-bold text-sm">Explore Our Courses</div>
                <div className="text-xs text-red-200 mt-0.5">30+ programs across 6 departments</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.aside>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            {/* Form Header */}
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Fill Your <span className="text-[#880000]">Enquiry</span>
              </h2>
              <p className="text-gray-500 mt-1.5 text-sm">
                Complete the form below and our admission team will get back to you within 24 hours.
              </p>
            </div>

            {/* Iframe Container */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                src="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
                width="100%"
                height="650"
                frameBorder="0"
                style={{
                  border: 'none',
                  display: 'block',
                }}
                title="Admission Enquiry Form 2026"
              />
            </div>

            {/* Trust Indicators */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Your data is secure & confidential</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Response within 24 hours</span>
              </div>
              <div>
                By submitting, you agree to our{' '}
                <span className="text-[#880000] hover:underline cursor-pointer">Privacy Policy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Prefer to talk to someone?
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Our admission counselors are available to assist you with any questions about programs, eligibility, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+911615052728"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#880000] text-white font-bold uppercase tracking-widest text-xs rounded-lg shadow hover:bg-black transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link
              to="/contact/details"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-800 font-bold uppercase tracking-widest text-xs rounded-lg border border-gray-200 hover:border-[#880000] hover:text-[#880000] transition-colors"
            >
              Visit Campus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquire;