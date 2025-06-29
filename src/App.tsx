
import './App.css'
import About from './components/About';
import ContactForm from './components/contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </Router>
  )
}

export default App
