import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Container from "./Container";

function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    message: "",
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_fqbu7m8";
    const templateID = "template_cymix2e";
    const userID = "lDO3k9Dz2xuZ7P06d";

    const formDataWithAttachment = new FormData();
    formDataWithAttachment.append("companyName", formData.companyName);
    formDataWithAttachment.append("email", formData.email);
    formDataWithAttachment.append("message", formData.message);
    formDataWithAttachment.append("attachment", formData.attachment);

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            companyName: "",
            email: "",
            message: "",
            attachment: null,
          });
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
    >
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a1934] text-white py-10 px-14">
      {/* Left Side: GIF and Contact Info */}
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <img
          src="https://static.wixstatic.com/media/fa1267_8d5e4df280eb42f496d1c6544a8eee8b~mv2.gif"
          alt="Contact Animation"
          className="max-w-full h-auto rounded-lg shadow-lg mb-6"
        />
        {/* <div className="flex flex-col items-center">
          <div className="flex items-center text-white mb-3">
            <FaPhone className="mr-2 text-xl text-indigo-500" />
            <span className="text-lg">+91 9284157972</span>
          </div>
          <div className="flex items-center text-white mb-3">
            <FaEnvelope className="mr-2 text-xl text-indigo-500" />
            <span className="text-lg">surajkamble1319@gmail.com</span>
          </div>
          <div className="flex items-center text-white">
            <FaWhatsapp className="mr-2 text-xl text-green-500" />
            <span className="text-lg">+91 7972676259</span>
          </div>
        </div> */}
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 bg-[#1a2a3a] rounded-lg shadow-lg mx-4">
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            style={{ textAlign: "center" }}
          >
            <FaPaperPlane className="mr-2" style={{ textAlign: "center" }} /> Send Message
          </button>
        </form>
      </div>
    </div>
    </Container>
  );
}

export default Contact;
