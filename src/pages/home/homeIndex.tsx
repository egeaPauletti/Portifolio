import { Link } from "react-router-dom";

import aboutIcon from "../../assets/navBar/aboutIcon.png";
import hardSkillsIcon from "../../assets/navBar/hardSkilsIcon.png";
import softSkillsIcon from "../../assets/navBar/softSkillsIcon.png";
import projectsIcon from "../../assets/navBar/projectsIcon.png";
import contactIcon from "../../assets/navBar/contactIcon.png";

import "./style.css";
import "../../styles/customClasses.css";

import { useState, useEffect } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
};

// Função Animação Digitando
const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="color-white text-9xl font-bold font-confortaa">
      {displayedText}
    </h1>
  );
};

function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center items-center absolute gap-10">
        {/* Texto de Apresentação */}
        <div
          className="flex flex-col gap-7 h-max w-max
        justify-center items-center"
        >
          <span className="color-white text-3xl font-bold helloIam animationSlideFromRight">
            Eae, eu sou
          </span>
          <TypingText text="{Gabriel Egea}" />
          <span className="color-green text-3xl text-end font-bold w-full animationSlideFromLeft">
            Um desenvolvedor<br></br>Front-End
          </span>
        </div>

        {/* NavBar */}
        <div className="w-max h-max animationSlideFromBottom">
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
      </div>
    </>
  );
}
export default Home;
