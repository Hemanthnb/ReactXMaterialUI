import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type filmDataObj = {
  label: string;
  year: number;
};

type filmData = {
  top100Films: (filmDataObj | string)[];
};

const AutoComplete: React.FC<filmData> = ({ top100Films }) => {
  return (
    <Autocomplete
      // disablePortal
      // id="combo-box-demo"
      multiple
      // defaultValue={[top100Films[0], top100Films[1]]}
      // limitTags={2}
      options={top100Films}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.label
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />


  );
};

export default AutoComplete;
