import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Pictures } from "./components/Pictures";
import { Music } from "./components/Music";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Pictures />
      <Music />
      <Footer />
    </>
  );
};
