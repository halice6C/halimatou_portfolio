
import { Typewriter } from 'react-simple-typewriter';
import '../styles/hero.scss';

const Hero = () => {


  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bonjour, je suis <span className="name">        <Typewriter
                words={['Halimatou  Cissé']}
                loop={400000}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></span></h1>
        <h2><Typewriter
                words={['Développeuse full stack']}
                loop={400000}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></h2>
        <p>J'avance avec rigueur, honnêteté et passion, parce que je crois qu'on ne code pas seulement avec des compétences, mais avec des valeurs.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">Voir mes projets</a>
          <a href="/halimatou_portfolio/Halimatou_Cisse_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
