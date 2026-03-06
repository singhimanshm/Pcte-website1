import React from "react";
import { motion } from "framer-motion";
import { Globe, Star, ChartBar, Trophy } from "lucide-react";

const nirfStats = [
  {
    icon: Globe,
    value: "Top Tier",
    label: "National Ranking Recognition",
    color: "text-blue-600",
  },
  {
    icon: Star,
    value: "Consistent",
    label: "Growth in Rankings",
    color: "text-yellow-500",
  },
  {
    icon: ChartBar,
    value: "High Scores",
    label: "Academic & Research Metrics",
    color: "text-green-500",
  },
  {
    icon: Trophy,
    value: "Institutional Trust",
    label: "Top Institutes Benchmarks",
    color: "text-red-500",
  },
];

const NIRF = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO TITLE ================= */}
      <section className="bg-neutral-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          NIRF at PCTE
        </h1>
      </section>

      {/* ================= INTRO + IMAGE ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="https://pcte.edu.in/wp-content/uploads/2023/07/nirf.jpg"
            alt="NIRF Rankings"
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
              National Institutional Ranking Framework (NIRF)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              PCTE participates in the National Institutional Ranking Framework
              (NIRF) conducted by the Ministry of Education, Government of
              India. NIRF provides a ranking structure for institutions based
              on parameters including Teaching, Learning & Resources, Research,
              Professional Practice, Graduation Outcomes and Inclusivity.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our consistent efforts in quality education, industry linkage,
              and research output have contributed to PCTE’s recognized
              position among reputed institutions across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= NIRF STATS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-center text-3xl font-semibold text-secondary mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            NIRF Evaluation Highlights
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {nirfStats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center"
                >
                  <Icon className={`w-10 h-10 mx-auto mb-4 ${item.color}`} />
                  <h3 className="text-2xl font-bold text-secondary mb-1">
                    {item.value}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TEXT CARD SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-3">
              Our Focus Areas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The NIRF evaluates institutions based on rigorous parameters
              focusing on teaching environment, research outcomes, professional
              practice, and inclusivity. At PCTE, we emphasize continuous
              improvement across all dimensions to ensure quality education and
              impactful student development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Research & Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our faculty and students are actively involved in research
              projects, publications, seminars and collaborations that enrich
              institutional knowledge and contribute to the academic community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Industry Engagement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              PCTE builds strong partnerships with industries, aiding student
              placements, internships, live projects and professional guidance
              aligned with NIRF benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-10">
            Campus & NIRF Journey Gallery
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "https://pcte.edu.in/wp-content/uploads/2023/07/nirf-gallery-1.jpg",
              "https://pcte.edu.in/wp-content/uploads/2023/07/nirf-gallery-2.jpg",
              "https://pcte.edu.in/wp-content/uploads/2023/07/nirf-gallery-3.jpg",
              "https://pcte.edu.in/wp-content/uploads/2023/07/nirf-gallery-4.jpg",
            ].map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt="NIRF Gallery"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NIRF;
