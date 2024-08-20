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
import { theme } from "./components/sub-component/theme";
import { useEffect, useRef, useState } from "react";

export const App = () => {
  const [loadComponents, setLoadComponents] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === false) {
          setLoadComponents(true);
        }
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Box ref={homeRef} sx={{ minHeight: "100vh" }}>
            {!loadComponents && <Home />}
          </Box>
          {loadComponents && (
            <Box>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Pictures />
              <Music />
            </Box>
          )}
          <Footer />
        </ThemeProvider>
      </Container>
    </>
  );
};
