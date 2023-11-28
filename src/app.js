import dotenv from 'dotenv-flow';
import express from 'express';
import { getHello } from './controllers.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example API route using the fetchData function from the controller
app.get('/api/hello', getHello);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
