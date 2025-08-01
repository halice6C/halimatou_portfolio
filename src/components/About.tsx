import "../styles/about.scss"

const About = () => {


  return (
<section id="about" className="about">
  <div className="about-card">
    <img src="/hali-photo.png" alt="Hali-Photo" className="profile-pic" loading="lazy"/>

    <h2>Halimatou CISSE</h2>
    <p className="subtitle">Développeuse Full Stack</p>

<p className="description">
  Passionnée par l'informatique en général, j’ai travaillé sur des projets web et mobile dans les domaines de l’e-santé, de l’e-commerce et des énergies renouvelables.
  Rigoureuse, autonome et axée sur l’expérience utilisateur, je recherche un poste de développeuse Full Stack en CDI ou CDD au sein d’une équipe agile et ambitieuse.
  <br /><br />
  📍<span className="location"> Basée à Paris, mais mobile et disponible partout en France.</span>
</p>


    <a href="#contact" className="contact-btn">Contactez-moi !</a>
  </div>
</section>

  );
};

export default About;
