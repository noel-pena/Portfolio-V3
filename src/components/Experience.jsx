import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Grid } from "@mui/material";

export const Experience = () => {
  return (
    <Grid pt={5} px={3} gap={5} id="XP">
      <Grid
        item
        sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
      >
        Experience
      </Grid>
      <Grid
        item
        pb={5}
        pt={1}
        sx={{
          textAlign: "left",
          color: "#f9f9f9d2",
          fontWeight: 200,
          lineHeight: 1.5,
        }}
      >
        Get to know my work background.
      </Grid>
      <VerticalTimeline lineColor="#201c25">
        <VerticalTimelineElement
          contentStyle={{
            border: "1px solid #ccc",
            backgroundColor: "#25212c",
            borderColor: "#4c5c9e",
            borderRadius: "3px",
            color: "white",
            fontWeight: 200,
            boxShadow: "0px 0px 0px #4c5c9e, 0px 0px 0px #4c5c9e",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #201c25",
            opacity: "0",
          }}
          date="2024 - present"
          iconStyle={{
            background: "#201c25",
            color: "#fff",
            boxShadow: "1px 1px 4px #4c5c9e, -1px -1px 4px #4c5c9e",
          }}
          icon={<HomeWorkIcon />}
          dateClassName={"date-text"}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: 300 }}
          >
            Full-stack Developer
          </h3>
          <h4 style={{ fontWeight: 200 }}>Masonite</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            border: "1px solid #ccc",
            backgroundColor: "#25212c",
            borderColor: "#4c5c9e",
            borderRadius: "3px",
            color: "white",
            fontWeight: 200,
            boxShadow: "0px 0px 0px #4c5c9e, 0px 0px 0px #4c5c9e",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #201c25",
            opacity: "0",
          }}
          date="2024 - 2024"
          iconStyle={{
            background: "#201c25",
            color: "#fff",
            boxShadow: "1px 1px 4px #4c5c9e, -1px -1px 4px #4c5c9e",
          }}
          icon={<HomeWorkIcon />}
          dateClassName={"date-text"}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: 300 }}
          >
            Technical Support Engineer
          </h3>
          <h4 style={{ fontWeight: 200 }}>ServiceNow</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "1px solid #ccc",
            backgroundColor: "#25212c",
            borderColor: "#4c5c9e",
            borderRadius: "3px",
            color: "white",
            fontWeight: 200,
            boxShadow: "0px 0px 0px #4c5c9e, 0px 0px 0px #4c5c9e",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #201c25",
            opacity: "0",
          }}
          date="2023 - present"
          iconStyle={{
            background: "#201c25",
            color: "#fff",
            boxShadow: "1px 1px 4px #4c5c9e, -1px -1px 4px #4c5c9e",
          }}
          icon={<HomeWorkIcon />}
          dateClassName={"date-text"}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: 300 }}
          >
            Freelance Web Developer
          </h3>
          <h4 style={{ fontWeight: 200 }}>NPX</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Grid>
  );
};
