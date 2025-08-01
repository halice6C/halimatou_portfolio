
import './App.css'
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Experience from './components/Experience';


function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />

    </Routes>
  </Router>
  )
}

export default App
