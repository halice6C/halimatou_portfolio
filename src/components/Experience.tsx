import ExperienceCard from "./ExperienceCard";
import "../styles/experience.scss"

const Experience = ()=>{
   
  const experienceCardNenufar = {
  logo: "src/assets/Logo-Nenufar.png",
  company: "Nenufar",
  period: "Mai 2023 - Présent",
  role: "Développeuse Full Stack",
  missions: ["Pilotage technique d’une app Vue.js / Node.js (gestion capteurs IoT)",
  "Dev frontend réactif", "Conception d’APIs REST", "Gestion base de données SQLite"],
  stack : ["Vue.js", "Node.js", "Express", "SQL", "Raspberry Pi", "Python"],
  outil: ["Vs Code", "Figma", "Miro"],
  bgColor: "red"
  }

  const experienceCardOmena = {
  logo: "src/assets/Logo-Omena.png",
  company: "Omena",
  period: "Septembre 2022- Mai 2023",
  role: "Développeuse Mobile React Native",
  missions: ["Dev React Native",
  "Déploiement continu avec AppCenter",
   "Gestion analytics", "Tests utilisateurs"],
  stack : ["React Native", "TS", "Firebase", "MongoDB"],
  outil: ["Vs Code", "Figma", "Mixpanel", "AppCenter"],
  bgColor: "BCE1E1"
  }

  const experienceCardFoodeals = {
  logo: "src/assets/Logo-Foodeals.png",
  company: "Foodelas",
  period: "Avril 2022- Juin 2022",
  role: "Développeuse Mobile Flutter",
  missions: ["Dev React Native",
  "Dev Flutter pour une application e-commerce"],
  stack : ["Flutter", "Laravel", "Sqlite", "MySQL"],
  outil: ["Vs Code", "Adobe XD"],
  bgColor: "BCE1E1"
  }

  return (
    <section id="experience">
<p className="projects-intro">
  <h2>Expériences professionnelles</h2>
  
</p>

      <div className="projects">
        <ExperienceCard  {...experienceCardNenufar} />
        <ExperienceCard  {...experienceCardOmena} />
      
        <ExperienceCard {...experienceCardFoodeals} />
      </div>
 
 

    </section>
  );
};

export default Experience;