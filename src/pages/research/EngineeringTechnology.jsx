import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Cpu, Rocket, Code, Settings, Zap } from 'lucide-react';

const EngineeringTechnology = () => {
    const features = [
        {
            icon: <Cpu className="w-8 h-8 text-primary" />,
            title: "Advanced Laboratories",
            desc: "State-of-the-art facilities for electronics, robotics, and computer science research."
        },
        {
            icon: <Code className="w-8 h-8 text-primary" />,
            title: "Software Innovation",
            desc: "Developments in AI, Machine Learning, and Cloud Computing solutions."
        },
        {
            icon: <Settings className="w-8 h-8 text-primary" />,
            title: "Mechatronics Lab",
            desc: "Exploring the boundary between mechanical engineering and electronic control."
        },
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "Energy Solutions",
            desc: "Research into sustainable and renewable energy sources for the future."
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
                        PCTE Institute of Engineering & Technology
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
                        <span className="text-gray-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">Engineering & Technology</span>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-6 italic">Empowering Technical Innovation</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The PCTE Institute of Engineering & Technology (PIET) is dedicated to fostering an environment where technical brilliance and creative thinking go hand-in-hand. Our research initiatives focus on solving complex industrial problems through engineering excellence.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            PIET provides a platform for students to work on real-time projects, internships, and research papers that contribute significantly to the technological landscape.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                            alt="Engineering Research"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Collaborative Section */}
                <section className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Rocket size={200} />
                    </div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-6">Industry Collaborations</h2>
                        <p className="text-white/80 mb-8 text-lg">
                            We partner with global technology giants to bring the latest industrial trends and requirements directly to our labs. This synergy ensures our research is relevant, impactful, and ready for deployment.
                        </p>
                        <Link
                            to="/admission/apply"
                            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-lg"
                        >
                            Join Our Program
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EngineeringTechnology;
