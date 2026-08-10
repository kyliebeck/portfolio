import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css'; // optional: global styles
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: remember user preference with localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Put the theme class on <html> so the background fills the whole viewport
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    document.documentElement.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Page Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

