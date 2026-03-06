import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Train, Bus, Navigation } from "lucide-react";

const Directions = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gray-900 text-white py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Directions to PCTE
        </motion.h1>
        <p className="text-gray-300 mt-3 text-lg">
          Reach PCTE Group of Institutes with ease
        </p>
      </section>

      {/* ================= LOCATION INFO ================= */}
      <section className="py-20 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Campus Location
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PCTE Group of Institutes is located on the Ludhiana–Ferozepur Road,
            near Baddowal Cantt, Punjab. The campus is well-connected by air,
            rail, and road, making it easily accessible from all major cities.
          </p>
        </motion.div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-10 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            title="PCTE Location Map"
            src="https://www.google.com/maps?q=PCTE%20Group%20of%20Institutes&output=embed"
            className="w-full h-[450px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* ================= HOW TO REACH ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-14">
            How to Reach PCTE
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* AIR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <Plane className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-3">
                By Air
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The nearest airport is <strong>Sahnewal Airport (Ludhiana)</strong>,
                approximately 25 km from the campus. Chandigarh International
                Airport is about 90 km away.
              </p>
            </motion.div>

            {/* RAIL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <Train className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-3">
                By Rail
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ludhiana Junction is the nearest railway station, well-connected
                to Delhi, Chandigarh, Amritsar, and other major cities.
              </p>
            </motion.div>

            {/* ROAD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <Bus className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-3">
                By Road
              </h3>
              <p className="text-gray-600 leading-relaxed">
                PCTE is located on NH-5 and is easily accessible via buses, taxis,
                and personal vehicles from Ludhiana city and nearby towns.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <Navigation className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Need Assistance?
          </h2>
          <p className="text-gray-700 mb-6">
            If you need help with directions or campus navigation, feel free to
            contact us. Our team will be happy to guide you.
          </p>

          <a
            href="https://www.google.com/maps?q=PCTE%20Group%20of%20Institutes"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-primary-dark transition"
          >
            Get Directions on Google Maps
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Directions;
