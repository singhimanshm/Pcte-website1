import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';
import { COURSES_DATA } from '../../data/coursesData';
import { ExtraCourseContent } from './ExtraCourseContent';

const CourseDetail = () => {
    const { category, id } = useParams();
    const [openAccordion, setOpenAccordion] = useState(null);

    // Find the course in our data
    const course = COURSES_DATA[category]?.[id];

    // Scroll to top when course changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category, id]);

    // If course doesn't exist, redirect to home
    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="font-sans antialiased bg-white">
            {/* SECTION 1: DARK HERO */}
            <section className="bg-[#1a1a1a] text-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                {course.heroTitle || course.title}
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {course.heroSubtitle || course.description}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/brochure" className="px-8 py-3 border-2 border-white font-semibold rounded hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm inline-block">
                                    Download E-Brochure
                                </Link>
                                <a href="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#a80d0d] text-white font-semibold rounded hover:bg-red-800 transition-all uppercase tracking-wider text-sm inline-block">
                                    Apply Now
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={course.heroImage || course.image}
                                    alt={course.title}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=' + course.title; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: HIGHLIGHTS & CONTACT FORM */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Content Area */}
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl font-light text-gray-800 mb-6 uppercase tracking-tight">
                                {course.highlightTitle?.split(' ')[0] || "Our"} <span className="text-[#a80d0d] font-bold">{course.highlightTitle?.split(' ').slice(1).join(' ') || "Program Highlights"}</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                                {course.highlightText || course.details}
                            </p>

                            {course.accordionData && course.accordionData.length > 0 && (
                                <div className="space-y-4 mb-10">
                                    {course.accordionData.map((item, index) => (
                                        <div key={index} className="rounded-lg shadow-md overflow-hidden border border-gray-100">
                                            <button
                                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                                className="w-full flex items-center justify-between p-5 bg-[#1a1a1a] text-white hover:bg-black transition-all"
                                            >
                                                <span className="font-bold tracking-widest text-sm text-left">{item.title}</span>
                                                {openAccordion === index ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </button>
                                            {openAccordion === index && (
                                                <div className="p-6 bg-gray-50 border-x border-b border-gray-200 text-gray-700 leading-relaxed text-base">
                                                    {item.content}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Link to="/brochure" className="bg-[#a80d0d] text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-red-800 transition-all shadow-xl inline-block">
                                Download Our E-Brochure
                            </Link>
                        </div>

                        {/* Right Form Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-2xl border border-gray-50 sticky top-10 overflow-hidden">
                                <iframe
                                    src="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    style={{ border: 'none', borderRadius: '8px' }}
                                    title="Admission Enquiry Form 2026"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* EXTRA COURSE CONTENT (Dynamic) */}
            {course.extraTabs && course.extraTabsContent && (
                <ExtraCourseContent
                    tabs={course.extraTabs}
                    content={course.extraTabsContent}
                    department={course.facultyDepartment || category}
                    whyPCTEImages={course.whyPCTEImages}
                    recruiters={course.recruiters}
                />
            )}
        </div>
    );
};

export default CourseDetail;
