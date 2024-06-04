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
import { v4 as uuidv4 } from "uuid";
import { leftItemsType } from "./shared/Types";


export default function LeftContainer({
  leftItems,
  handleLeftCheckBox,
}: {
  leftItems: leftItemsType[]
  handleLeftCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Box sx={{ padding: "5px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Left</FormLabel>
        <FormGroup>
          {leftItems.map((ele, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox onChange={handleLeftCheckBox} id={uuidv4()} />}
              label={`${ele}`} //check about this
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
