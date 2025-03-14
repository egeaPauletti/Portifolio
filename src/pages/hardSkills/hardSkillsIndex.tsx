import htmlIcon from "../../assets/hardSkills/html.png";
import cssIcon from "../../assets/hardSkills/cssIcon.png";
import jsIcon from "../../assets/hardSkills/jsIcon.png";
import reactIcon from "../../assets/hardSkills/reactIcon.png";
import typeIcon from "../../assets/hardSkills/typeIcon.png";
import gitIcon from "../../assets/hardSkills/gitIcon.png";
import tailwindIcon from "../../assets/hardSkills/tailwindIcon.svg";
import phpIcon from "../../assets/hardSkills/phpIcon.png";
import apiIcon from "../../assets/hardSkills/apiIcon.png";
import mysqlIcon from "../../assets/hardSkills/mysqlIcon.png";
import "./index.css";

function HardSkills() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="txtTitle text-3xl font-bold animationSlideFromBottom">
        Minhas Hard Skills
      </h1>
      <div className="flex flex-col w-max h-max justify-center itens-center gap-15">
        <div className="flex gap-15 animationSlideFromLeft">
          <div className="cards corHtml">
            <img src={htmlIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">Html</span>
          </div>
          <div className="cards corCss">
            <img src={cssIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">Css</span>
          </div>
          <div className="cards corJs">
            <img src={jsIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">JavaScript</span>
          </div>
          <div className="cards corReact">
            <img src={reactIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">ReactJs</span>
          </div>
          <div className="cards corMySql">
            <img src={mysqlIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">MySql</span>
          </div>
        </div>
        <div className="flex gap-15 animationSlideFromRight">
          <div className="cards corTail">
            <img src={tailwindIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">Tailwindcss</span>
          </div>
          <div className="cards corPhp">
            <img src={phpIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">PhP</span>
          </div>
          <div className="cards corApi">
            <img src={apiIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">Api</span>
          </div>
          <div className="cards corGit">
            <img src={gitIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">Git</span>
          </div>
          <div className="cards corType">
            <img src={typeIcon} alt="icone Html" className="w-6 z-100" />
            <span className="font-bold text-lg z-100">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HardSkills;
