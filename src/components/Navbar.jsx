import { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from "./ToggleSwitch";
import './css/Navbar.css';



function Navbar({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    Kylie Beck
                </Link>

                <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                </div>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills" onClick={closeMenu}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" onClick={closeMenu}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>

                    {/* Dark Mode Toggle Button */}
                    <ToggleSwitch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        label={darkMode ? "Dark Mode" : "Light Mode"}
                    />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;