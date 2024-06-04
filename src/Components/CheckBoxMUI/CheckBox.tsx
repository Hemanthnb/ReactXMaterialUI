import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteBorder } from "@mui/icons-material";

function CheckBox() {
  return (
    <div>
      <label htmlFor="browser-sec">Are u human ?</label>
      <Checkbox id="browser-sec" color="success" />
      <label htmlFor="default">Default checked</label>
      <Checkbox id="default" color="success" defaultChecked />
      <label htmlFor="default">Disabled</label>
      <Checkbox id="default" color="success" disabled />
    </div>
  );
}
// export default Checkbox

const AreUHuman: React.FC = (): JSX.Element => {
  const [marks, setMarks] = useState<number | undefined>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const handleAOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setMarks(value ? parseFloat(value) : undefined);
  };

  useEffect(() => {
    setIsDisabled(marks === undefined ? true : false);
    console.log("val", marks);
  }, [marks]);

  const [checkedId, setCheckedId] = useState<string[]>([]);

  const handleOnClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedId((prev) => [...prev, event.target.id]);
    } else {
      setCheckedId((prev) => prev.filter((ele) => ele != event.target.id));
    }
  };
  return (
    <>
      <Stack paddingY="10px">
        <TextField
          variant="outlined"
          label="Total Marks"
          type="number"
          value={marks ?? ""}
          onChange={handleAOnChange}
        />
      </Stack>

      <Stack direction="column" justifyContent="start">
        {/* Using formControlLabel so that we can provide a label to the Checkbox thanks to the FormControlLabel component.*/}
        <FormControlLabel
          control={<Checkbox disabled={isDisabled} />}
          label="FormControlLabel Disabled"
        />
        {/* Here we can see we can pass a arg true or false to boolean in CheckBox but not in Button */}
        {/* Here it is only disabled */}
        <label htmlFor="disabled+unchecked">
          Disabled + Unchecked:
          <Checkbox id="disabled" disabled={isDisabled} />
        </label>
        {/* Here it is only disabled + checked */}
        <label htmlFor="disabled+Checked">
          Disabled + Checked :
          <Checkbox id="disabled" disabled defaultChecked />
        </label>

        {/*If I use this like using normal label tag I was not getting 8 in 'required*' like this  */}
        {/* <label htmlFor="required">
          Disabled
          <Checkbox id="required" required />
        </label> */}

        <FormControlLabel control={<Checkbox />} required label="Required" />

        {/* We can Also use icons as checkbox*/}
        <span>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteIcon />}
            color="error"
          />
        </span>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <FormGroup defaultValue={"Women"}>
            <div>
              <FormControlLabel control={<Checkbox />} label="Men" />
            </div>
            <div>
              <FormControlLabel control={<Checkbox />} label="Women" />
            </div>
          </FormGroup>
        </FormControl>
      </Stack>

      <Box>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="one"
                  onChange={handleOnClick}
                  checked={checkedId.includes("one")}
                />
              }
              label="checked"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="two"
                  onChange={handleOnClick}
                  checked={checkedId.includes("two")}
                />
              }
              label="checked"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export { AreUHuman };
