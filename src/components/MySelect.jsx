import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MySelect = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Country/Religion</InputLabel>
      <Select {...props}>
        <MenuItem value={'US'}>United States</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;
