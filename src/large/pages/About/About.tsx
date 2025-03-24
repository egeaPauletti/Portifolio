import "./index.css";
import "../../../customClasses.css";

function About() {
  return (
    <div className="w-max h-max flex justify-center items-center relative -top-10">
      <div className="flex flex-col w-max h-max justify-center itens-center gap-5 primaryColor">
        <h1 className="txtTitle text-3xl font-bold animationSlideFromLeft">
          Sobre mim
        </h1>
        <p className="w-[900px] font-bold text-lg text-justify m-10px animationSlideFromBottom">
          Olá! Meu nome é Gabriel e sou apaixonado por tecnologia. Desde cedo,
          sempre fui fascinado por videogames e computadores, o que despertou em
          mim uma curiosidade profunda sobre como eram criados os jogos,
          programas e sites que eu usava. Com o tempo, esse interesse se
          aprofundou e, em minha jornada, realizei um curso de banco de dados e
          softwares, o que confirmou minha paixão pela área.
        </p>
        <p className="w-[900px] font-bold text-lg text-justify animationSlideFromBottom">
          Ao concluir o Ensino Médio, ingressei na faculdade de Análise e
          Desenvolvimento de Sistemas, o que consolidou ainda mais minha escolha
          profissional. A cada novo aprendizado, minha paixão pela programação
          cresce, e meu interesse em explorar diferentes áreas, como
          desenvolvimento web, mobile, automação e segurança, só aumenta.
        </p>
        <p className="w-[900px] font-bold text-lg text-justify animationSlideFromBottom">
          Atualmente, me especializo em HTML, CSS, JavaScript e ReactJS, sempre
          buscando aprimorar minhas habilidades e criar interfaces modernas,
          responsivas e intuitivas. Meu objetivo é desenvolver soluções
          eficientes e impactantes, sempre focando na experiência do usuário,
          acessibilidade e inovação. Sou apaixonado por desafios e estou
          constantemente em busca de novas tendências do mercado para aprimorar
          meu trabalho.
        </p>
      </div>
    </div>
  );
}
export default About;
