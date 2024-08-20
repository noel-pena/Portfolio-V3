import { Grid, Box, IconButton } from "@mui/material";
import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = styled.div`
  background-color: transparent;
  border-radius: 0.75em;
  cursor: pointer;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #25212c;
  border: 1px solid #4c5c9e;
  border-radius: 3px;
  color: rgba(195, 195, 195);
  font-weight: 200;
  font-size: 12px;
  text-align: center;
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
        Some projects I've worked on. For more repos, you can visit my GitHub{" "}
        <a
          href="https://github.com/noel-pena"
          style={{
            color: "#4c5c9e",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          here.
        </a>
        <p>
          <span style={{ fontWeight: 500 }}>Note:</span> "InterviewerAI" and
          "Todo List" take about a minute to load for the first time because
          they are hosted through the free version of Render.com.
        </p>
      </Grid>
      <div id="cards">
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">InterviewerAI</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              React.js | Flask | Open AI
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to Interviewer AI app"
                href="https://interviewerai.onrender.com/"
              >
                <LinkIcon />
              </IconButton>
              <IconButton
                aria-label="Link to Interviewer AI GitHub repository"
                href="https://github.com/noel-pena/InterviewerAI"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Tipping App</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              React.js
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to Tipping app"
                href="https://noel-pena.github.io/Tipping-app/"
              >
                <LinkIcon />
              </IconButton>
              <IconButton
                aria-label="Link to Tipping app GitHub repository"
                href="https://github.com/noel-pena/Tipping-app"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Commercial Site</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              React.js
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to commercial site"
                href="https://jbcprofessional.com/"
              >
                <LinkIcon />
              </IconButton>
              <IconButton
                aria-label="Link to commercial site GitHub repository"
                href="https://github.com/noel-pena/Commercial-Portfolio-Site"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Todo List</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              React.js | Node.js | MongoDB
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to To Do List app"
                href="https://todo-list-react-50js.onrender.com/"
              >
                <LinkIcon />
              </IconButton>
              <IconButton
                aria-label="Link to To Do List app GitHub repository"
                href="https://github.com/noel-pena/Todo-List-React"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Python Snake Game</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              Python
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to Snake Game GitHub repository"
                href="https://github.com/noel-pena/Snake-Game"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <p className="card-icon">Code Assistant</p>
            <p className="stack" style={{ paddingBottom: "15px" }}>
              Python | Discord API | Open AI
            </p>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                aria-label="Link to Code Assisting Discord Bot GitHub repository"
                href="https://github.com/noel-pena/Code-Assisting-Discord-Bot"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </div>
        </Card>
      </div>
    </Grid>
  );
};
