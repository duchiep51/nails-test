export const getBody = (props) => ({
  address_from: {
    name: "Nails A2Z",
    street1: "123 West Main Street",
    city: "Dallas",
    state: "TX",
    zip: "75208",
    country: "US",
    phone: "4691234567",
    email: "support@nailsa2z.com",
  },
  address_to: {
    ...props
  },
  parcels: [
    {
      length: "10",
      width: "8",
      height: "6",
      distance_unit: "in",
      weight: "1.2",
      mass_unit: "oz",
    },
    {
      length: "12",
      width: "28",
      height: "8",
      distance_unit: "in",
      weight: "7.6",
      mass_unit: "oz",
    },
    {
      length: "1.4",
      width: "0.6",
      height: "0.4",
      distance_unit: "ft",
      weight: "1",
      mass_unit: "lb",
    },
  ],
  async: false,
  carrier_accounts: ["4823122e77ab4686812eb476e31c9467"],
});
