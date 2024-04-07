import { Grid, Typography } from "@mui/material";
import HomeButtons from "@/components/HomeButtons/HomeButtons";
import "./page.scss";
import FooterInstall from "@/components/FooterInstall/FooterInstall";

const Home = () => (
  <main>
    <div className="main-container">
      <div className="bg-image-container" />
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
              <Grid item>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontStyle: "italic", pl: 1, pr: 1 }}
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

      <footer>
        <div className="footer-container">
          <FooterInstall />
        </div>
      </footer>
    </div>
  </main>
);

export default Home;
