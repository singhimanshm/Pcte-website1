import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = ({ title, subtitle, breadcrumbs, images }) => {
  // Default hero images if none provided
  const defaultImages = [
    "https://pcte.edu.in/wp-content/uploads/2025/03/Cover-4.2-New-Size-scaled.jpg",
    "https://pcte.edu.in/wp-content/uploads/2025/03/Cover-1.1-New-Size-scaled.jpg",
    "https://pcte.edu.in/wp-content/uploads/2025/03/Cover-3.2-New-Size-scaled.jpg",
    "https://pcte.edu.in/wp-content/uploads/2025/03/Cover-2.3-New-Size1-scaled.jpg"
  ];

  const heroImages = images || defaultImages;
  const displayTitle = title || 'Welcome';
  const displaySubtitle = subtitle || '';

  return (
    <section className="relative h-[70vh] md:h-[600px] w-full overflow-hidden bg-gray-900">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation
        className="h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] md:h-[600px]">
              {/* Image */}
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  {displayTitle}
                </h1>
                {displaySubtitle && (
                  <p className="text-xl md:text-2xl text-gray-200 max-w-3xl drop-shadow-md">
                    {displaySubtitle}
                  </p>
                )}
                
                {/* Breadcrumbs */}
                {breadcrumbs && (
                  <div className="absolute bottom-8 left-0 right-0">
                    <div className="container mx-auto px-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        {breadcrumbs}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

