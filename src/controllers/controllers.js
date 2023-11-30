import axios from "axios";
import {handleMagmaOrderRecieved} from "./eventHandlers.js";

export const getHello = async () => {
  try {
    const response = await axios.post(
      process.env.API_URL,
      {
        query: "query Query { getHello }",
        //variables: VARIABLES_OBJECT
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data); // Access the response data directly
    return response.data; // Return data for further processing if needed
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error or handle as needed
  }
};

export const handleWebhookByType = async (req, res) => {
  // Extract event type
  const eventType = req.body.event_type;

  // Switch statement to handle different event types
  switch (eventType) {
    case "MAGMA":
      handleMagmaOrderRecieved(req, res);
      break;

    // Handle bad webhook
    default:
      res.status(400).send("Unsupported event type.");
      break;
  }
};
