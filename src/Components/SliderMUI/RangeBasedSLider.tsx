import { Slider } from "@mui/material";
import { useState } from "react";

const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState<number[]>([20, 80]);

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRangeValue(newValue);
    }
  };

  return (
    <div>
      <Slider
        value={rangeValue}
        onChange={handleRangeChange}
        aria-labelledby="range-slider"
        min={0}
        max={100}
      />
      <p>Range Value: {rangeValue[0]} - {rangeValue[1]}</p>
    </div>
  );
};

export default RangeSlider;
