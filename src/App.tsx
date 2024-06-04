import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextFieldMUI from "./Components/TextFieldMUI/TextFieldMui";
import TransferList from "./Components/Interview/TransferList";
import TransferListPart2 from "./Components/Interview/TransferCheckBoxes/TransferListpart2";
import { AreUHuman } from "./Components/CheckBoxMUI/CheckBox";
import CheckBoxWithSimilarId from "./Components/CheckBoxMUI/CheckBoxWithSimilarId";

const theme = createTheme({
  palette: {
    primary: {
      main: "#330099",
    },
  },
  typography: {
    fontFamily:"Dancing Script", // Specify the custom font
  },
});


const listOfCountries = [{ countryName: "India" }, { countryName: "Israel" }];

function App() {
  return (
    // <ThemeProvider theme={theme}>
      // <TextFieldMUI countries={listOfCountries} />
    // </ThemeProvider>
    <TransferList/>
    // <TransferListPart2/>
    // <AreUHuman/>
    // <CheckBoxWithSimilarId/>
  );
}

export default App;
