import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PhotoTour = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infrastructureItems = [
    { title: "HM Block", src: "/PHOTO-TOUR/Hm_Block.jpg", path: "/infrastructure/hm-block" },
    { title: "ET Block", src: "/PHOTO-TOUR/ET_Block.jpg", path: "/infrastructure/et-block" },
    { title: "MT Block", src: "/PHOTO-TOUR/MT_Block.jpg", path: "/infrastructure/mt-block" },
    { title: "Pharmacy Block", src: "/PHOTO-TOUR/Pharmacy_Block.jpg", path: "/infrastructure/pharmacy-block" },
    { title: "Outdoor Sports", src: "/PHOTO-TOUR/Outdoor.png", path: "/infrastructure/outdoor-sports" },
    { title: "Campus 1", src: "/PHOTO-TOUR/Campus1/DJI_0003.jpg", path: "/infrastructure/campus-1" },
    { title: "Canteen", src: "/PHOTO-TOUR/Canteen/77.jpg", path: "/infrastructure/canteen" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section (Matches Image 0) */}
      <section className="bg-[#1a1c23] py-8 md:py-12 text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Infrastructure
          </h1>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <nav className="border-b border-gray-100 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span>Infrastructure</span>
          </div>
        </div>
      </nav>

      {/* Photo Grid Section (Matches Image 1) */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructureItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 transition-shadow"
            >
              {/* Image Placeholder */}
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <h3 className="text-white text-lg font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhotoTour;
