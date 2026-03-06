import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Navigation, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Collaborations() {
  const partners = [
    {
      img: "https://pcte.edu.in/wp-content/uploads/2023/03/int-colab1.jpg",
      name: "International University",
      country: "USA",
    },
    {
      img: "https://pcte.edu.in/wp-content/uploads/2023/03/int-colab2.jpg",
      name: "Global Institute",
      country: "UK",
    },
    {
      img: "https://pcte.edu.in/wp-content/uploads/2023/03/int-colab3.jpg",
      name: "European University",
      country: "Germany",
    },
    {
      img: "https://pcte.edu.in/wp-content/uploads/2023/03/int-colab4.jpg",
      name: "Asia Pacific College",
      country: "Australia",
    },
  ];

  return (
    <div className="bg-white font-sans">

      {/* HERO */}
      <section className="bg-neutral-900 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold"
        >
          International Collaborations
        </motion.h1>
        <p className="text-gray-300 mt-3 text-lg">
          Global Partnerships | Exchange Programs | Research Tie-Ups
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Global Exposure at PCTE
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PCTE Group of Institutes promotes global education through
            international collaborations, student exchange programs,
            joint research initiatives, and cross-cultural learning.
          </p>
        </motion.div>
      </section>

      {/* PARTNER SLIDER */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Global Partners
        </h2>

        <div className="max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">{item.country}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Collaboration
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <Star className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Academic Exchange
            </h3>
            <p className="text-gray-700">
              Students and faculty participate in exchange programs,
              international workshops, and global research projects.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <Users className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Cultural Exposure
            </h3>
            <p className="text-gray-700">
              Students gain international exposure, cultural understanding,
              and global networking opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Navigation className="w-12 h-12 mx-auto text-primary mb-4" />
        <h2 className="text-3xl font-bold mb-3">
          Join Our Global Network
        </h2>
        <p className="text-gray-600 mb-6">
          For international programs and partnerships, connect with us today.
        </p>
        <a
          href="mailto:international@pcte.edu.in"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Contact International Office
        </a>
      </section>

    </div>
  );
}

export default Collaborations;
