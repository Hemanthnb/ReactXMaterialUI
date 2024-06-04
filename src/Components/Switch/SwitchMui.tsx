import { Box, FormControlLabel, FormLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const SwitchMui: React.FC = (): JSX.Element => {
  const [mode, setMode] = useState<string>("Light");

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Switch  defaultChecked />
      <FormControlLabel
        control={
          <Switch
            
            onChange={(e) =>
              e.target.checked ? setMode("Dark") : setMode("Light")
            }
          />
        }
        label={mode}
      />
    </Box>
  );
};
export default SwitchMui;
