import '../styles/header.scss';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { FaUser, FaLaptopCode, FaTools, FaBriefcase } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <header className="header">
        <div className="logo">
           <Typewriter
        words={['Halimatou - Développeuse Front-End', 'Halimatou - Développeuse Back-End', 'Halimatou - Développeuse Full Stack']}
        loop={400000}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
          <div className="burger-icon" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={toggleMenu} ><AiFillHome /></NavLink>
          <NavLink to="/about" onClick={toggleMenu}><FaUser/></NavLink>
          <NavLink to="/projects" onClick={toggleMenu}><FaLaptopCode/></NavLink>
          <NavLink to="/skills" onClick={toggleMenu}><FaTools/></NavLink>
          <NavLink to="/experience" onClick={toggleMenu}><FaBriefcase/></NavLink>
          <NavLink to="/contact" onClick={toggleMenu}><FiMail/></NavLink>
        </nav>
      </header>
    );
  };
  
  export default Header;
