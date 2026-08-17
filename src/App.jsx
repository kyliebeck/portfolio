import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useTheme from "./hooks/useTheme";
import useRevealOnScroll from "./hooks/useRevealOnScroll";

/**
 * The old multi-page routes now redirect to anchors on the single page.
 * <Navigate> updates the hash but does not scroll, so do that here.
 */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    // Wait a frame so the section has been laid out before measuring it.
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
  }, [hash]);

  return null;
}

function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const { isDark, toggleTheme } = useTheme();
  useRevealOnScroll();

  return (
    <Router>
      <ScrollToHash />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Legacy routes — keep old links and bookmarks working */}
        <Route path="/about" element={<Navigate to="/#top" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
