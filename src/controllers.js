import axios from 'axios';

  export const getHello = async () => {
    try {
      const response = await axios.post(
        process.env.API_URL,
        {
          query: 'query Query { getHello }',
          //variables: VARIABLES_OBJECT
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log(response.data); // Access the response data directly
      return response.data; // Return data for further processing if needed
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error or handle as needed
    }
  };
