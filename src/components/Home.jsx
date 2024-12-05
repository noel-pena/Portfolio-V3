/* eslint-disable react/prop-types */
import { Grid2 as Grid, Box, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Home = ({ onLoadMore }) => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", textAlign: "center" }}
        id="home"
      >
        <Grid>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Grid className="hero1 hero">
              Hi. I'm Noel
            </Grid>
            <Grid sx={{pt: 3}} className="hero2 hero typewriter-text">
              Full stack web dev.
            </Grid>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{pt: 3}}>
            <IconButton
              variant="contained"
              color="primary"
              onClick={onLoadMore}
              sx={{ width: 60, height: 60, borderRadius: "50%" }}
            >
              <ArrowForwardIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
