"use client";

import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import NavBar from "@/components/Nav/NavBar";
import { toTitleCase } from "@/helpers/formatters";

const RouteLayout = ({
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

export default RouteLayout;
