import { Link } from "react-router-dom";

import aboutIcon from "../assets/navBar/aboutIcon.png";
import hardSkillsIcon from "../assets/navBar/hardSkilsIcon.png";
import softSkillsIcon from "../assets/navBar/softSkillsIcon.png";
import projectsIcon from "../assets/navBar/projectsIcon.png";
import contactIcon from "../assets/navBar/contactIcon.png";

function Navbar() {
  return (
    <div className="w-max h-max animationSlideFromRight absolute right-20 top-30 z-100">
      <ul className="flex gap-10 items-center">
        <li>
          <Link to="/about" className="list-itens">
            <img src={aboutIcon} alt="Icone Sobre Mim" />
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link to="/hardskills" className="list-itens">
            <img src={hardSkillsIcon} alt="Icone Hard Skills" />
            Hard Skills
          </Link>
        </li>
        <li>
          <Link to="/softskills" className="list-itens">
            <img src={softSkillsIcon} alt="Icone Soft Skills" />
            Soft Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" className="list-itens">
            <img src={projectsIcon} alt="Icone Projects" />
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/contact" className="list-itens">
            <img src={contactIcon} alt="Icone Contato" />
            Contatos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
