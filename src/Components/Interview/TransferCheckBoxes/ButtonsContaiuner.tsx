import React from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function ButtonsContaiuner({
  handleLeftShift,
  handleRightShift,
}: {
  handleLeftShift: () => void;
  handleRightShift: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Button variant="outlined" onClick={handleLeftShift}>
        <KeyboardArrowLeftIcon />
      </Button>
      <Button variant="outlined" onClick={handleRightShift}>
        <KeyboardArrowRightIcon />
      </Button>
    </Box>
  );
}
