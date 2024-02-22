import { Grid } from "@mui/material";
import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = styled.div`
  background-color: transparent;
  border-radius: 0.75em;
  cursor: pointer;
  height: 200px;
  position: relative;
`;

export const Projects = () => {
  return (
    <Grid pt={5} px={3} gap={5}>
      <Grid
        item
        id="projects"
        sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
      >
        Projects
      </Grid>
      <div id="cards" style={{ paddingTop: "15px" }}>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Tipping App</p>
            <a href="https://noel-pena.github.io/Tipping-app/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/Tipping-app">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Blogging App</p>
            <a href="https://logger-z7gq.onrender.com">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/-Logger">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Random Quote</p>
            <a href="https://random-programmer-quote-generator.onrender.com/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/Random-Programmer-Quote-Generator">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Simon Game</p>
            <a href="https://noel-pena.github.io/Simon-game-jQuery/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/Simon-game-jQuery">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Note Taking App</p>
            <a href="https://github.com/noel-pena/Todo-List">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">More at GitHub</p>
            <a href="https://github.com/noel-pena">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
      </div>
    </Grid>
  );
};
