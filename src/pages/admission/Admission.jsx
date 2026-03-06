import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  CreditCard,
  Gift,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  ClipboardCheck,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const Admission = () => {

  const steps = [
    {
      number: "01",
      title: "Fill Application",
      description: "Complete the online application form with your personal and academic details accurately.",
      icon: <FileText className="w-6 h-6 text-white" />,
      link: "https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8",
      color: "bg-[#880000]"
    },
    {
      number: "02",
      title: "Check Eligibility",
      description: "Verify the minimum qualification criteria and entrance requirements for your chosen course.",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      link: "/courses",
      color: "bg-black"
    },
    {
      number: "03",
      title: "Submit Documents",
      description: "Upload necessary documents including certificates, ID proof, and photographs for verification.",
      icon: <UserCheck className="w-6 h-6 text-white" />,
      link: "https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8",
      color: "bg-[#880000]"
    },
    {
      number: "04",
      title: "Confirm & Pay",
      description: "Once verified, confirm your seat by paying the admission fee through our secure portal.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      link: "/admission/pay",
      color: "bg-black"
    }
  ];

  const quickLinks = [
    { title: "Scholarship Scheme", link: "/admission/scholarship", icon: <Gift size={20} /> },
    { title: "Pay Online", link: "/admission/pay", icon: <CreditCard size={20} /> },
    { title: "Apply Now", link: "https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8", icon: <ArrowRight size={20} /> },
    { title: "Admission FAQs", link: "/contact/details", icon: <HelpCircle size={20} /> }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          >
            Admissions 2026-27
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <nav className="border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-400 font-medium">Admission</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-[#880000] text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Begin Your Global Journey <br />
              <span className="text-black">At PCTE Today</span>
            </h2>
            <div className="w-20 h-1 bg-[#880000] mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Joining PCTE means becoming part of a diverse, high-achieving community. Our admission process is designed to be transparent and supportive, ensuring that every promising student has the opportunity to shine.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#880000] w-5 h-5" />
                <span className="text-gray-800 font-medium">Simplified Online Application</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#880000] w-5 h-5" />
                <span className="text-gray-800 font-medium">Merit-Based Scholarship Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#880000] w-5 h-5" />
                <span className="text-gray-800 font-medium">Expert Guidance from Admission Counselors</span>
              </div>
            </div>
            <a
              href="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#880000] text-white font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:bg-black transition-all"
            >
              Start Application <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-50 -z-10 rounded-2xl transform rotate-2"></div>
              <img
                src="/admission_hero.jpg"
                alt="Admission at PCTE"
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-lg shadow-xl z-20 border-l-4 border-[#880000] hidden md:block">
                <div className="text-[#880000] font-black text-2xl">OPEN</div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Enrollment 2026</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Admission Steps Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-[#880000] text-2xl font-bold uppercase tracking-widest mb-4">
              Our Admission Process
            </h2>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              "Follow these simple steps to secure your place at North India's premier professional education institute."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="absolute top-6 right-8 text-4xl font-black text-gray-50 opacity-100 group-hover:opacity-10 transition-opacity">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-[#880000] transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
                {step.link.startsWith('http') ? (
                  <a href={step.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-[#880000] uppercase tracking-widest group/link">
                    Learn More <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link to={step.link} className="inline-flex items-center text-xs font-bold text-[#880000] uppercase tracking-widest group/link">
                    Learn More <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Scholarship Section */}
        <section className="mb-24">
          <div className="bg-[#1a1c23] rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#880000]/20 to-transparent hidden lg:block"></div>
            <div className="p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-2 bg-[#880000] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <Gift size={12} /> Financial Aid Available
                </div>
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Scholarship Schemes for <br />
                  <span className="text-[#880000]">Meritorious Students</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We believe that financial constraints shouldn't hinder brilliant minds. PCTE offers extensive scholarship programs based on academic performance, sports achievements, and social background.
                </p>
                <Link
                  to="/admission/scholarship"
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:bg-[#880000] hover:text-white transition-all group"
                >
                  Check Eligibility <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center">
                  <div className="text-5xl font-black text-white mb-2">Up to 100%</div>
                  <div className="text-[#880000] font-bold text-sm uppercase tracking-widest">Course Fee Waiver</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, idx) => (
            item.link.startsWith('http') ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gray-50 border border-gray-100 rounded-lg text-center hover:bg-white hover:shadow-md hover:border-[#880000] transition-all"
              >
                <div className="w-10 h-10 mx-auto mb-4 bg-white text-[#880000] rounded-full flex items-center justify-center border border-gray-100 group-hover:bg-[#880000] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-800 group-hover:text-[#880000] transition-colors uppercase tracking-wider text-xs">
                  {item.title}
                </span>
              </a>
            ) : (
              <Link
                key={idx}
                to={item.link}
                className="group p-6 bg-gray-50 border border-gray-100 rounded-lg text-center hover:bg-white hover:shadow-md hover:border-[#880000] transition-all"
              >
                <div className="w-10 h-10 mx-auto mb-4 bg-white text-[#880000] rounded-full flex items-center justify-center border border-gray-100 group-hover:bg-[#880000] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-800 group-hover:text-[#880000] transition-colors uppercase tracking-wider text-xs">
                  {item.title}
                </span>
              </Link>
            )
          ))}
        </div>

      </main>

      {/* Footer CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Need assistance with your admission?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our admission counselors are ready to help you navigate your path to PCTE.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/enquire"
              className="px-10 py-4 bg-[#880000] text-white font-bold uppercase tracking-widest rounded shadow-lg hover:bg-black transition-colors"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
