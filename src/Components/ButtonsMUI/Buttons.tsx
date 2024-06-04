import React, { FormEvent, useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import "./index.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const MyComponent: React.FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabled, setisDisabled] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setisDisabled(inputValue.trim().length === 0);
  }, [inputValue]);

  const formSubmission = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <Stack direction="column" spacing={2}>
      <form onSubmit={formSubmission}>
        <TextField
          label="Input"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Stack direction="row">
          <Button
            variant="contained"
            sx={{
              backgroundColor: isDisabled ? "grey" : "",
              "&:hover": {
                cursor: isDisabled ? "no-drop" : "pointer",
                backgroundColor: isDisabled ? "grey" : "",
              },
            }}
            type="submit"
          >
            Send
          </Button>
        </Stack>

        <Stack direction="row" paddingY="5px">
          <p>Other types of buttons : </p>
          <Button variant="outlined" href="https://google.com" target="_blank">
            outlined button
          </Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Stack>

        <Stack direction="row" paddingY="5px">
          <p>Based on color + message </p>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>

        <Stack
          direction="row"
          paddingY="5px"
          justifyContent="space-around"
          sx={{ backgroundColor: "#d3cfcf", height: "50px" }}
        >
          <Button size="small" variant="outlined">
            Small sized
          </Button>
          <Button size="medium" variant="outlined">
            Mid sized
          </Button>
          <Button size="large" variant="outlined">
            Large sized
          </Button>
        </Stack>

        <Stack direction='row' paddingY='10px' sx={{width:'50%'}} justifyContent='space-around'>
          <Button variant='contained' color='error' startIcon={<DeleteIcon/>}>Delete</Button>
          <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default MyComponent;
