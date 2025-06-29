import '../styles/header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header className="header">
        <div className="logo">Mon Portfolio</div>
        <nav className="nav">
          <Link to="/" >Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
  };
  
  export default Header;
