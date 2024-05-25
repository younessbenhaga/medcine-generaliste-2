import React from "react";
import famille from "./../assets/family-practice-svgrepo-com.svg";
import habitide_svg from "./../assets/services/nutrition-svgrepo-com.svg";
import blode_svg from "./../assets/services/blood-drop-svgrepo-com.svg";
import immune from "./../assets/services/maladie-auto-immune-1_11zon.webp";
import { motion } from "framer-motion";

function Services() {
  return (
    <section
      id="Services"
      className="p-4 overflow-hidden"
      style={{ backgroundImage: "linear-gradient(#f7f7f7, #f7f7f7)" }}
    >
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center font-bold text-3xl"
      >
        Nos services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border my-3 w-11/12 mx-auto pb-5 bg-white rounded-md shadow"
        >
          <div className="flex justify-center">
            <img
              src={famille}
              className="w-10"
              style={{ transform: "translate(0px,-16px)" }}
              loading="lazy"
              alt="famille"
            />
          </div>
          <h1 className="text-center font-bold mt-2 md:mt-4">
            Médecine de famille / Médecine Générale
          </h1>
          <p className="text-center mt-2 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut modi, et veritatis inventore dicta iusto assumenda ducimus doloribus sed facere! Dolores, expedita ut? Sit repudiandae pariatur fugit quibusdam ipsum.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border my-3 w-11/12 mx-auto pb-5 bg-white rounded-md shadow"
        >
          <div className="flex justify-center">
            <img
              src={habitide_svg}
              loading="lazy"
              className="w-10"
              style={{ transform: "translate(0px,-16px)" }}
              alt="habitide_svg"
            />
          </div>
          <h1 className="text-center font-bold mt-2 md:mt-4">
            Prise en charge des maladies chroniques
          </h1>
          <p className="text-center mt-2 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus nobis iusto provident esse quas repudiandae? Eveniet rerum, inventore facilis libero aspernatur quaerat exercitationem, beatae sequi neque enim maiores blanditiis.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border my-3 w-11/12 mx-auto pb-5 bg-white rounded-md shadow"
        >
          <div className="flex justify-center">
            <img
              src={immune}
              alt="immune"
              loading="lazy"
              className="w-10"
              style={{ transform: "translate(0px,-16px)" }}
            />
          </div>
          <h1 className="text-center font-bold mt-2 md:mt-4">
            Prise en charge des maladies auto-immunes
          </h1>
          <p className="text-center mt-2 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni maxime quos vitae facilis nam optio illo, maiores nihil accusantium nisi odio id tenetur in voluptates deleniti, modi, incidunt veritatis!
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border my-3 w-11/12 mx-auto pb-5 bg-white rounded-md shadow"
        >
          <div className="flex justify-center">
            <img
              src={blode_svg}
              loading="lazy"
              alt="blode_svg"
              className="w-10"
              style={{ transform: "translate(0px,-16px)" }}
            />
          </div>
          <h1 className="text-center font-bold mt-2 md:mt-4">
            Prise en charge de l'obésite et programmes de perte du gras
          </h1>
          <p className="text-center mt-2 px-2">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus, recusandae distinctio quia sed illum velit reiciendis sit minus natus blanditiis, repudiandae consequatur qui eligendi fuga minima cupiditate aliquam atque!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
