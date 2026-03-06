import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { COURSES_DATA } from "../../data/coursesData";
import FeaturedAlumni from "./FeaturedAlumni";
import HelpSection from "../../components/common/HelpSection";

import WhyChooseUs from "./WhyChooseUs";
import AdmissionsInquiry from "./AdmissionsInquiry";

const Home = () => {
  const recruiters = [
    "/Home page logos/Google.jpg.jpeg",
    "/Home page logos/Microsoft.jpg.jpeg",
    "/Home page logos/Amazon.jpg.jpeg",
    "/Home page logos/Accenture.jpg (1).jpeg",
    "/Home page logos/Airtel.jpg.jpeg",
    "/Home page logos/Capgemini.jpg.jpeg",
    "/Home page logos/Cognizant.jpg.jpeg",
    "/Home page logos/Dell.jpg.jpeg",
    "/Home page logos/Goldman Sachs.jpg.jpeg",
    "/Home page logos/HCL.jpg.jpeg",
    "/Home page logos/HDFC.jpg.jpeg",
    "/Home page logos/IBM.jpg.jpeg",
    "/Home page logos/ICICI Bank.jpg.jpeg",
    "/Home page logos/TCS.jpg.jpeg",
    "/Home page logos/Wipro.jpg.jpeg",
    "/Home page logos/deloitte.jpg.jpeg",
    "/Home page logos/infosys.jpg.jpeg",
    "/Home page logos/Omni hotels.jpg.jpeg",
    "/Home page logos/Oracle.jpg.jpeg",
    "/Home page logos/Taj.jpg.jpeg",
    "/Home page logos/The Residency Towers.jpg.jpeg",
    "/Home page logos/The Ritz Carlton.jpg (1).jpeg",
    "/Home page logos/jaro education.jpg.jpeg",
    "/Home page logos/the oberoi.jpg.jpeg",
  ];

  const heroSlides = [
    { desktop: "/Home/Cover-1.jpg", mobile: "/Home/Mobile-Cover-1.jpg" },
    { desktop: "/Home/Cover-2.jpg", mobile: "/Home/Mobile-Cover-2.jpg" },
    { desktop: "/Home/Cover-3.jpg", mobile: "/Home/Mobile-Cover-3.jpg" },
    { desktop: "/Home/Cover-4.jpg", mobile: "/Home/Mobile-Cover-4.jpg" },
  ];

  // Flatten COURSES_DATA for the grid display
  const coursesList = Object.entries(COURSES_DATA).flatMap(
    ([category, courses]) =>
      Object.entries(courses).map(([id, data]) => ({
        ...data,
        path: `/courses/${category}/${id}`,
      })),
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          autoHeight={true}
          className="w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full relative">
                <picture className="w-full block">
                  <source media="(min-width: 1024px)" srcSet={slide.desktop} />
                  <img
                    src={slide.mobile}
                    alt={`Hero Slide ${index + 1}`}
                    loading="eager"
                    fetchpriority="high"
                    className="w-full h-auto block contrast-[1.02] brightness-[1.02]"
                  />
                </picture>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* RECRUITERS */}
      <section className="py-10 bg-white overflow-hidden border-t">
        <h1 className="text-primary uppercase tracking-widest text-1xl font-bold text-center mb-10">
          Our Leading Partners
        </h1>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...recruiters, ...recruiters, ...recruiters].map((logo, i) => (
            <div
              key={i}
              className="mx-12 w-48 h-24 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Recruiter"
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-primary uppercase tracking-widest text-1xl font-bold text-center mb-6">
              Academic Programmes
            </h1>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {coursesList.map((course, index) => (
              <Link
                key={index}
                to={course.path}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 group block hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=" +
                        course.title;
                    }}
                  />
                </div>

                <div className="p-3 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-secondary text-xs sm:text-base font-bold leading-tight mb-2 flex-grow">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider group-hover:text-red-600 transition-colors mt-auto">
                    View Details{" "}
                    <ArrowRight
                      size={12}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Shape Your Future? <br />
              <span className="text-primary text-2xl md:text-3xl">
                Admissions 2026–27 Now Open
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Join a global community of innovators and leaders. Start your
              journey at PCTE and unlock endless possibilities for your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold uppercase text-sm tracking-wider rounded-full hover:bg-white hover:text-secondary transition-all duration-300 shadow-lg"
              >
                Apply Now
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </a>
              <Link
                to="/admission"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-bold uppercase text-sm tracking-wider rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Admission Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS INQUIRY */}
      <AdmissionsInquiry />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* HELP SECTION */}
      <HelpSection />

      {/* FEATURED ALUMNI */}
      <FeaturedAlumni />
    </>
  );
};

export default Home;
