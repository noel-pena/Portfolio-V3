import "./App.css";
import { Container, CssBaseline, ThemeProvider, Box } from "@mui/material";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Pictures } from "./components/Pictures";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { theme } from "./components/sub-component/theme";
import { useState, useEffect } from "react";
import { keyframes } from "@mui/system";
import { scroller } from "react-scroll";

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
      setAnimateHome(false);
    }, 1000);
  };

  const resetToHome = () => {
    setAnimateHome(false);
    setLoadComponents(false);
    setTargetSection("");
    window.scrollTo(0, 0);
  };

  const handleNavigateToSection = (section) => {
    setAnimateHome(true);
    setTimeout(() => {
      setLoadComponents(true);
      setAnimateHome(false);
      setTargetSection(section);
    }, 1000);
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
              opacity: 0,
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
