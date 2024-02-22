import { Grid } from "@mui/material";
import { SpotifyPlayer } from "./sub-component/SpotifyPlayer";

export const Music = () => {
  return (
    <Grid pt={5} px={4} gap={4}>
      <Grid
        item
        pb={1}
        id="music"
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
        Here is my discography for my alias Omën.
      </Grid>
      <SpotifyPlayer />
    </Grid>
  );
};
