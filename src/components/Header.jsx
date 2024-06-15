import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export const Header = () => {
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
    <nav
      className={`nav-items ${showBackground ? "with-background" : ""}`}
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   justifyContent: "center",
      //   alignContent: "center",
      //   padding: "1rem",
      //   gap: "5px",
      // }}
    >
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
      >
        About
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
      >
        XP
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
      >
        Projects
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
      >
        Photos
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to="music"
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        style={{ fontWeight: 100 }}
      >
        Music
      </Link>
    </nav>
  );
};
