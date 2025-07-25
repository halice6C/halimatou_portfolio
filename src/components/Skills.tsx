import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFlutter, SiTypescript } from 'react-icons/si';
import "../styles/skills.scss"

export const Skills = ()=>{
    return(
<section className="skills-section" id="skills">
  <h2>Compétences techniques</h2>
  <div className="skills-grid">
    <div>
      <h3>Développement</h3>
      <p>
        Vue.js, React.js, React Native, Node.js, Flutter, TypeScript, JavaScript, Java, Python, C, C++, C#, .NET, HTML, CSS, Android, Kotlin, JEE, Laravel, PHP, SASS, Vite, Vuetify, Bootstrap, Swift, Firebase, Supabase
      </p>
    </div>

    <div>
      <h3>Outils de développement</h3>
      <p>VS Code, IntelliJ IDEA</p>
    </div>

    <div>
      <h3>Contrôle de version</h3>
      <p>GitHub, GitLab</p>
    </div>

    <div>
      <h3>UI / UX Design</h3>
      <p>Figma, Adobe XD, Miro</p>
    </div>

    <div>
      <h3>DevOps</h3>
      <p>AWS, Docker, GitLab CI/CD, Terraform</p>
    </div>

    <div>
      <h3>Gestion de projet</h3>
      <p>Trello</p>
    </div>

    <div>
      <h3>APIs</h3>
      <p>REST, XML</p>
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
