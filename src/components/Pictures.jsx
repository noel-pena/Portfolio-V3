import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [500, 500, 500, 500, 500, 500];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Pictures = () => {
  const imageUrls = [
    "./img/building.jpg",
    "./img/venice.jpg",
    "./img/dunes.jpg",
    "./img/dolomites.jpg",
    "./img/snow.jpg",
    "./img/peak.jpg",
  ];

  return (
    <Grid
      pt={5}
      px={2}
      mx={1}
      ml={2}
      gap={5}
      justifyContent="center"
      id="pictures"
    >
      <Grid
        item
        sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
      >
        Photos
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
        If you like photograpy, here is a sample collection of my photos. For
        more, you can visit my
        <a
          href="https://www.instagram.com/i_am_omen/"
          style={{
            color: "#4c5c9e",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          {" "}
          Instagram
        </a>{" "}
        page.
      </Grid>
      <Box pt={2} sx={{ width: "auto", minHeight: 500 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
          {imageUrls.map((imageUrl, index) => (
            <Item
              key={index}
              sx={{
                height: heights[index],
                padding: "0px",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1);",
              }}
            >
              <img
                className="catalogue"
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  borderRadius: "2px",
                }}
              />
            </Item>
          ))}
        </Masonry>
      </Box>
    </Grid>
  );
};
