import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioButtons: React.FC = (): JSX.Element => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <p>Normal radio buttons</p>

        <label htmlFor="success">Do:
        <input type='radio' id='success' name="oneLife" />
        </label>
        <label htmlFor="fail">Die:
        <input type='radio' id='fail' name="oneLife" />
        </label>

        <FormControlLabel control={<Radio />} label="FormControlLabel Radio" />

        <FormControl>
          <FormLabel required sx={{ color: "red", fontSize: "100" }}>
            Gender
          </FormLabel>
          <RadioGroup defaultValue="male">
            <FormControlLabel control={<Radio />} label="Male" value="male" />
            <FormControlLabel
              control={<Radio />}
              label="Female"
              value="female"
            />
            <FormControlLabel
              control={<Radio />}
              label="Others"
              value="others"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default RadioButtons;
