"use client";
import { useRouter } from "next/navigation";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import ExpandIcon from "@mui/icons-material/Expand";
import CompressIcon from "@mui/icons-material/Compress";

import "./HomeButtons.scss";
import { Timer } from "@mui/icons-material";

const HomeButtons = () => {
  const router = useRouter();

  const buttonsMeta = [
    <Button
      key="push"
      onClick={() => router.push("/push-day")}
      variant="contained"
      className="button-comp"
      startIcon={<ExpandIcon />}
    >
      <Typography variant="h6" component="h6">
        {"Push Day"}
      </Typography>
    </Button>,
    <Button
      key="pull"
      onClick={() => router.push("/pull-day")}
      variant="contained"
      className="button-comp"
      color="secondary"
      startIcon={<CompressIcon />}
    >
      <Typography variant="h6" component="h6">
        {"Pull Day"}
      </Typography>
    </Button>,
    <Button
      key="interval"
      onClick={() => router.push("/interval-timer")}
      variant="contained"
      className="button-comp"
      color="warning"
      startIcon={<Timer />}
    >
      <Typography variant="h6" component="h6">
        {"Interval Timer"}
      </Typography>
    </Button>,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        size="large"
        aria-label="large button group"
        sx={{
          width: "80%",
        }}
        className="button-group-home"
      >
        {buttonsMeta}
      </ButtonGroup>
    </Box>
  );
};

export default HomeButtons;
