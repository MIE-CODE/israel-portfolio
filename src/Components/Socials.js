import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
// import { RiTwitterXLine } from "react-icons/ri";
import { Icon } from "@iconify/react";

const Socials = ({ display }) => {
  return (
    <aside
      data-aos="fade-up"
      className={`social ease-in duration-700 ${display} `}
    >
      <a
        className="socials"
        rel="noopener noreferrer"
        href="https://github.com/MIE-CODE"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        className="socials"
        rel="noopener noreferrer"
        href="www.linkedin.com/in/israelmenyaga"
        target="_blank"
      >
        <BiLogoLinkedin />
      </a>
      <a
        className="socials"
        rel="noopener noreferrer"
        href="https://x.com/M_I_E_CODE"
        target="_blank"
      >
        {/* <RiTwitterXLine /> */}
        <Icon icon="ri:twitter-x-fill" />
      </a>
      <div className="hidden lg:block w-px h-20 bg-primary-100"></div>
    </aside>
  );
};

export default Socials;
