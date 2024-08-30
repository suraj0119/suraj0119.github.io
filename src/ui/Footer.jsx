import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resume from "../../public/resume.pdf";

// Social links data
const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100009099156049" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@SurajKamble-tr9cp" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/suraj-kamble-sk/" },
  { icon: <FaGithub />, url: "https://github.com/suraj0119" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/suraj0119" }
];

// Footer component
const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ecbb6] hover:text-white duration-200 text-xl rounded-full border-2 border-[#4ecbb6] p-2 flex items-center justify-center"
                aria-label={`Follow on ${link.url}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center text-white mb-3">
            <FaEnvelope className="mr-2 text-xl text-indigo-500" />
            <span className="text-lg">surajkamble1319@gmail.com</span>
          </div>
          <div className="flex items-center text-white mb-3">
            <FaWhatsapp className="mr-2 text-xl text-green-500" />
            <span className="text-lg">+91 7972676259</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Suraj Kambale. All Rights Reserved.
          </p>
          <motion.a
            href="mailto:surajkamble1319@gmail.com"
            className="text-sm text-designColor hover:underline mt-2 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            surajkamble1319@gmail.com
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
