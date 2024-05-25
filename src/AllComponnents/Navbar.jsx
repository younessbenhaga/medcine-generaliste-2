import logo from "./../assets/logo-1.webp";
import React, { useState } from "react";
import { Link } from "react-scroll";
import menu from "./../assets/menu.svg";
import close from "./../assets/close.svg";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar principale */}
      <motion.nav
        className="bg-white border-gray-200"
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="Logo" loading="lazy" />
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap">
              Dr. [Nom]
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-gray-500 hover:underline"
            >
              +2120711223344
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <img src={close} loading="lazy" alt="close" />
              ) : (
                <img src={menu} loading="lazy" alt="menu" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu pour petit écran et ordinateur */}
      <motion.nav
        className={`bg-gray-50 ${isMenuOpen ? "block" : "hidden"} md:block`}
      >
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-col md:flex-row font-medium mt-0 space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse text-sm">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="text-gray-900 cursor-pointer hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="Cabinet"
                  smooth={true}
                  duration={600}
                  className="text-gray-900 cursor-pointer hover:underline"
                >
                  Cabinet
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="Services"
                  smooth={true}
                  duration={700}
                  className="text-gray-900 cursor-pointer hover:underline"
                >
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="Medcin"
                  smooth={true}
                  duration={700}
                  className="text-gray-900 cursor-pointer hover:underline"
                >
                  Medcin
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  to="RendezVous"
                  smooth={true}
                  duration={700}
                  className="text-gray-900 cursor-pointer hover:underline"
                >
                  Rendez-Vous
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Link
                  to="Contact"
                  smooth={true}
                  duration={700}
                  className="text-gray-900 cursor-pointer hover:underline"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
