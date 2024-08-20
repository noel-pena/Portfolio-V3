import "./App.css";
import { Container, CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Pictures } from "./components/Pictures";
import { Music } from "./components/Music";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { theme } from "./components/sub-component/theme"; // Correctly import theme
import { useState, useEffect } from "react";
import { keyframes } from "@mui/system";
import { scroller } from "react-scroll";

// Define keyframes for swipe-left and fade-in animations
const swipeLeftKeyframes = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const fadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const App = () => {
  const [loadComponents, setLoadComponents] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);
  const [targetSection, setTargetSection] = useState("");

  const handleLoadComponents = () => {
    setAnimateHome(true);
    setTimeout(() => {
      setLoadComponents(true);
      setAnimateHome(false); // Optional: Reset animation state
    }, 1000); // Matches the animation duration
  };

  const resetToHome = () => {
    setAnimateHome(false);
    setLoadComponents(false);
    setTargetSection("");
    window.scrollTo(0, 0); // Reset scroll position to the top
  };

  const handleNavigateToSection = (section) => {
    setAnimateHome(true);
    setTimeout(() => {
      setLoadComponents(true);
      setAnimateHome(false);
      setTargetSection(section); // Set the target section to scroll to
    }, 1000); // Ensures the animation plays before jumping to the section
  };

  useEffect(() => {
    if (loadComponents && targetSection) {
      scroller.scrollTo(targetSection, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }
  }, [loadComponents, targetSection]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Header
          resetToHome={resetToHome}
          navigateToSection={handleNavigateToSection}
        />
        {!loadComponents && (
          <Box
            sx={{
              animation: animateHome
                ? `${swipeLeftKeyframes} 1s forwards`
                : "none",
              overflow: "hidden",
            }}
          >
            <Home onLoadMore={handleLoadComponents} />
          </Box>
        )}
        {loadComponents && (
          <Box
            sx={{
              animation: `${fadeInKeyframes} 1s forwards`,
              opacity: 0, // Start with hidden content
            }}
          >
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Pictures />
            <Music />
          </Box>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
