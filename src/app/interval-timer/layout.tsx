"use client";

import NavBar from "@/components/Nav/NavBar";
import { toTitleCase } from "@/helpers/formatters";
import { Container, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [pageName, setPageName] = useState<string | undefined>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname.split("/").pop();
      setPageName(toTitleCase(pathname?.replace(/-/g, " ")));
    }
  }, []);

  return (
    <>
      <NavBar pageTitle={pageName} />
      <div className="sub-layout-child-container">
        <Container className="workout-day-container">{children}</Container>
      </div>
    </>
  );
};

export default PageLayout;
