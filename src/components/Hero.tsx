import { useTranslation } from 'react-i18next';
import '../styles/hero.scss';

const Hero = () => {


  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bonjour, je suis <span className="name">Halimatou Cissé</span></h1>
        <h2>Développeuse Web Fullstack</h2>
        <p>Passionnée, curieuse & toujours prête à relever de nouveaux défis.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">Voir mes projets</a>
          <a href="/Halimatou_Cisse_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
