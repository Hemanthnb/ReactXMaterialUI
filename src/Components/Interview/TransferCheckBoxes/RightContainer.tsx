import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

export default function RightContainer({
  rightItems,
  handleRightCheckBox,
}: {
  rightItems: string[];
  handleRightCheckBox: (event:React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Box sx={{ padding: "5px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Left</FormLabel>
        <FormGroup>
          {rightItems.map((ele, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox onChange={handleRightCheckBox} id={`${index}`} />
              }
              label={`${ele}`}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
