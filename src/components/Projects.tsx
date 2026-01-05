 
import "../styles/projects.scss";

const projects = [
  {
    title: "Site de gestion de Pokémon",
    year: "2025",
    description:
      "Conception et développement d’une application fullstack permettant la gestion et la visualisation de données, avec une attention portée à l’UX, aux interactions dynamiques et au déploiement continu.",
    stack: ["React.js", "Node.js", "Figma", "GitLab"],
  },
  {
    title: "Plateforme de suggestions de recettes",
    year: "2024",
    description:
      "Projet Angular afin de proposer des recommandations pertinentes côté utilisateur..",
    stack: ["Angular", "GitLab", "Typescript", "API Rest"],
  },
  {
    title: "Projet DevOps e-commerce",
    year: "2024",
    description:
      "Mise en place d’une chaîne CI/CD complète pour un site e-commerce, incluant la dockerisation, le déploiement sur AWS et la supervision, dans une logique de fiabilité et d’automatisation.",
    stack: ["GitLab CI", "AWS", "Docker", "Terraform"],
  },
  {
    title: "Application solidaire pour visites aux malades",
    year: "2025 – en cours",
    description:
      "Développement d’une application mobile à vocation sociale visant à faciliter l’organisation de visites à domicile, avec un travail sur l’architecture applicative, l’authentification et la communication utilisateur.",
    stack: ["Flutter", "Supabase", "Dart", "SMTP Server"],
  },
  {
    title: "Reconstruction d'images 3D en parcours recherche",
    year: "2024 - 2025",
    description:
      "Projet de recherche autour de la reconstruction d’images 3D par des méthodes basées sur l’IA, mené dans un cadre académique, mettant en œuvre des algorithmes de deep learning et de traitement d’images.",
    stack: ["Python", "OpenCV"],
  },
  {
    title: "Summer School – Ajman University (Émirats)",
    year: "2024",
    description:
      "Participation à une summer school internationale en IA et cybersécurité, avec enseignement, travaux dirigés, évaluations et projets réalisés intégralement en anglais, dans un contexte collaboratif et technique.",
    stack: ["AI", "Deep learning", "Machine learning","Collaboration internationale", "Enseignement technique en anglais"],
  },
];


const Projects = () => {
  return (
    <section id="projets" className="projects-section">
      <h2>Projets académiques</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title} <span>({project.year})</span></h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
        <p className="more-projects">
  ...…ainsi que de nombreux autres projets menés en autonomie ou en collaboration, dans un cadre académique ou personnel.
  </p>
      </div>
    </section>
  );
};

export default Projects;
