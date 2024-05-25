import React from "react";
import address from "./../assets/footer/address-svgrepo-com.svg";
import phone from "./../assets/footer/phone-call-svgrepo-com.svg";
import email from "./../assets/footer/email-svgrepo-com.svg";
import clock from "./../assets/footer/clock-svgrepo-com.svg";
function Footer() {
  return (
    <section id="Contact" className="bg-[#002334] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col items-center my-4">
          <div className="h-10 w-10 mb-3 border-none flex justify-center items-center bg-[#00e1b7] rounded-full">
            <img src={phone} className="w-5" loading="lazy" alt="phone" />
          </div>
          <h4 className="font-bold">Numero de telephone</h4>
          <a href="#" className="text-gray-300 hover:underline">
            +2120711223344
          </a>
        </div>

        <div className="flex flex-col items-center my-4">
          <div className="h-10 w-10 mb-3 border-none flex justify-center items-center bg-[#00e1b7] rounded-full">
            <img src={address} className="w-5" loading="lazy" alt="address" />
          </div>
          <h4 className="font-bold">Notre addresse</h4>
          <a
            target="_blank"
            className="text-center text-gray-300 hover:underline"
            href="#"
          >
             Tiznit
          </a>
        </div>

        <div className="flex flex-col items-center my-4">
          <div className="h-10 w-10 mb-3 border-none flex justify-center items-center bg-[#00e1b7] rounded-full">
            <img src={email} className="w-5" loading="lazy" alt="email" />
          </div>
          <h4 className="font-bold">Email</h4>
          <a
            target="_blank"
            href="mailto:younesbenhaga20@gmail.com"
            className="text-gray-300 hover:underline"
          >
            younesbenhaga20@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
