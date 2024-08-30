import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectsLink = ({ link }) => {
  return (
    <div className="text-2xl flex items-center gap-5">
      <a
        className="hover:text-designColor duration-300"
        href="suraj0119.github.io/skytube/"
        target="_blank"
      >
        <TbBrandGithub />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href="https://youtu.be/WzMtRfzkP-Q"
        target="_blank"
      >
        <AiOutlineYoutube />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href={link}
        target="_blank"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectsLink;
