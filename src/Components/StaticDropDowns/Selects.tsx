import { Padding } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Selects = () => {
  const [car, setCar] = useState<string>("");
  useEffect(() => {
    console.log("Cars ", car);
  }, [car]);

  return (
    <Box sx={{ width: "120px", padding: "8px" }}>
      <FormControl fullWidth id="dropdown-container">
        <InputLabel>Cars</InputLabel>
        <Select
          label="Cars"
          id="select"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        >
          <MenuItem value="endovour">Endevour</MenuItem>
          <MenuItem value="fortuner">Fortuner</MenuItem>
          <MenuItem value="crysta">Crysta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selects;
