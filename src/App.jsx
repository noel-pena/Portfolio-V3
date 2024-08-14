import "./App.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Pictures } from "./components/Pictures";
import { Music } from "./components/Music";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "gray",
        },
      },
    },
  },
});

export const App = () => {
  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Pictures />
          <Music />
          <Footer />
        </ThemeProvider>
      </Container>
    </>
  );
};
