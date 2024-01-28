"use client";
import { Box, Button, ButtonGroup } from "@mui/material";
import ExpandIcon from "@mui/icons-material/Expand";
import CompressIcon from "@mui/icons-material/Compress";

import "./HomeButtons.scss";

const buttons = [
  <Button key="push" className="button-comp">
    <ExpandIcon />
    {"Push Day"}
  </Button>,
  <Button key="pull" className="button-comp">
    <CompressIcon />
    {"Pull Day"}
  </Button>,
];

const HomeButtons = () => {
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
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default HomeButtons;
