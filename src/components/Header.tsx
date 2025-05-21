import '../styles/header.scss';
const Header = () => {
    return (
      <header className="header">
        <div className="logo">Mon Portfolio</div>
        <nav className="nav">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
