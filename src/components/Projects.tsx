 
import "../styles/projects.scss";

const projects = [
  {
    title: "Site de gestion de Pokémon",
    year: "2025",
    description:
      "Développement d’un site fullstack avec React.js et Node.js pour gérer une base de données Pokémon. UI conçue sur Figma, interactions dynamiques, hébergement GitLab.",
    stack: ["React.js", "Node.js", "Figma", "GitLab"],
  },
  {
    title: "Plateforme de suggestions de recettes",
    year: "2024",
    description:
      "Projet Angular pour suggérer des recettes selon les ingrédients disponibles. Front dynamique, logique de filtrage avancée.",
    stack: ["Angular", "GitLab", "Typescript"],
  },
  {
    title: "Projet DevOps e-commerce",
    year: "2024",
    description:
      "Implémentation d’une CI/CD avec GitLab, déploiement sur AWS, dockerisation et surveillance d’un site e-commerce.",
    stack: ["GitLab CI", "AWS", "Docker"],
  },
  {
    title: "Application solidaire pour visites aux malades",
    year: "2025 – en cours",
    description:
      "Projet bénévole développé sous Flutter visant à organiser des visites à domicile pour les personnes malades. Travail sur l’architecture mobile, l’authentification, les redirections vers l'app",
    stack: ["Flutter", "Supabase", "Dart", "SMTP Server"],
  },
  {
    title: "Reconstruction d'images 3D en parcours recherche",
    year: "2024 - 2025",
    description:
      "Initialisation au parcours recherche autour de la reconstruction 3D par des méthodes basées IA Superpoint/Superglue, Python et OpenCV. Réalisé dans le cadre du parcours recherche à EPITA.",
    stack: ["Python", "OpenCV"],
  },
  {
    title: "Summer School – Ajman University (Émirats)",
    year: "2024",
    description:
      "Participation à une summer school en IA & cybersécurité à Ajman, avec des projets collaboratifs internationaux et ateliers techniques.",
    stack: ["AI", "Deep learning", "Machine learning","Collaboration internationale"],
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
  ...et de nombreux autres projets réalisés en autonomie, en équipe ou dans le cadre de mes études.
  </p>
      </div>
    </section>
  );
};

export default Projects;
