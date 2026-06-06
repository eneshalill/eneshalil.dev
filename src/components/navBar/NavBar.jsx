import './navBar.css';
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const NavBar = ({ logo, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar-container">
      <div className="nav-content">
        
        {/* اللوجو */}
        <span className="nav-logo">{logo}</span>

        {/* أيقونة الهامبرغر للموبايل */}
        <FaBars
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* قائمة الروابط */}
        <ul className={`nav-links-list ${isMenuOpen ? "active-menu" : ""}`}>
          {items?.map((item, index) => (
            <li key={index}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70} /* تعديل مريح لتجنب قطش العناوين */
                duration={500}
                activeClass="active"
                className="nav-item"
                onClick={() => setIsMenuOpen(false)} /* تغلق عند اختيار قسم */
              >
                {item.content}
              </Link>
            </li>
          ))}

          {/* زر الوضع الليلي داخل القائمة (يظهر في الموبايل فقط) */}
          <li className="mobile-theme-item">
            <div className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <FaSun style={{ color: "#fbbf24", cursor: "pointer", fontSize: "22px" }} />
              ) : (
                <FaMoon style={{ color: "#1e293b", cursor: "pointer", fontSize: "22px" }} />
              )}
            </div>
          </li>
        </ul>

        {/* زر الوضع الليلي للشاشات الكبيرة (يختفي في الموبايل) */}
        <div className="theme-toggle desktop-theme" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <FaSun style={{ color: "#fbbf24", cursor: "pointer", fontSize: "22px" }} />
          ) : (
            <FaMoon style={{ color: "#1e293b", cursor: "pointer", fontSize: "22px" }} />
          )}
        </div>

      </div>
    </nav>
  );
};

export default NavBar;