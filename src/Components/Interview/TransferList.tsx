import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TransferList = () => {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [checkedId, setCheckedId] = useState<number[]>([]);
  const [rightCheckedId, setRightCheckedId] = useState<number[]>([]);
  useEffect(() => {
    setLeftItems([
      "List item 1",
      "List item 2",
      "List item 3",
      "List item 4",
      "List item 5",
      "List item 6",
      "List item 7",
      "List item 8",
    ]);
  }, []);

  const handleLeftCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id);
    if (event.target.checked) {
      setCheckedId((prev) => [...prev, index]);
    } else {
      setCheckedId((prev) => prev.filter((id) => id !== index));
      console.log("removed index from left")
    }
  };

  const handleRightCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id);
    if (event.target.checked) {
      setRightCheckedId((prev) => [...prev, index]);
    } else {
      setRightCheckedId((prev) => prev.filter((id) => id !== index));
      console.log("removed index from right")
    }
  };

  const handleLeftShift = () => {
    setLeftItems((prev) => [
      ...prev,
      ...rightItems.filter((_, index) => rightCheckedId.includes(index)),
    ]);
    setRightItems((prev) =>
      prev.filter((_, index) => !rightCheckedId.includes(index))
    );
    setRightCheckedId([]);
  };

  const handleRightShift = () => {
    setRightItems((prev) => [
      ...prev,
      ...leftItems.filter((_, index) => checkedId.includes(index)),
    ]);
    setLeftItems((prev) =>
      prev.filter((_, index) => !checkedId.includes(index))
    );
    setCheckedId([]);
  };
  useEffect(() => {
    console.log(rightItems, "\n", leftItems);
    console.log("checkedId = ", checkedId);
  }, [rightItems, leftItems, checkedId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "50%",
          margin: "auto",
          border: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: "5px" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Left</FormLabel>
            <FormGroup>
              {leftItems.map((ele, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      id={`${index}`}
                      onChange={handleLeftCheckBox}
                      checked={checkedId.includes(index)}
                    />
                  }
                  label={`${ele} + ${checkedId.includes(index)}`}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
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
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Right</FormLabel>
            <FormGroup>
              {rightItems.map((ele, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      key={index}
                      id={`${index}`}
                      onChange={handleRightCheckBox}
                      checked={rightCheckedId.includes(index)}
                    />
                  }
                  label={ele}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
export default TransferList;
