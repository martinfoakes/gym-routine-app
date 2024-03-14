import { Home } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NavBar = ({ pageTitle }: { pageTitle?: string }) => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        component="nav"
        style={{
          backgroundColor: "#121212",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
          color: "#ffffff",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
          >
            <Home />
          </IconButton>
          {pageTitle && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pageTitle}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
