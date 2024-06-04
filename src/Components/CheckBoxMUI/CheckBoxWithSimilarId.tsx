import { Checkbox, FormControlLabel } from "@mui/material"

const CheckBoxWithSimilarId=()=>{
    return(
        <>
        <FormControlLabel control={<Checkbox id='index'/>} label='CheckBox 1 + '/>
        <FormControlLabel control={<Checkbox id='index'/>} label='CheckBox 2'/>
        </>
    )
}
export default CheckBoxWithSimilarId;