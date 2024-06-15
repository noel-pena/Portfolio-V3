/* eslint-disable react/no-unescaped-entities */
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
    <Grid pt={5} px={3} gap={5} id="projects">
      <Grid
        item
        sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
      >
        Projects
      </Grid>
      <Grid
        item
        pt={1}
        sx={{
          textAlign: "left",
          color: "#f9f9f9d2",
          fontWeight: 200,
          lineHeight: 1.5,
        }}
      >
        "InterviewerAI" and "Todo List" take about 60 seconds to load for the
        first time as they are hosted through the free version of Render.com.
      </Grid>
      <div id="cards" style={{ paddingTop: "15px" }}>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">InterviewerAI</p>
            <a href="https://interviewerai.onrender.com/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/InterviewerAI">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
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
            <p className="card-icon">Commercial Site</p>
            <a href="https://jbcprofessional.com/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/Commercial-Portfolio-Site">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Todo List</p>
            <a href="https://todo-list-react-50js.onrender.com/">
              <LinkIcon
                className="links"
                sx={{ color: "gray", padding: "15px" }}
              />
            </a>
            <a href="https://github.com/noel-pena/Todo-List-React">
              <GitHubIcon
                className="links"
                sx={{ color: "gray", padding: "15px", paddingTop: "0px" }}
              />
            </a>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Python Snake Game</p>
            <a href="https://github.com/noel-pena/Snake-Game">
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
      </div>
    </Grid>
  );
};
