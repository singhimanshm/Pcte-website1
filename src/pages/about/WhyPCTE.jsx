import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Briefcase,
  Users,
  Building2,
  Star,
} from "lucide-react";

const whyStats = [
  {
    icon: Globe,
    value: "60+",
    label: "Countries Represented",
    color: "text-green-500",
  },
  {
    icon: Briefcase,
    value: "100%",
    label: "Placement Assistance",
    color: "text-blue-500",
  },
  {
    icon: Star,
    value: "25+",
    label: "Years of Excellence",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Successful Alumni",
    color: "text-red-500",
  },
];

const WhyPCTE = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-neutral-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Why PCTE?
        </h1>
      </section>

      {/* ================= SECTION 1: TRANSFORMING CAREERS ================= */}
      <section className="py-20 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] leading-tight">
              Successfully Transforming Careers For Over 25+ Years
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <p>
                Discover why PCTE Group of Institutes stands as a beacon of inclusive, diverse, and vibrant education in India. At PCTE, every student is welcomed into our tight-knit family and offered equal opportunities, irrespective of their background. Our dedication extends to fostering an inclusive environment that caters to students from all walks of life.
              </p>
              <p>
                The PCTE campus comprises two academic campuses and three conveniently located student accommodations. Our first campus serves as a hub for senior students specializing in Management and Commerce, while our second campus hosts classes primarily for freshmen and sophomores. Both campuses are replete with state-of-the-art infrastructure, bustling canteens, and cozy cafes—guaranteeing you never miss out on the fun side of college life.
              </p>
              <p>
                PCTE's breathtaking greenery is a staple feature of our college. The lush plants and well-maintained grounds create a tranquil, picturesque setting, enhancing your overall campus experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-center"
          >
            <img
              src="/whypcte/image1.jpg"
              alt="Students collaborating"
              className="w-full max-w-md h-auto shadow-xl rounded-sm block"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: GLOBAL LEADERS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 order-2 md:order-1 flex justify-center"
          >
            <img
              src="/whypcte/image2.jpg"
              alt="Students studying"
              className="w-full max-w-md h-auto shadow-xl rounded-sm block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:col-span-3 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] leading-tight">
              Successfully Nurturing Students Into Global Leaders
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <p>
                At PCTE, we are committed to molding students into global leaders. We offer a range of co-curricular activities tailored to every student's interests, whether they're fitness enthusiasts with our dedicated gym or aspiring media moguls with our mass media studio. Our on-campus Entrepreneurship cell, complete with business incubators, is geared towards nurturing budding entrepreneurs and their innovative ideas.
              </p>
              <p>
                Our annual cultural fest, "KOSHISH", is a marquee event that stirs excitement among students and staff alike. This interclass competition culminates in the awarding of a prestigious overall trophy to the team accumulating the most points.
              </p>
              <p>
                PCTE also provides an array of scholarships and fee concessions based on academic merit and other parameters. For more details, connect with our academic consultants today.
              </p>
              <p>
                Come, immerse yourself in the best B-school in North India and turn the page to a new chapter in your academic journey!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-center text-3xl font-semibold text-secondary mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PCTE at a Glance
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyStats.map((item, i) => {
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-secondary mb-16">
            What Makes PCTE Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                desc: "Industry-aligned curriculum delivered by highly qualified and experienced faculty.",
              },
              {
                icon: Building2,
                title: "World-Class Infrastructure",
                desc: "State-of-the-art labs, smart classrooms, libraries, and residential facilities.",
              },
              {
                icon: Briefcase,
                title: "Industry Exposure",
                desc: "Strong corporate connections, internships, industrial visits and live projects.",
              },
              {
                icon: Globe,
                title: "Global Exposure",
                desc: "International collaborations, exchange programs and multicultural campus.",
              },
              {
                icon: Users,
                title: "Student-Centric Culture",
                desc: "Mentorship, skill development, clubs, sports and cultural activities.",
              },
              {
                icon: Star,
                title: "Outstanding Placements",
                desc: "Consistent placement records with top recruiters across industries.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS LIFE ================= */}


    </div>
  );
};

export default WhyPCTE;
