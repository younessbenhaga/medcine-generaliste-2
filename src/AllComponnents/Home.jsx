import React from "react";
import homeImg from "./../assets/picture.webp";
import waves from "./../assets/wave.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Home() {
  return (
    <motion.section
      id="Home"
      className="md:p-4"
      initial={{ visibility: "hidden", y: 30 }}
      animate={{ visibility: "visible", y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="md:rounded-3xl p-3 grid grid-cols-1 md:grid-cols-2 relative Home-sect1 mx-auto"
        style={{ backgroundColor: "#f0f1ed" }}
      >
        <img
          src={waves}
          loading="lazy"
          className="absolute bottom-0 w-full md:rounded-b-3xl z-0"
          alt="waves"
        />

        <div className="ps-2 md:ps-6 lg:ps-12 z-10">
          <motion.h1
            className="text-6xl md:text-8xl pt-4 lg:pt-7"
            initial={{ visibility: "hidden", x: -100 }}
            animate={{ visibility: "visible", x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenue chez Dr [Nom]
            <span className="circle-txt" loading="lazy">
              [prenom]
            </span>
          </motion.h1>
          {/* <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl pt-9 lg:pt-8 playfair-display">
            We're restoring the home as the primary place of care
          </h2> */}
          <motion.p
            className="mt-8 text-gray-600"
            initial={{ visibility: "hidden", x: 100 }}
            animate={{ visibility: "visible", x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            aspernatur distinctio illum eius natus, enim qui quasi nostrum,
            reprehenderit consequatur, deserunt corporis cumque harum. Saepe
            quis animi necessitatibus aperiam quibusdam.
          </motion.p>
          <motion.button
            className="rounded-3xl border-none p-3 mt-2"
            style={{ backgroundColor: "#00e1b7" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="RendezVous"
              smooth={true}
              duration={500}
              style={{ padding: "30px" }}
            >
              Prendre un rendez-vous
            </Link>
          </motion.button>
        </div>
        <div className="z-10">
          <motion.img
            initial={{ visibility: "hidden", y: 100 }}
            animate={{ visibility: "visible", y: 40 }}
            transition={{ duration: 0.5 }}
            src={homeImg}
            loading="lazy"
            className="home_image mx-auto rounded-2xl"
            alt="Home Image"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
