import { Grid } from "@mui/material";
import { SpotifyPlayer } from "./sub-component/SpotifyPlayer";

export const Music = () => {
  return (
    <Grid pt={5} px={4} gap={4} id="music">
      <Grid
        item
        pb={1}
        sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
      >
        Music
      </Grid>
      <Grid
        item
        pb={2}
        sx={{
          textAlign: "left",
          color: "#f9f9f9d2",
          fontWeight: 200,
          lineHeight: 1.5,
        }}
      >
        I make music too! Here are some of my released work. I go by the alias,
        Omën.
      </Grid>
      <SpotifyPlayer />
    </Grid>
  );
};
