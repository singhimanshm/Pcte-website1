import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Handshake,
  Award,
  Medal,
  GraduationCap,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "60+",
    label: "Countries",
    color: "text-green-500",
  },
  {
    icon: Handshake,
    value: "70+",
    label: "International Collaborations",
    color: "text-blue-500",
  },
  {
    icon: Award,
    value: "30+",
    label: "International & National Awards",
    color: "text-red-500",
  },
  {
    icon: Medal,
    value: "70+",
    label: "Gold Medals",
    color: "text-yellow-500",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO TITLE ================= */}
      <section className="bg-neutral-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Us
        </h1>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="https://pcte.edu.in/wp-content/uploads/2024/02/riak-1-1536x1024.jpg"
            alt="PCTE Campus"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Nurturing Students into Leaders Since 1999
            </h2>
            <p className="text-gray-600 leading-relaxed">
              PCTE Group of Institutes is one of the premier professional
              education institutions in North India. Approved by AICTE, PCI
              and affiliated to I.K. Gujral Punjab Technical University,
              PCTE offers programs in Engineering, Management, Pharmacy,
              Computer Applications, Hotel Management and Media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CULTURE SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">
              A Global Leader in Educational Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With students from more than 60 countries, PCTE offers a
              multicultural learning environment. Our focus is on academic
              excellence, industry exposure, innovation and global readiness.
            </p>
          </motion.div>

          <motion.img
            src="https://pcte.edu.in/wp-content/uploads/2024/02/FERNANDA-1-1536x1024.jpg"
            alt="Student Life"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ================= STATS / CARDS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-center text-3xl font-semibold text-secondary mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Education That Helps Students And Societies To Flourish
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-10 text-center"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-6 ${item.color}`} />
                  <h3 className="text-3xl font-bold text-secondary mb-2">
                    {item.value}
                  </h3>
                  <p className="text-gray-500">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US SPECIAL ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-secondary mb-16">
            What Makes Us Special?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "https://pcte.edu.in/wp-content/uploads/2024/02/consumer-hub-scaled.jpg",
                title: "Experiential Learning",
              },
              {
                img: "https://pcte.edu.in/wp-content/uploads/2024/02/FOOTBALL-2.jpg",
                title: "Sports & Culture",
              },
              {
                img: "https://pcte.edu.in/wp-content/uploads/2024/02/student-library-1-scaled.jpg",
                title: "Industry Exposure",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS LIFE GALLERY ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-12">
            Where Minds Meet, Culture Sparks & Passion Ignites
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "https://pcte.edu.in/wp-content/uploads/2024/02/STU-1-400x300.jpg",
              "https://pcte.edu.in/wp-content/uploads/2024/02/JOUR-1-400x300.jpg",
              "https://pcte.edu.in/wp-content/uploads/2024/02/MBA-400x300.jpeg",
              "https://pcte.edu.in/wp-content/uploads/2024/02/STU-4-400x300.jpg",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Campus Life"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
