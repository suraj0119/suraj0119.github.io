import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaBootstrap, FaJava, FaSass, FaLinux, FaGithub } from "react-icons/fa";
import { SiMui, SiPostgresql, SiRedis, SiFirebase, SiNextdotjs, SiSolidity, SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiNetlify } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import Container from "./Container";

function Skills() {
  return (
    <Container
    id="skills"

    >

    <div className="p-6 md:p-12" style={{ backgroundColor: '#0a1934', minHeight: '100vh' }}>
      {/* Tech Stack Section */}
      <div
        className="tech-stack shadow-md rounded-lg p-6 mb-12"
        style={{ margin: '1rem' }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-10">
          {[
            { icon: <IoLogoHtml5 className="text-4xl text-orange-600" />, key: "html5" },
            { icon: <FaCss3Alt className="text-4xl text-blue-600" />, key: "css3" },
            { icon: <DiJavascript1 className="text-4xl text-yellow-500" />, key: "javascript" },
            { icon: <DiReact className="text-4xl text-cyan-500" />, key: "react" },
            { icon: <DiNodejs className="text-4xl text-green-600" />, key: "nodejs" },
            { icon: <FaBootstrap className="text-4xl text-purple-600" />, key: "bootstrap" },
            { icon: <DiMongodb className="text-4xl text-green-800" />, key: "mongodb" },
            { icon: <DiMysql className="text-4xl text-blue-800" />, key: "mysql" },
            { icon: <DiGit className="text-4xl text-red-600" />, key: "git" },
            { icon: <FaJava className="text-4xl text-red-600" />, key: "java" },
            { icon: <FaSass className="text-4xl text-pink-600" />, key: "sass" },
            { icon: <SiPostgresql className="text-4xl text-blue-700" />, key: "postgresql" },
            { icon: <CgCPlusPlus className="text-4xl text-blue-800" />, key: "cplusplus" },
            { icon: <SiMui className="text-4xl text-blue-500" />, key: "mui" },
            { icon: <TbBrandGolang className="text-4xl text-blue-500" />, key: "golang" }
          ].map(({ icon, key }) => (
            <div
              key={key}
              className="tech-icons flex items-center justify-center bg-[#0a1930] p-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative"
              style={{ borderColor: '#8d8d8f', borderWidth: '1px', width: '80px', height: '80px' }}
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-aqua glow-effect opacity-0 hover:opacity-100 transition-opacity"
                style={{ boxShadow: '0 0 8px 2px #00FFFF' }}
              ></div>
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Tool Stack Section */}
      <div
        className="tool-stack shadow-md rounded-lg p-6"
        style={{ margin: '3rem' }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">Tool Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {[
            { icon: <FaLinux className="text-4xl text-white" />, key: "linux" },
            { icon: <SiVisualstudiocode className="text-4xl text-blue-500" />, key: "vscode" },
            { icon: <SiPostman className="text-4xl text-orange-600" />, key: "postman" },
            { icon: <SiSlack className="text-4xl text-purple-600" />, key: "slack" },
            { icon: <FaGithub className="text-4xl text-white" />, key: "github" },
            { icon: <SiNetlify className="text-4xl text-green-600" />, key: "netlify" },
            { icon: <SiVercel className="text-4xl text-blue-500" />, key: "vercel" }
          ].map(({ icon, key }) => (
            <div
              key={key}
              className="tech-icons flex items-center justify-center bg-[#0a1930] p-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative"
              style={{ borderColor: '#8d8d8f', borderWidth: '1px', width: '80px', height: '80px' }}
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-aqua glow-effect opacity-0 hover:opacity-100 transition-opacity"
                style={{ boxShadow: '0 0 8px 2px #00FFFF' }}
              ></div>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Skills;
