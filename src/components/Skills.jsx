import { Grid2 as Grid } from "@mui/material";
import { WordBox } from "./sub-component/WordBox";

const inputText =
  "React.js JavaScript TypeScript Java Kotlin Vitest Vite Python Flask OpenAI•API HTML CSS Bootstrap Tailwind•CSS Git GitHub Node.js Express.js EJS APIs PostgreSQL MongoDB MySQL oauth Material•UI jQuery Cloud•deployment CloudFront S3•Bucket Route•53";

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
      <Grid gap={5} sx={{ pt: 5, px: 3}}>
        <Grid
          item
          sx={{ pb: 1, textAlign: "left", color: "#f9f9f9d2", fontSize: "24px" }}
        >
          Skills
        </Grid>
        <Word />
      </Grid>
    </>
  );
};
