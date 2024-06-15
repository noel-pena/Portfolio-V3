import { Grid } from "@mui/material";
import { WordBox } from "./sub-component/WordBox";

const inputText =
  "React.js JavaScript Java Vite Python Flask OpenAI•API HTML CSS Bootstrap Tailwind•CSS Git GitHub Node.js Express.js EJS APIs SQL PostgreSQL MongoDB MySQL oauth Material•UI jQuery Cloud•deployment CloudFront S3•Bucket Route•53";

const Word = () => {
  return (
    <div className="App">
      <WordBox text={inputText} />
    </div>
  );
};
export const Skills = () => {
  return (
    <>
      <Grid pt={5} px={3} gap={5}>
        <Grid
          pb={1}
          item
          sx={{ textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
        >
          Skills
        </Grid>
        <Word />
      </Grid>
    </>
  );
};
