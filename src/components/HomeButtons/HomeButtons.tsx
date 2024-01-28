"use client";
import { useRouter } from "next/navigation";
import { Box, Button, ButtonGroup } from "@mui/material";
import ExpandIcon from "@mui/icons-material/Expand";
import CompressIcon from "@mui/icons-material/Compress";

import "./HomeButtons.scss";

const HomeButtons = () => {
  const router = useRouter();

  const buttonsMeta = [
    <Button
      key="push"
      onClick={() => router.push("/push-day")}
      className="button-comp"
      startIcon={<ExpandIcon />}
    >
      {"Push Day"}
    </Button>,
    <Button
      key="pull"
      onClick={() => router.push("/pull-day")}
      className="button-comp"
      endIcon={<CompressIcon />}
      color="secondary"
    >
      {"Pull Day"}
    </Button>,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        size="large"
        aria-label="large button group"
        variant="contained"
        fullWidth
        style={{ width: 336, height: 64 }}
      >
        {buttonsMeta}
      </ButtonGroup>
    </Box>
  );
};

export default HomeButtons;
