import '../styles/header.scss';
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaLaptopCode, FaTools, FaBriefcase } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
      <header className="header">
        <div className="logo">
           <Typewriter
 words={[
  'Halimatou – Ingénieure et experte informatique',
  'Halimatou – Projets applicatifs & plateformes',
  'Halimatou – Développement, DevOps & SI'
]}        loop={400000}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
        </div>
        <nav className="nav">
          <NavLink to="/" ><AiFillHome /></NavLink>
          <NavLink to="/about"><FaUser/></NavLink>
          <NavLink to="/projects"><FaLaptopCode/></NavLink>
          <NavLink to="/skills"><FaTools/></NavLink>
          <NavLink to="/experience"><FaBriefcase/></NavLink>
          <NavLink to="/contact"><FiMail/></NavLink>
        </nav>
      </header>
    );
  };
  
  export default Header;
