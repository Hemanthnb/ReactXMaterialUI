import { Box } from "@mui/material";
import LeftContainer from "./LeftContainer";
import { useEffect, useState } from "react";
import ButtonsContaiuner from "./ButtonsContaiuner";
import RightContainer from "./RightContainer";
import { leftItemsType, rightItemsType } from "./shared/Types";

const data=[
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
    "List item 6",
    "List item 7",
    "List item 8",
  ]

const TransferListPart2: React.FC = (): JSX.Element => {
  const [leftItems, setLeftItems] = useState<leftItemsType[]>([]);
  const [rightItems, setRightItems] = useState<leftItemsType[]>([]);

  useEffect(() => {
    // setLeftItems([
    //   "List item 1",
    //   "List item 2",
    //   "List item 3",
    //   "List item 4",
    //   "List item 5",
    //   "List item 6",
    //   "List item 7",
    //   "List item 8",
    // ]);
  }, []);

  const handleLeftCheckBox = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id);
  };
  const handleRightCheckBox = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id);
  };

  const handleLeftShift = () => {
    
  };
  const handleRightShift = () => {};
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
        <LeftContainer
          leftItems={leftItems}
          handleLeftCheckBox={handleLeftCheckBox}
        />
        <ButtonsContaiuner
          handleLeftShift={handleLeftShift}
          handleRightShift={handleRightShift}
        />
        {/* <RightContainer
          rightItems={rightItems}
          handleRightCheckBox={handleRightCheckBox}
        /> */}
      </Box>
    </>
  );
};
export default TransferListPart2;
