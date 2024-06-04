import { MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

type country = {
  countryName: string;
};

type listOfCounteries = {
  countries: country[];
};

const TextFieldMUI: React.FC<listOfCounteries> = ({
  countries,
}): JSX.Element => {
  const [country, setCountrty] = useState<string | null>("India");
  return (
    <>
        <Stack marginTop="10px">
          <Stack
            marginTop="5px"
            justifyContent="center"
            alignItems="center"
            paddingTop="60px"
            sx={{
              height: "150px", // Increased height for better visibility
              border: "1px solid black",
              overflowY: "auto",
              scrollbarWidth: "3px",
              width: "50%",
              margin: "auto",
              scrollbarColor: "red",
            }}
          >
            <TextField
              sx={{ width: "50%", marginBottom: "10px" }}
              label="Outlined"
              variant="outlined"
              color="success"
            />
            <TextField
              sx={{ width: "50%", marginBottom: "10px" }}
              label="Filled"
              variant="filled"
              color="secondary"
            />
            <TextField
              sx={{ width: "50%", marginBottom: "10px" }}
              label="Default"
            />
            <TextField
              sx={{ width: "50%", marginBottom: "10px" }}
              label="Standard"
              variant="standard"
              color="error"
            />
          </Stack>
        </Stack>

        <Stack marginTop="10px" sx={{ width: "50%" }}>
          <TextField
            label="Number"
            helperText="please Enter Number"
            placeholder="Integer Value"
            type="number"
          />
          <TextField label="email" helperText="Enter Email" type="email" />
        </Stack>

        <Stack sx={{ width: "50%", backgroundColor: "red" }}>
          <TextField
            label="Choose Country"
            select
            value={country ?? ""}
            onChange={(e) => setCountrty(e.target.value)}
          >
            {countries.map((country) => (
              <MenuItem value={country.countryName}>
                {country.countryName}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
    </>
  );
};

export default TextFieldMUI;
