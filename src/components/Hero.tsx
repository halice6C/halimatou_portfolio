
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
                words={['Ingénieure informatique ']}
                loop={400000}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></h2>
        <p>Je conçois des solutions numériques fiables et utiles, avec une approche rigoureuse, orientée qualité et sens du service.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">Voir mes projets</a>
          <a href="/Halimatou_Cisse_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
