import { Link } from "react-router-dom";

import LogoGithub from "./icons/iconsSideBar/LogoGithub";
import LogoIcon from "./icons/iconsSideBar/LogoIcon";
import LogoLinkedin from "./icons/iconsSideBar/LogoLinkedin";
import LogoWhatsApp from "./icons/iconsSideBar/LogoWhatsApp";

import "../../customClasses.css";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-max h-[80%]">
        <Link to="/" className="cursor-pointer">
          <figure className="flex flex-col items-center gap-3 cursor-pointer">
            <LogoIcon />
            <span className="primaryColor comfortaa text-base font-bold">
              egeaPauletti.dev
            </span>
          </figure>
        </Link>
        <div className="flex flex-col items-center w-max h-max gap-7 cursor-pointer">
          <LogoGithub size="40" />
          <LogoLinkedin size="40" />
          <LogoWhatsApp size="40" />
        </div>
      </div>
    </>
  );
}
