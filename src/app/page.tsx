import { Grid, Typography } from "@mui/material";
import HomeButtons from "@/components/HomeButtons/HomeButtons";
import "./page.scss";

const Home = () => (
  <main>
    <div className="wave-seperator">
      <div className="bg-image-container" />
    </div>
    <section className="main-section">
      <Grid container spacing={{ xs: 4, md: 6 }} textAlign="center">
        <Grid item xs={12} justifyContent="center" display="flex">
          <Typography variant="h4" component="h4">
            {"Workout Routines"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="center"
          flexDirection="column"
          display="flex"
        >
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontStyle: "italic" }}
              >
                {"Pick a workout day or build your own intervals"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <HomeButtons />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  </main>
);

export default Home;
