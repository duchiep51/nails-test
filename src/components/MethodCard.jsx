import { Box, Radio, Typography } from "@mui/material";

const MethodCard = ({
  methodName,
  methodEstimatedDays,
  methodAmount,
  selectedValue,
  handleChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingRight: "12px",
        borderBottom: "1px solid gray",
      }}
    >
      <Box sx={{ display: "flex", flex: 1 }}>
        <Radio
          checked={methodName === selectedValue}
          onChange={handleChange}
          value={methodName}
          name="radio-buttons"
          inputProps={{ "aria-label": methodName }}
        />
        <p>{methodName}</p>
        <p>
          ({methodEstimatedDays} business day
          {methodEstimatedDays > 1 ? "s" : ""})
        </p>
      </Box>
      <Typography sx={{ fontWeight: 600, margin: 'auto' }}>${methodAmount}</Typography>
    </Box>
  );
};

export default MethodCard;
