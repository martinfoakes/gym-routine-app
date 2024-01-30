"use client";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import NavBar from "@/components/Nav/NavBar";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 38,
    },
    h2: {
      fontSize: 30,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

const RouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <ThemeProvider theme={theme}>
    <NavBar />
    <div className="sub-layout-child-container">{children}</div>
  </ThemeProvider>
);

export default RouteLayout;
