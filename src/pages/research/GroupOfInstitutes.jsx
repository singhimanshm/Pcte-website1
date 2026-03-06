import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Handshake, Lightbulb, CheckCircle2, ShieldCheck } from 'lucide-react';

const GroupOfInstitutes = () => {
    const points = [
        "Integrated approach to holistic learning across all campuses.",
        "Multidisciplinary research projects involving various departments.",
        "Centralized placement cell with global corporate tie-ups.",
        "State-of-the-art centralized library and digital resources.",
        "Dynamic campus life with students from over 60 countries.",
        "Focused mentorship programs for startup and entrepreneurial ventures."
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="bg-neutral-900 py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4"
                    >
                        PCTE Group of Institutes
                    </motion.h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <nav className="border-b border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-300">›</span>
                        <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
                        <span className="text-gray-300">›</span>
                        <span className="text-gray-400 font-medium">Group of Institutes</span>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                {/* About Section */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-secondary mb-8">A Legacy of Excellence</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                PCTE Group of Institutes has been a trailblazer in professional education since 1999. By integrating diverse fields of study under one umbrella, we offer our students a unique, multidisciplinary perspective that is vital in today's interconnected world.
                            </p>

                            <div className="space-y-4">
                                {points.map((point, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <p className="text-gray-700 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                alt="PCTE Group Campus"
                                className="rounded-3xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats / Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-gray-50 p-8 rounded-2xl border-b-4 border-secondary group hover:bg-white hover:shadow-xl transition-all">
                        <Landmark className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-secondary mb-4">State-of-the-Art Campus</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Sprawling campuses equipped with the latest infrastructure and green spaces to foster a creative learning environment.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border-b-4 border-primary group hover:bg-white hover:shadow-xl transition-all">
                        <Handshake className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-secondary mb-4">Global Tie-ups</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Active collaborations with international universities for student exchanges and shared research initiatives.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border-b-4 border-black group hover:bg-white hover:shadow-xl transition-all">
                        <Lightbulb className="w-10 h-10 text-black mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-secondary mb-4">Innovation Focus</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Dedicated to nurturing independent thinkers and problem-solvers through a culture of research and enquiry.</p>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="bg-[#880000] rounded-3xl p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <ShieldCheck className="w-12 h-12 mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic italic">"Commitment to Quality, Driven by Innovation"</h2>
                        <p className="text-white/70 text-lg">We don't just educate; we transform individuals into global leaders who are ready to make a difference.</p>
                    </div>
                    <Link to="/contact" className="px-12 py-5 bg-white text-secondary font-bold rounded-full uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl flex-shrink-0">
                        Enquire Now
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default GroupOfInstitutes;
