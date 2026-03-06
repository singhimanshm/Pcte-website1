import React from "react";
import { motion } from "framer-motion";

const advisoryBoardMembers = [
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr.-Deepak-Vohra.jpg",
    name: "Mr. Deepak Vohra",
    title: "Former Ambassador of India to Mexico & South Sudan",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr.-M.C.-Munjal.jpg",
    name: "Mr. M.C. Munjal",
    title: "Managing Director, Majestic Auto Ltd.",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr.-Sachit-Jain.jpg",
    name: "Mr. Sachit Jain",
    title: "Executive Director - Vardhman Textiles Ltd.",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr.-Rajinder-Gupta.jpg",
    name: "Mr. Rajinder Gupta",
    title: "Chairman and Managing Director, Trident Group",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr.-J.R.-Singal.jpg",
    name: "Mr. J.R. Singal",
    title: "Managing Director, Eastman Cast & Forge Ltd.",
  },
];

const AdvisoryBoard = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO HEADER ================= */}
      <section className="bg-neutral-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Advisory Board
        </h1>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <p className="text-gray-700 leading-relaxed text-lg">
          The Advisory Board of PCTE consists of eminent personalities from
          industry and academia who contribute their expertise to guide
          institutional strategy, programs, and innovations for excellence.
        </p>
      </section>

      {/* ================= BOARD MEMBER CARDS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {advisoryBoardMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-secondary">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mt-2">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER SPACING ================= */}
      <section className="py-8"></section>

    </div>
  );
};

export default AdvisoryBoard;
