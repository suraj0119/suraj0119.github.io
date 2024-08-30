import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { amazonImg, cyberImg, noorShop } from "../assets";
import ProjectsLInks from "./ProjectsLInks1";
import ProjectsLInks1 from "./ProjectsLInks1";
import ProjectsLInks2 from "./ProjectsLInks2";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://t-matrix.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={amazonImg}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">T-METRIX</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
            T-METRIX helps us to track and manage our work time on different projects. It has provided us with a comprehensive 
            overview of how our time is allocated across various tasks. Its reporting features have been particularly helpful in
            providing us with valuable insights into our work patterns, which has resulted in increased efficiency and productivity.

            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>Netlify Deployment</li>
            </ul>
            <ProjectsLInks />
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://beet-pulse-music.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={cyberImg}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">beet-pulse-music</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
            Embarking on a mission to revolutionize the music streaming landscape, our team has set out to develop a cutting-edge, open-source
music streaming application. Leveraging our collective passion for music and technology, we aim to deliver a personalized and immersive
listening experience that rivals industry giants like YouTube and Spotify. Our platform will prioritize user engagement through
innovative features such as dynamic search, customizable playlists, and a detailed music player, all while ensuring robust
performance and user-friendly design. With a strong focus on state management, data persistence, and responsive UI, we are excited
to showcase our skills and create a unique space for music lovers worldwide.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>HTML5</li>
              <li>css3</li>
              <li>JavaScript</li>
              <li>Json Server</li>
              <li>Netlify Deployment</li>
            </ul>
            <ProjectsLInks1 link="https://beet-pulse-music.netlify.app/" />
          </div>
        </div>
        {/* Project Three */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://suraj0119.github.io/skytube/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={noorShop}
              alt="noorShop"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">SkTube YouTube Clone</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
            Invoice and Payment Tracker is a comprehensive web-based platform designed to simplify the management of invoices and payments. 
            This project provides users with features such as user authentication, invoice creation, customer management, invoice sending,
            payment tracking, a dashboard, and integration with popular payment gateways like PayPal and Stripe.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React</li>
              <li>css3</li>
              <li>javascript</li>
              <li>Json Server</li>
              <li>Netlify Deployment</li>
            </ul>
            <ProjectsLInks2 link="payment-tracker-rct104.netlify.app" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
