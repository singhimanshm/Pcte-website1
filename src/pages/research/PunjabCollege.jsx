import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Globe, PieChart, TrendingUp } from 'lucide-react';

const PunjabCollege = () => {
    const highlights = [
        {
            icon: <Award className="w-8 h-8 text-secondary" />,
            title: "Academic Excellence",
            desc: "Consistently ranked among the top technology education providers in the region."
        },
        {
            icon: <Users className="w-8 h-8 text-secondary" />,
            title: "Placement Success",
            desc: "Robust industry connections leading to exceptional career starts for our graduates."
        },
        {
            icon: <Globe className="w-8 h-8 text-secondary" />,
            title: "Global Curriculum",
            desc: "Courses designed in alignment with international standards and industry demands."
        },
        {
            icon: <PieChart className="w-8 h-8 text-secondary" />,
            title: "Market Research",
            desc: "Active participation in consumer behavior and market trend analysis."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="bg-[#1a1c23] py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4"
                    >
                        Punjab College of Technology Education
                    </motion.h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="border-b border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-300">›</span>
                        <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
                        <span className="text-gray-300">›</span>
                        <span className="text-gray-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">Punjab College</span>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                            alt="Technology Education"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-6">Pioneering Professional Education</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The Punjab College of Technology Education (PCTE) is the cornerstone of our group, established with a vision to redefine professional education in India. We focus on bridging the gap between theoretical knowledge and practical application.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our research encompasses a wide range of management and technology applications, helping businesses optimize their operations and students gain a competitive edge in the global market.
                        </p>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 bg-gray-50 p-4 rounded-full">{item.icon}</div>
                            <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action section style */}
                <section className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-center text-white">
                    <TrendingUp className="w-16 h-16 mx-auto mb-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Shape the Future of Technology</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                        At Punjab College of Technology Education, we provide the tools, the mentorship, and the opportunities to transform your curiosity into career-defining innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/admission/apply" className="px-10 py-4 bg-primary text-white font-bold rounded uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg">
                            Apply for Admission
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PunjabCollege;
