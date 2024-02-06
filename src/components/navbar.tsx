import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  handleThemeSwitch: () => void;
  theme: string;
}

const socialLinks = [
  {
    id: "github",
    href: "https://github.com/So8oS",
    Icon: AiFillGithub,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/don_so8os/",
    Icon: AiOutlineInstagram,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/ahmadothman2000",
    Icon: AiOutlineLinkedin,
  },
];

const Navbar = ({ handleThemeSwitch, theme }: NavbarProps) => {
  const iconClassName =
    "h-6 w-6 text-darkBlue hover:text-gray-500 dark:text-[#FDECFB] dark:hover:text-gray-500 cursor-pointer";
  return (
    <div className="mb-12 flex w-full justify-between font-Poppins md:mb-24">
      <span className="cursor-pointer font-semibold">Ahmad Othman</span>
      {theme === "dark" ? (
        <BsFillSunFill className={iconClassName} onClick={handleThemeSwitch} />
      ) : (
        <MdDarkMode className={iconClassName} onClick={handleThemeSwitch} />
      )}

      <div className="flex items-center gap-2">
        {socialLinks.map(({ id, href, Icon }) => (
          <a
            key={id}
            href={href}
            className={iconClassName}
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
