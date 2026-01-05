import ExperienceCard from "./ExperienceCard";
import "../styles/experience.scss"

const Experience = ()=>{
   
  const experienceCardNenufar = {
  logo: "src/assets/Logo-Nenufar.png",
  company: "Nenufar",
  period: "Mai 2023 - Août 2025",
  role: "Ingénieure informatique – Projet applicatif IoT",
  missions: ["Pilotage technique d’une solution métier de suivi à distance (capteurs IoT), de la conception à la mise en production",
  "Contribution à la conception fonctionnelle et à la structuration des flux métiers", "Développement d’interfaces web et d’API pour la collecte et l’exploitation des données",
"Gestion et structuration des données applicatives", "Participation à la mise en place des déploiements et au suivi des environnements"],
  stack : ["applications web", "API", "bases de données", "environnements Linux", "scripts Python"],
  outil: ["Vs Code", "Figma", "Miro"],
  bgColor: "red"
  }

  const experienceCardOmena = {
  logo: "src/assets/Logo-Omena.png",
  company: "Omena",
  period: "Septembre 2022- Mai 2023",
  role: "Développeuse Mobile React Native",
  missions: ["Développement et maintenance d’une application mobile orientée utilisateurs",
  "Contribution aux processus de déploiement continu et de suivi applicatif",
   "Analyse des usages via outils d’analytics et retours utilisateurs", "Participation aux tests et à l’amélioration de l’expérience utilisateur"],
  stack : ["application mobile", "CI/CD", "outils analytics", "bases de données"],
  outil: ["Vs Code", "Figma", "Mixpanel", "AppCenter"],
  bgColor: "BCE1E1"
  }

  const experienceCardFoodeals = {
  logo: "src/assets/Logo-Foodeals.png",
  company: "Foodeals",
  period: "Avril 2022- Juin 2022",
  role: "Développeuse Mobile Flutter",
  missions: ["Développement d’une application mobile dans un contexte de projet agile",
  "Participation aux phases de conception, développement et tests", "Travail collaboratif et itérations rapides selon les besoins fonctionnels"],
  stack : ["Flutter", "bases de données", "outils collaboratifs"],
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