import axios from "axios";

export const handleMagmaOrderRecieved = async (req, res) => {
    const variablesObject = {
        getOrderId: req.body.payload.order_id
    }
    console.log("magma order recieved:", variablesObject);
  // Logic to handle retrieving the seller invoice amount
  try {
    const response = await axios.post(
      process.env.API_URL,
      {
        query: `query GetOrder($getOrderId: String!) {
            getOrder(id: $getOrderId) {
                seller_invoice_amount
            }`,
        variables: variablesObject
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data); // Access the response data directly, containing the invoice amount
    return response.data; // Return data for further processing if needed
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error or handle as needed
  }
};
