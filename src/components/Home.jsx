/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";

export const Home = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid pt={45} pb={50} id="home">
        <Grid item className="hero1 hero">
          Hi. My name is Noel Peña.
        </Grid>
        <Grid item pt={3} className="hero2 hero typewriter-text">
          I am an enthusiast of art.
        </Grid>
        <Grid item className="quote" p={3}>
          <p>
            "Hard work beats talent when talent doesn't work hard." - Tim Notke
          </p>
        </Grid>
      </Grid>
    </>
  );
};
