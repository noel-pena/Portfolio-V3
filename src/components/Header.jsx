import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export const Header = ({ resetToHome, navigateToSection }) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-items ${showBackground ? "with-background" : ""}`}>
      <Link
        component="button"
        className="nav-item"
        underline="none"
        to="home"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
        onClick={resetToHome}
      >
        Home
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to="about"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
        onClick={() => navigateToSection("about")}
      >
        About
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to="projects"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
        onClick={() => navigateToSection("projects")}
      >
        Projects
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to="XP"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
        onClick={() => navigateToSection("XP")}
      >
        XP
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to="pictures"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
        onClick={() => navigateToSection("pictures")}
      >
        Misc
      </Link>
    </nav>
  );
};
