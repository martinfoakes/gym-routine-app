"use client";
import { useRouter } from "next/navigation";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import ExpandIcon from "@mui/icons-material/Expand";
import CompressIcon from "@mui/icons-material/Compress";

import "./HomeButtons.scss";
import { Timer } from "@mui/icons-material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const HomeButtons = () => {
  const router = useRouter();
  const [loadingKey, setLoadingKey] = useState<string | undefined>();

  const buttonsMeta = [
    <LoadingButton
      key="push"
      loading={loadingKey === "push"}
      loadingPosition="center"
      onClick={() => {
        setLoadingKey("push");
        router.push("/push-day");
      }}
      variant="contained"
      className="button-comp"
      startIcon={<ExpandIcon />}
    >
      <Typography variant="h6" component="h6">
        {"Push Day"}
      </Typography>
    </LoadingButton>,
    <LoadingButton
      key="pull"
      loading={loadingKey === "pull"}
      loadingPosition="center"
      onClick={() => {
        setLoadingKey("pull");
        router.push("/pull-day");
      }}
      variant="contained"
      className="button-comp"
      color="secondary"
      startIcon={<CompressIcon />}
    >
      <Typography variant="h6" component="h6">
        {"Pull Day"}
      </Typography>
    </LoadingButton>,
    <LoadingButton
      key="interval"
      loading={loadingKey === "interval"}
      loadingPosition="center"
      onClick={() => {
        setLoadingKey("interval");
        router.push("/interval-timer");
      }}
      variant="contained"
      className="button-comp"
      color="warning"
      startIcon={<Timer />}
    >
      <Typography variant="h6" component="h6">
        {"Interval Timer"}
      </Typography>
    </LoadingButton>,
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
