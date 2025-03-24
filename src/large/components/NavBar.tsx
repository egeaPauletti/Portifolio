import { Link } from "react-router-dom";

import ProfileIcon from "./icons/iconsNavBar/ProfileIcon";
import BrainIcon from "./icons/iconsNavBar/BrainIcon";
import ToolsIcon from "./icons/iconsNavBar/ToolsIcon";
import CodeIcon from "./icons/iconsNavBar/CodeIcon";
import ContactIcon from "./icons/iconsNavBar/ContactIcon";

export default function NavBar() {
  return (
    <>
      <div>
        <ul className="flex gap-10">
          <li className="list-items">
            <Link to="/About">
              <figure className="flex gap-3 items-center">
                <ProfileIcon size="17" />
                Sobre Mim
              </figure>
            </Link>
          </li>
          <li className="list-items">
            <Link to="">
              <figure className="flex gap-3 items-center">
                <BrainIcon size="20" />
                Hard Skills
              </figure>
            </Link>
          </li>
          <li className="list-items">
            <Link to="">
              <figure className="flex gap-3 items-center">
                <ToolsIcon size="20" />
                Soft Skills
              </figure>
            </Link>
          </li>
          <li className="list-items">
            <Link to="">
              <figure className="flex gap-3 items-center">
                <CodeIcon size="25" />
                Projetos
              </figure>
            </Link>
          </li>
          <li className="list-items">
            <Link to="">
              <figure className="flex gap-3 items-center">
                <ContactIcon size="20" />
                Contato
              </figure>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
