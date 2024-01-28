import HomeButtons from "@/components/HomeButtons/HomeButtons";
import "./page.scss";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div className="wave-seperator">
        <div className="bg-image-container" />
      </div>
      <section className="main-section">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          columns={{ xs: 1 }}
          textAlign="center"
        >
          <Grid item xs={12} justifyContent="center" display="flex">
            <Typography variant="h4" component="h4">
              {"Workout Routine Walkthroughs"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent="center"
            flexDirection="column"
            display="flex"
          >
            <Typography variant="h6" component="h6">
              {"Pick a workout day to get started!"}
            </Typography>

            <HomeButtons />
          </Grid>
        </Grid>
      </section>
    </main>
  );
}
