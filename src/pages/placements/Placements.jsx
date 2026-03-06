import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ================= COURSE PLACEMENT CARD ================= */
const CoursePlacement = ({ title, desktopImg, mobileImg }) => (
  <div className="flex flex-col items-center mb-10 px-4">

    <div className="mb-4 text-center">
      <h3 className="text-lg md:text-xl font-bold text-secondary uppercase">
        {title}
      </h3>
      <div className="h-1 bg-primary w-20 mx-auto mt-2"></div>
    </div>

    <div className="w-full max-w-3xl flex justify-center">

      {/* 📱 Mobile Image (Vertical) */}
      <img
        src={mobileImg}
        alt={title}
        className="w-full max-w-[280px] h-auto object-contain block xl:hidden"
      />

      {/* 💻 Desktop Image (Horizontal) */}
      <img
        src={desktopImg}
        alt={title}
        className="w-full h-auto object-contain hidden xl:block"
      />

    </div>

  </div>
);

/* ================= MAIN PAGE ================= */
const Placements = () => {
  const PLACEMENTS_BASE = "/placements";

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

  const studentHighlights = [
    `${PLACEMENTS_BASE}/students/Chandeep.webp`,
    `${PLACEMENTS_BASE}/students/Bhawika (1).png`,
    `${PLACEMENTS_BASE}/students/Piyush.png`,
    `${PLACEMENTS_BASE}/students/Akash-Change.webp`,
    `${PLACEMENTS_BASE}/students/Gurmanpreet-1.webp`,
    `${PLACEMENTS_BASE}/students/Arshdeep.webp`,
    `${PLACEMENTS_BASE}/students/Bhavna.webp`,
    `${PLACEMENTS_BASE}/students/Dhrub.webp`,
    `${PLACEMENTS_BASE}/students/Ipshita.webp`,
    `${PLACEMENTS_BASE}/students/Paras.webp`,
    `${PLACEMENTS_BASE}/students/Harsimran.webp`,
    `${PLACEMENTS_BASE}/students/Naman.webp`,
    `${PLACEMENTS_BASE}/students/japjeet.webp`,
    `${PLACEMENTS_BASE}/students/Kanaka.webp`,
    `${PLACEMENTS_BASE}/students/Yogesh.webp`,


  ];

  const coursePlacements = [
    {
      title: " MBA PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/MBA-1.jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/MBA-vertical.jpg`,
    },
    {
      title: "HM PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/Hm (2).jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/HM-vertical.jpg`,
    },
    {
      title: " BCOM PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/B-Com.jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/B-Com-vertical.jpg`,
    },
    {
      title: "CSE/IT PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/CSE (1).jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/CSE-vertical.jpg`,
    },
    {
      title: "FD PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/FD.jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/Fd-vertical.jpg`,
    },
    {
      title: "BAJMC PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/BJAMC-1 (1).jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/BJAMC vertical.jpg`,
    },
    {
      title: "BTTM PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/BTTM-1 (1).jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/BTTM vertical.jpg`,
    },
    {
      title: "PHARMACY PLACEMENTS",
      desktopImg: `${PLACEMENTS_BASE}/students/B-pharma.jpg`,
      mobileImg: `${PLACEMENTS_BASE}/students/B-PHAR vertical.jpg`,
    },
  ];

  return (
    <div className="bg-white font-sans">

      {/* Hero Section */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Placements
          </h1>
        </div>
      </section>

      {/* ================= RECRUITERS ================= */}
      <section className="py-10 bg-white overflow-hidden border-t">
        <h1 className="text-primary uppercase tracking-widest text-1xl font-bold text-center mb-10">
          Our Leading Partners
        </h1>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...recruiters, ...recruiters, ...recruiters].map((logo, i) => (
            <div
              key={i}
              className="mx-12 w-48 h-24 flex items-center justify-center font-bold"
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

      {/* ================= STUDENT HIGHLIGHTS ================= */}
      <section className="py-16 bg-gray-50 flex justify-center">
        <div className="max-w-6xl w-full px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {studentHighlights.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center h-full">
                  <img
                    src={img}
                    alt="Placement Highlight"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= COURSE PLACEMENTS ================= */}
      <section className="py-16">
        {coursePlacements.map((cp, idx) => (
          <CoursePlacement
            key={idx}
            title={cp.title}
            desktopImg={cp.desktopImg}
            mobileImg={cp.mobileImg}
          />
        ))}
      </section>

    </div>
  );
};

export default Placements;