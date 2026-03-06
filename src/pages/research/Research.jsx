import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Beaker, BookOpen, Microscope, ArrowRight, GraduationCap, Building2 } from 'lucide-react';

const Research = () => {

    const researchInstitutes = [
        {
            title: "PCTE Institute of Engineering & Technology",
            description: "Advancing technical knowledge through cutting-edge research in engineering and technology fields.",
            link: "/research/engineering-technology",
            icon: <Microscope className="w-8 h-8 text-white" />,
            color: "bg-[#880000]"
        },
        {
            title: "Punjab College of Technology Education",
            description: "Dedicated to innovation and excellence in technology-driven education and research.",
            link: "/research/punjab-college",
            icon: <Building2 className="w-8 h-8 text-white" />,
            color: "bg-black"
        },
        {
            title: "PCTE Group of Institutes",
            description: "A collaborative research environment across various disciplines provided by the group.",
            link: "/research/group-of-institutes",
            icon: <GraduationCap className="w-8 h-8 text-white" />,
            color: "bg-primary"
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="bg-neutral-900 py-16 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
                    >
                        Research at PCTE
                    </motion.h1>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Fostering innovation and discovery across our specialized institutes.
                    </p>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <nav className="border-b border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
                        <span className="text-gray-300">›</span>
                        <span className="text-gray-400 font-medium">Research</span>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-secondary text-3xl font-bold mb-4">Our Research Ecosystem</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        At PCTE, research is not just an academic requirement but a way of life. We encourage our students and faculty to push the boundaries of knowledge and address real-world challenges through innovation.
                    </p>
                </div>

                {/* Research Institutes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {researchInstitutes.map((institute, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`${institute.color} p-8 flex justify-center items-center`}>
                                {institute.icon}
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                    {institute.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {institute.description}
                                </p>
                                <Link
                                    to={institute.link}
                                    className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all"
                                >
                                    Learn More <ArrowRight size={14} className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Vision Section */}
                <section className="bg-gray-50 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Driving Innovation Through Research</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our research initiatives span across various domains including artificial intelligence, sustainable technology, pharmaceutical sciences, and social entrepreneurship. We provide state-of-the-art facilities and mentorship to nurture the next generation of researchers.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Beaker className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Modern Labs</h4>
                                        <p className="text-xs text-gray-500">Equipped with latest tech</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Expert Guidance</h4>
                                        <p className="text-xs text-gray-500">Mentorship by industry leaders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1532187875605-1ef6c016b1ef?auto=format&fit=crop&q=80&w=800"
                                alt="Research at PCTE"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* CTA Section */}
            <section className="py-20 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-8">Have a Research Proposal?</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        We are always looking for innovative ideas and collaborations. Get in touch with our research cell to discuss your vision.
                    </p>
                    <Link
                        to="/contact"
                        className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest rounded shadow-lg hover:bg-black transition-colors"
                    >
                        Contact Research Cell
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Research;
