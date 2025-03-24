import { useState, useEffect } from "react";

import NavBar from "../../components/NavBar";

import "../../../customClasses.css";

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
    <h1 className="primaryColor text-[800%] font-bold comfortaa">
      {displayedText}
    </h1>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col w-max h-max">
          <span className=" font-bold text-[200%] primaryColor helloIam animationSlideFromRight relative left-5">
            Eae, eu sou
          </span>
          <TypingText text="{Gabriel Egea}" />
          <span className="flex justify-end text-3xl text-end font-bold  secondColor animationSlideFromLeft relative right-5">
            Um desenvolvedor <br />
            Front-End
          </span>
        </div>
        <div className="animationSlideFromBottom">
          <NavBar />
        </div>
      </div>
    </>
  );
}
