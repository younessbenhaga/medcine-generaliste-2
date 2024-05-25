import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function RendezVous() {
  

  return (
    <section
      className="overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(#f7f7f7, #f7f7f7)",
      }}
    >
      <div className="grid lg:grid-cols-3">
        {/* Les Horaires */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h2 className="font-bold text-center text-xl">Horaire d'ouverture</h2>
          <div className="py-7 sm:px-3">
            <table className="greenTable bg-white rounded-md overflow-hidden shadow">
              <thead className="bg-[#002334] text-gray-200">
                <tr className="">
                  <th></th>
                  <th colSpan="2" className="">
                    Matin
                  </th>
                  <th colSpan="2" className="">
                    Soir
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lundi</td>
                  <td>8:30</td>
                  <td>14:00</td>
                  <td>16:00</td>
                  <td>18:30</td>
                </tr>
                <tr className="bg-[#3d3d3d4b]">
                  <td>mardi</td>
                  <td>8:30</td>
                  <td>14:00</td>
                  <td>16:00</td>
                  <td>18:30</td>
                </tr>
                <tr>
                  <td>mercredi</td>
                  <td>8:30</td>
                  <td>14:00</td>
                  <td>16:00</td>
                  <td>18:30</td>
                </tr>
                <tr className="bg-[#3d3d3d4b]">
                  <td>jeudi</td>
                  <td>8:30</td>
                  <td>14:00</td>
                  <td>16:00</td>
                  <td>18:30</td>
                </tr>
                <tr>
                  <td>vendredi</td>
                  <td>8:30</td>
                  <td>14:00</td>
                  <td>16:00</td>
                  <td>18:30</td>
                </tr>
                <tr className="bg-[#3d3d3d4b]">
                  <td>samedi</td>
                  <td colSpan="4">Sur rendez-vous</td>
                </tr>
                <tr>
                  <td>dimanche</td>
                  <td colSpan="4">Fermé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Form Rendez Vous */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4"
          id="RendezVous"
        >
          <h2 className="font-bold text-center text-xl">
            Prendre un Rendez-Vous
          </h2>
          <div className="w-full mx-auto my-7 bg-white py-7 px-3 rounded-md shadow">
            <form >
              <div>
                <label
                  htmlFor="Nom"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Votre Nom
                </label>
                <input
                  type="text"
                  name="Nom"
                  id="Nom"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  name="Email"
                  id="Email"
                  placeholder="example@email.com"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Numero"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Numéro de téléphone
                </label>
                <input
                  name="Numero"
                  id="Numero"
                  placeholder="+2120711223344"
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Date"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Date de rendez-vous
                </label>
                <input
                  name="Date"
                  id="Date"
                  type="datetime-local"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <button className="bg-[#00e1b7] px-4 py-2 mt-5 rounded-3xl border-none">
                Prendre un rendez-vous
              </button>
            </form>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h2 className="font-bold text-center text-xl">Maps</h2>
          <div className="py-7 sm:px-3">
            <iframe
              className="rounded-md shadow border border-gray-300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55450.376249710665!2d-9.77172656902992!3d29.700968474859653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb479f80a0432e5%3A0x4de7b30202dab839!2sTiznit%2085000!5e0!3m2!1sfr!2sma!4v1715171120398!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "372px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
