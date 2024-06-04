import { VolumeUp } from "@mui/icons-material";
import { Box, Input, Slider } from "@mui/material";
import { useState } from "react";

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(1);
  const onMoveSlider = (e: Event, newValue: number | number[]) => {
    setSliderValue(typeof newValue === "number" ? newValue : 1);
  };

  console.log("sliderValue = ", sliderValue);
  return (
    <>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <VolumeUp />
        <Slider
          sx={{ marginLeft: "15px" }}
          min={2}
          max={300}
          value={sliderValue}
          onChange={onMoveSlider}
        ></Slider>
        <Input value={sliderValue} />
      </Box>
    </>
  );
};
export default SliderComponent;
