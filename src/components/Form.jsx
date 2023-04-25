import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import MySelect from "./MySelect";
import axios from "axios";
import { getBody } from "./constants";
import ShippingMethod from "./ShippingMethod";
import * as yup from "yup";

const validationSchema = yup.object({
  country: yup.string().required("country is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City name is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zip code is required"),
  phone: yup.string().required("Phone is required"),
});

const Form = () => {
  const [shippingMethods, setShippingMethods] = useState([]);

  const initialValues = {
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    enableNewsAndOffers: false,
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://api.goshippo.com/shipments",
        {
          ...getBody({
            name: `${values.firstName} ${values.lastName}`,
            street1: values.address,
            city: values.city,
            state: values.state,
            zip: values.zipCode,
            country: values.country,
            phone: values.phone,
            email: "john@example.com",
          }),
        },
        {
          headers: {
            Authorization:
              "ShippoToken shippo_test_86dda5ed13316ea0b728d1e58f193ccee5fe873b",
          },
        }
      );

      setShippingMethods(response?.data?.rates);
    } catch (e) {
      console.log("error here", e);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Stack sx={{ width: "50%", margin: "20px auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <MySelect
            labelId="country"
            id="country"
            label="Country/Religion"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            gap={1}
          >
            <TextField
              variant="outlined"
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
            />
            <TextField
              variant="outlined"
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              fullWidth
            />
          </Box>
          <TextField
            variant="outlined"
            id="company"
            name="company"
            label="Company (optional)"
            value={formik.values.company}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            variant="outlined"
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            fullWidth
          />
          <TextField
            variant="outlined"
            id="apartment"
            name="apartment"
            label="Apartment, suit, etc, (optional)"
            value={formik.values.apartment}
            onChange={formik.handleChange}
            fullWidth
          />
          <Box sx={{ display: "flex" }} gap={1}>
            <TextField
              variant="outlined"
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state"
                id="state"
                label="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <MenuItem value="CA">California</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              id="zipCode"
              name="zipCode"
              label="ZIP code"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
              helperText={formik.touched.zipCode && formik.errors.zipCode}
              fullWidth
            />
          </Box>
          <TextField
            variant="outlined"
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            fullWidth
          />
          <Box sx={{ display: "flex" }}>
            <Checkbox
              value={formik.values.enableNewsAndOffers}
              onChange={formik.handleChange}
            />
            <p>Text me with news and offers</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="primary" variant="contained" type="submit">
              Calculate Shipping
            </Button>
          </Box>
        </Stack>
      </form>

      {Boolean(shippingMethods.length) && (
        <ShippingMethod shippingMethods={shippingMethods} />
      )}
    </Stack>
  );
};

export default Form;
