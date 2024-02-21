import { Link } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <nav
      className="nav-items"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "5px",
      }}
    >
      <Link
        component="button"
        className="nav-item"
        underline="none"
        to=""
        smooth={true}
        duration={500}
        offset={-50}
        sx={{ fontWeight: 100 }}
      >
        Home
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to=""
        smooth={true}
        duration={500}
        offset={-50}
        sx={{ fontWeight: 100 }}
      >
        About
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to=""
        smooth={true}
        duration={500}
        offset={-50}
        sx={{ fontWeight: 100 }}
      >
        Projects
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to=""
        smooth={true}
        duration={500}
        offset={-50}
        sx={{ fontWeight: 100 }}
      >
        Music
      </Link>
      <Link
        className="nav-item"
        component="button"
        underline="none"
        to=""
        smooth={true}
        duration={500}
        offset={-50}
        sx={{ fontWeight: 100 }}
      >
        Photos
      </Link>
    </nav>
  );
};
