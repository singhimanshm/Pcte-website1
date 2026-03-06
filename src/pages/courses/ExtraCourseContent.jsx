import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, HandCoins, Trophy, Handshake, CheckCircle } from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { facultyData } from '../../data/facultyData';
import LazyImage from '../../components/common/LazyImage';

const CourseWhyPCTE = ({ images }) => {

    const slideImages = images && images.length > 0 ? images : [];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase">
                        WHY <span className="text-[#a80d0d] font-bold">PCTE ?</span>
                    </h2>
                    <p className="mt-6 text-gray-600 leading-relaxed max-w-5xl mx-auto text-sm md:text-base">
                        Campus life at PCTE is vibrant, inclusive, and designed to nurture both personal and professional growth. Whether you're sipping coffee at the open-air café, leading a student club, dancing at a fest, or competing on the basketball court — every day offers something new. With lush green spaces, an on-campus lake, modern hostels, and over 20 student-led clubs and societies, PCTE isn't just a place to study — it's where you build lifelong friendships, discover passions, and grow into a confident, industry-ready professional.
                    </p>
                </div>

                <div className="relative overflow-hidden shadow-sm h-[600px] max-w-6xl mx-auto bg-white">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop
                        className="w-full h-full"
                    >
                        {slideImages.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full overflow-hidden">
                                    {/* Desktop Image (Visible on lg screens 1024px+) */}
                                    <div className="hidden lg:block w-full h-full">
                                        <LazyImage
                                            src={encodeURI(slide.desktop)}
                                            alt={`Desktop Slide ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Mobile Image (Visible on screens smaller than 1024px) */}
                                    <div className="block lg:hidden w-full h-full">
                                        <LazyImage
                                            src={encodeURI(slide.mobile)}
                                            alt={`Mobile Slide ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

const CourseFaculty = ({ department = 'engineering' }) => {
    const faculty = (facultyData[department] || []).slice(0, 3);

    if (faculty.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">Program Faculty</h2>
                    <p className="mt-4 text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed">
                        PCTE faculty are highly qualified and experienced leaders with immaculate industry knowledge and expertise
                        who are dedicated to nurturing the students for their comprehensive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {faculty.map((f, i) => (
                        <div key={i} className="bg-white p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <Link
                                to={`/faculty-profile/${department}`}
                                className="w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-4 block"
                            >
                                <img
                                    src={f.image}
                                    alt={f.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=' + f.name; }}
                                />
                            </Link>
                            <div className="mb-4">
                                <h4 className="font-bold text-gray-800 text-lg leading-tight">{f.name}</h4>
                                <p className="text-xs text-[#a80d0d] mt-1 font-medium tracking-wide">{f.role}</p>
                            </div>
                            <Link
                                to={`/faculty-profile/${department}`}
                                className="mt-auto px-6 py-2 border border-[#a80d0d] text-[#a80d0d] text-xs font-bold uppercase hover:bg-[#a80d0d] hover:text-white transition-all duration-300"
                            >
                                View Profile
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CourseAffiliations = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h3 className="text-center text-3xl font-bold text-gray-800 mb-12">Affiliations & Approvals</h3>
                <div className="flex flex-wrap justify-center items-center gap-16">
                    <img src="/courses/ExtraCoursesImages/aicte.jpg" alt="AICTE" className="h-24 md:h-32 object-contain hover:scale-105 transition-transform" />
                    <img src="/courses/ExtraCoursesImages/ikgptu.jpg" alt="IKGPTU" className="h-24 md:h-32 object-contain hover:scale-105 transition-transform" />
                </div>
            </div>
        </section>
    );
};


const CourseHelpCTA = () => {
    return (
        <section className="relative w-full h-[250px] md:h-[450px] overflow-hidden">
            <img
                src="https://pcte.edu.in/wp-content/uploads/2019/02/1-1.jpg"
                alt="Need Help"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest border-l-4 border-white pl-6">
                        STILL NEED HELP?
                    </h2>
                    <div className="bg-[#8B0000] text-white px-8 md:px-12 py-3 md:py-4 rounded shadow-2xl flex items-center gap-4">
                        <span className="text-xl md:text-3xl font-bold">+91 161-2888-500</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CourseRecruiters = ({ recruiters }) => {
    const stats = [
        { label: "25+ Years", sub: "Education Expertise", icon: <Globe className="w-8 h-8 text-[#a80d0d]" /> },
        { label: "19 LPA", sub: "Highest Package Secured", icon: <HandCoins className="w-8 h-8 text-[#a80d0d]" /> },
        { label: "Rank 2", sub: "In ROI by India today", icon: <Trophy className="w-8 h-8 text-[#a80d0d]" /> },
        { label: "100+ Recruiters", sub: "Trusted Global Companies", icon: <Handshake className="w-8 h-8 text-[#a80d0d]" /> }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
                            <div className="mb-4">{s.icon}</div>
                            <h4 className="text-2xl font-bold text-gray-800">{s.label}</h4>
                            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{s.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Recruiters Info */}
                <div className="text-center max-w-5xl mx-auto mb-16 px-6">
                    <h2 className="text-primary uppercase tracking-widest text-1xl font-bold text-center mb-10">
                        Our <span className="text-[#a80d0d] font-bold">Leading Partners</span>
                    </h2>
                    <p className="mt-8 text-gray-600 leading-relaxed text-sm md:text-base">
                        Leading tech companies, startups, and global IT firms are among the top campus recruiters for the academic
                        Learning programs. They offer promising career opportunities in
                        software development, data science, machine learning, AI research, and cutting-edge technology roles.
                    </p>
                </div>
            </div>

            {/* Recruiters Marquee - Outside container for full-width scroll */}
            {recruiters && recruiters.length > 0 && (
                <div className="overflow-hidden border-t border-b py-10">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...recruiters, ...recruiters, ...recruiters].map((logo, i) => (
                            <div
                                key={i}
                                className="mx-12 w-48 h-24 flex-shrink-0 flex items-center justify-center bg-white"
                            >
                                <img
                                    src={logo}
                                    alt="Recruiter"
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

const CourseTabs = ({ tabs, content }) => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${activeTab === tab.id
                                ? 'border-[#a80d0d] text-[#a80d0d]'
                                : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {content[activeTab]}
                    </p>
                </div>
            </div>
        </section>
    );
};

export { CourseWhyPCTE, CourseFaculty, CourseAffiliations, CourseRecruiters, CourseHelpCTA, CourseTabs };

export const ExtraCourseContent = ({ tabs, content, department = 'engineering', whyPCTEImages, recruiters }) => {
    return (
        <>
            <CourseRecruiters recruiters={recruiters} />
            <CourseWhyPCTE images={whyPCTEImages} />
            <CourseFaculty department={department} />
            {tabs && content && <CourseTabs tabs={tabs} content={content} />}
            <CourseAffiliations />
            <CourseHelpCTA />
        </>
    );
};
