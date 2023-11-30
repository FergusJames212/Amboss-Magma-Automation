import dotenv from 'dotenv-flow';
import express from 'express';
import { getHello, handleWebhookByType } from './controllers/controllers.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example API route using the getHello function from the controller
app.get('/api/hello', getHello);

// Endpoint to handle incoming webhook requests
app.post('/webhook', handleWebhookByType);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
