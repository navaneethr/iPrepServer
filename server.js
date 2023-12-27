import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/utils/authenticatePostgres.js';
import todoRoutes from './src/routes/todos/index.js';

const app = express();
// Authenticate RDB
(async () => {
  try {
    await sequelize.authenticate();
    console.log('-----> DB Connected')
  } catch (error) {
    console.log(error);
  }
})()

app.use(express.json());
// TODOS Routes
todoRoutes(app);

app.listen(3000);