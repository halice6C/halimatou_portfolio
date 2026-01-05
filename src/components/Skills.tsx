
import "../styles/skills.scss"

export const Skills = ()=>{
    return(
<section className="skills-section" id="skills">
  <h2>Compétences techniques</h2>
  <div className="skills-grid">
    <div>
      <h3>Développement Applicatif</h3>
      <p>
      JavaScript / TypeScript, Python,Node.js-Express, Vue.js, React, HTML, CSS
      </p>
    </div>

    <div>
      <h3>Plateformes & DevOps</h3>
      <p>Docker, Gitlab CI/CD, Environnements Linux, Terraform, Cloud-AWS (Certification en cours)</p>
    </div>

    <div>
      <h3>Contrôle de version</h3>
      <p>GitHub, GitLab</p>
    </div>

    <div>
      <h3>Données et API</h3>
      <p>APIs REST, Bases de données relationnelles : PostgreSQL, MySQL, SQLite, Bases NoSQL : MongoDB</p>
    </div>

    <div>
      <h3>Outils & collaboration</h3>
      <p>Git (GitHub, GitLab), VS Code, IntelliJ IDEA, Trello</p>
    </div>

    <div>
      <h3>UX / conception (support)</h3>
      <p>Figma, Canva, Miro, UML, Merise</p>
    </div>

    <div>
      <h3>Bases de données</h3>
      <p>
        Relationnelles : MySQL, Oracle, SQLite, PostgreSQL<br />
        Non relationnelles : MongoDB, Firestore
      </p>
    </div>

    <div>
      <h3>Conception de base de données</h3>
      <p>UML, Merise</p>
    </div>
  </div> 
    </section>
    )}

    export default Skills;
