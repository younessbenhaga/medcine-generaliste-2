import React from "react";
import image1 from "./../assets/Apropos/pro-1.webp";
import image2 from "./../assets/Apropos/pro-2.webp";
import image3 from "./../assets/Apropos/pro-3.webp";
import image4 from "./../assets/Apropos/pro-4.webp";
import image5 from "./../assets/Apropos/pro-5.webp";
import { motion } from "framer-motion";

function Apropos() {
  return (
    <section id="Cabinet" className="p-4 mt-11 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-bold text-3xl ps-8"
      >
        A propos du Cabinet
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 p-3 image-container">
        <motion.img
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          src={image1}
          loading="lazy"
          className="w-9/12 sm:w-2/3 lg:w-11/12 mx-auto my-4 rounded-xl"
          alt="image1"
        />
        <motion.img
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          src={image2}
          loading="lazy"
          className="w-9/12 sm:w-2/3 lg:w-11/12 mx-auto my-4 rounded-xl"
          alt="image2"
        />
        <motion.img
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
          src={image3}
          loading="lazy"
          className="w-9/12 sm:w-2/3 lg:w-11/12 mx-auto my-4 rounded-xl"
          alt="image3"
        />
        <motion.img
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          viewport={{ once: true }}
          src={image4}
          loading="lazy"
          className="w-9/12 sm:w-2/3 lg:w-11/12 mx-auto my-4 rounded-xl"
          alt="image4"
        />
        <motion.img
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          src={image5}
          loading="lazy"
          className="w-9/12 sm:w-2/3 lg:w-11/12 mx-auto my-4 rounded-xl"
          alt="image5"
        />
      </div>
    </section>
  );
}

export default Apropos;
