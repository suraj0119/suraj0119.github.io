import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/suraj0119",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/@SurajKamble-tr9cp",
    icon: <SlSocialYoutube />,
    delay: 0.85,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/suraj-kamble-sk/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/profile.php?id=100009099156049",
    icon: <SlSocialFacebook />,
    delay: 0.95,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/suraj0119",
    icon: <SlSocialInstagram />,
    delay: 1,
  },
];
const SocialLInks = ({ className }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-5", className)}>
      {socialAccounts?.map((item) => (
        <motion.a
          key={item?.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: item?.delay, ease: "easeIn" }}
          href={item?.link}
          target="blank"
        >
          <span className="w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-zinc-500 hover:border-designColor text-lightText hover:text-designColor duration-200 hover:bg-black">
            {item?.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLInks;
