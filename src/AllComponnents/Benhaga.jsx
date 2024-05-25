import React from "react";
import profile from "./../assets/design-3.webp";
import { motion } from "framer-motion";

function Benhaga() {
  return (
    <section id="Medcin" className="bg-[#002334] overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-center text-2xl sm:text-4xl pt-4 lg:pt-7 playfair-display px-3"
      >
        À propos du Dr [Nom complet]
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-10/12 md:w-3/5"
            loading="lazy"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <p className="px-3  text-xl text-gray-300 py-6">
             <span className="font-bold">Dr [Nom complet]</span> est Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, natus. Ipsa quibusdam nulla ab voluptatibus sequi consequatur minima, fuga praesentium harum dolorum perferendis accusantium obcaecati quae debitis molestias consectetur deleniti?
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Benhaga;
