import { Stack, Typography } from "@mui/material";
import MethodCard from "./MethodCard";
import { useState } from "react";

const ShippingMethod = ({ shippingMethods }) => {
  const [selectedValue, setSelectedValue] = useState(
    shippingMethods[0].servicelevel.name
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Stack>
      <Typography sx={{textAlign: 'center'}}>Shipping method</Typography>
      <Stack sx={{ border: "1px solid gray" }}>
        {shippingMethods?.map((method) => (
          <MethodCard
            key={method.servicelevel.name}
            methodAmount={method.amount}
            methodName={method.servicelevel.name}
            methodEstimatedDays={method.estimated_days}
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ShippingMethod;
