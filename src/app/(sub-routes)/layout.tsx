"use client";

import { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import confetti from "canvas-confetti";

import NavBar from "@/components/Nav/NavBar";
import { toTitleCase } from "@/helpers/formatters";
import { useRouter } from "next/navigation";

const RouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [pageName, setPageName] = useState<string | undefined>("");
  const [completeBtnClick, setCompleteBtnClick] = useState(false);
  const router = useRouter();

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

        <Container
          sx={{
            padding: 2,
            justifyContent: "center",
            display: "inline-flex",
          }}
        >
          <Button
            sx={{
              padding: "8px 24px",
              borderRadius: "24px",
            }}
            variant="contained"
            color="success"
            size="large"
            disabled={completeBtnClick}
            disableFocusRipple
            onClick={() => {
              setCompleteBtnClick(true);
              confetti({
                particleCount: 200,
                startVelocity: 30,
                spread: 360,
                origin: {
                  x: Math.random(),
                  y: Math.random() - 0.2,
                },
              });

              setTimeout(() => {
                setCompleteBtnClick(false);

                router.push("/");
              }, 1000);
            }}
          >
            <Typography variant="h6" component="h6">
              {"Workout Complete!"}
            </Typography>
          </Button>
        </Container>
      </div>
    </>
  );
};

export default RouteLayout;
