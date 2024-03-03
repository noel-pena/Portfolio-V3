import { Grid } from "@mui/material";

export const About = () => {
  return (
    <>
      <Grid pt={17} px={3} id="about">
        <Grid
          item
          sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
        >
          About
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
          I am a dynamic Full-Stack Developer with a keen eye for design and a
          solid command of HTML, CSS, and JavaScript. Proven history of creating
          visually appealing and user-friendly websites by translating design
          concepts into seamless, responsive interfaces. Adept at collaborating
          with cross-functional teams to deliver high-quality web solutions that
          enhance user experiences and align with business objectives. I code
          mainly in React.js. On my free time, I am a photographer and also do a
          lot of photo editing. I am a music producer on the side where I
          primarily work with virtual and live instruments. If you are
          interested in my work, please feel free to contact me. You may also
          download a copy of my resume through my cdn
          <a
            href="https://cdn.noel-pena.com/Noel-Pena.pdf"
            style={{
              color: "#4c5c9e",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            {" "}
            here.
          </a>
        </Grid>
      </Grid>
    </>
  );
};
