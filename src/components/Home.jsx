/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";

export const Home = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid p={5} pt={28}>
        <Grid item id="home" className="hero1 hero">
          Hi. My name is Noel Peña.
        </Grid>
        <Grid item className="hero2 hero">
          I am an enthusiast of art.
        </Grid>
        <Grid item className="quote">
          <p>
            "Hard work beats talent when talent doesn't work hard." - Tim Notke
          </p>
        </Grid>
      </Grid>
    </>
  );
};
