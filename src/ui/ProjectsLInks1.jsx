import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

// const link = "https://t-matrix.netlify.app/"
const ProjectsLInks1 = () => {
  return (
    <div className="text-2xl flex items-center gap-4">
      <a
        href="https://github.com/alfaj7/SAP-Sultans_056"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href="https://youtu.be/KDzvVibYmgM"
        target="_blank"
      >
        <AiOutlineYoutube />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href="https://beet-pulse-music.netlify.app/"
        target="_blank"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectsLInks1;
