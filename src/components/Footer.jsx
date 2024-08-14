import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <hr className="line" />
      <Grid container p={4} spacing={1} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            color: "white",
            fontWeight: 500,
            fontSize: "10px",
            textAlign: { xs: "center", sm: "left" },
            marginTop: "10px",
            padding: { xs: "10px 0", sm: "0" }, // Ensure no extra padding is added
          }}
        >
          NPX | Copyright © {year}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "right" },
            padding: { xs: "10px 0", sm: "0" }, // Ensure no extra padding is added
          }}
        >
          <a aria-label="Link to GitHub" href="https://github.com/noel-pena">
            <GitHubIcon
              sx={{
                color: "gray",
                "&:hover": { color: "#4c5c9e" },
                marginRight: { xs: "5px", sm: "10px" },
              }}
            />
          </a>
          <a
            aria-label="Link to Instagram"
            href="https://www.instagram.com/i_am_omen/"
          >
            <InstagramIcon
              sx={{
                color: "gray",
                "&:hover": { color: "#4c5c9e" },
                marginRight: { xs: "5px", sm: "10px" },
              }}
            />
          </a>
          <a
            aria-label="Link to LinkedIn"
            href="https://linkedin.com/in/noel-pena-1138aa167"
          >
            <LinkedInIcon
              sx={{
                color: "gray",
                "&:hover": { color: "#4c5c9e" },
                marginRight: { xs: "5px", sm: "10px" },
              }}
            />
          </a>
          <a
            aria-label="Link to resume"
            href="https://cdn.noel-pena.com/Noel-Pena.pdf"
          >
            <FileDownloadIcon
              sx={{
                color: "gray",
                "&:hover": { color: "#4c5c9e" },
                marginRight: { xs: "5px", sm: "10px" },
              }}
            />
          </a>
          <a aria-label="Link to email" href="mailto:noel.pena@hotmail.com">
            <EmailIcon
              sx={{
                color: "gray",
                "&:hover": { color: "#4c5c9e" },
              }}
            />
          </a>
        </Grid>
      </Grid>
    </>
  );
};
