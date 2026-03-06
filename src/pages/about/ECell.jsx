import React from "react";
import { motion } from "framer-motion";

const ECell = () => {
  const incubationPrograms = [
    "Orientation and Motivation",
    "Opportunity Assessment",
    "Kickstarting the Entrepreneurial Campus",
    "Business Planning Workshops",
    "From Prototype to Commercialization",
    "Market Analytics",
    "Managing Entrepreneurship Finance",
    "Local Social Entrepreneurship"
  ];

  const activities = [
    "Three-day Idea Generation Boot Camps",
    "Inspirational sessions with startup leaders, termed \"Share My Story\"",
    "Startup Registration Workshops",
    "Workshops on Startup Taxation and GST",
    "Business Plan Presentations and Competitions",
    "Collaborative Workshops with government agencies such as NSIC and the Ministry of MSME.",
    "Patent Filing and IPR Workshops"
  ];

  const achievements = [
    {
      name: "CREDMATE",
      desc: "Secured funding worth 1 crore from Horses Stable, India's Leading Business Reality Show aired on MX Player and Good News Today."
    },
    {
      name: "MAD CHEF",
      desc: "Granted 17 Lakhs by the Ministry of Agriculture and Farmer's Welfare."
    },
    {
      name: "NAPPADS SOLUTIONS LTD.",
      desc: "Recognized as one of the top 5 ideas in Udyami Utsav (NITI Aayog), a finalist for a seed funding round at Advitiya IIT Ropar, and awarded a grant of Rs. 5 Lakhs from the Punjab Agri Business Standard incubator funded by the Ministry of Agriculture and Farmer Welfare."
    },
    {
      name: "MEAL BELL LTD.",
      desc: "Awarded a grant of Rs. 4.5 Lakhs plus incentives under the Launch Pad Program of IIT Ropar."
    },
    {
      name: "IM PUNJAB INNOVATION MISSION",
      desc: "Winners from the Fashion Designing Department and BCom Department received the 1st prize along with a cash prize worth Rs. 50,000."
    },
    {
      name: "ANNANT SOLUTIONS",
      desc: "Annant Solution is Indulged in the Manufacturing of Biodegradable Sanitary Napkins which not only save the environment but it is also a pocket friendly option for the women's Personal hygiene."
    },
    {
      name: "CESIM ELITE 2023",
      desc: "Garvit & Yuvakshi of B.Tech CSE First Year shine at CESIM ELITE 2023! They secured 3rd place at a National Level Business Simulation Competition organized by IIM Kashipur. A Prize Money of INR 12500/ is awarded to them. Total 1800 teams from Various IIMs/IIT's & other educational Institutions across India participated."
    },
    {
      name: "IECON 2024",
      desc: "E-Cell and Student Yashik Jain receiving grant for their startup At IECON 2024, a prestigious event akin to LPU's version of Shark Tank, E-Cell and Student Yashik Jain secured a grant of 75 lakhs for their innovative business startup aimed at sustainable sanitary pads. The event featured seven seasoned investors who evaluated and supported promising entrepreneurial ventures."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-neutral-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
          E-Cell at PCTE
        </h1>
      </section>

      {/* ================= NURTURING SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Nurturing students into leaders since 1999
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                The PCTE Entrepreneurship cell is a vibrant hub dedicated to nurturing nascent entrepreneurs. We furnish our ambitious students with the necessary opportunities to turn their innovative ideas into reality. PCTE's fully functional incubation cell, recognized by Startup Cell, Punjab & the Institute of Innovation under the Ministry of Education of India, delivers comprehensive training and knowledge at every crucial phase of the entrepreneurial journey—from idea conception to securing project funding.
              </p>
              <div className="pt-4">
                <h3 className="font-bold text-gray-800 mb-4">Key programs at the PCTE Incubation Center include:</h3>
                <ol className="space-y-2 list-decimal list-inside ml-2">
                  {incubationPrograms.map((program, idx) => (
                    <li key={idx} className="text-gray-600">{program}</li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative shadow-2xl overflow-hidden">
              <img
                src="/whypcte/naresh"
                alt="Incubation Center Workshop"
                className="w-full h-auto"
              />
              <div className="bg-[#8B0000] py-4 text-center">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide px-4">
                  Successfully evolving entrepreneurs for over 25+ years
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACTIVITIES SECTION ================= */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">
              Our Entrepreneurship cell hosts a diverse range of activities, including:
            </h2>
            <ul className="space-y-3">
              {activities.map((activity, idx) => (
                <li key={idx} className="text-gray-600 text-[15px] flex items-start">
                  <span className="mr-3 font-medium text-gray-800">{idx + 1}.</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium pt-4">
              To date, 4 PCTE-hatched startups have been selected for the angel funding.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-[#8B0000] pb-2 inline-block">
            Our startups have achieved commendable success:
          </h2>
          <div className="space-y-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <span className="mr-4 font-bold text-gray-800 text-lg">{idx + 1}.</span>
                <div>
                  <h3 className="font-bold text-gray-900 inline-block mr-2 uppercase tracking-wide">
                    {item.name}:
                  </h3>
                  <span className="text-gray-700 leading-relaxed text-[15px]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-12 text-sm">
            competition held at IIT Ropar. PCTE also currently hosts six startup incubatees.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ECell;
