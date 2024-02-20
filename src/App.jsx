import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
};
