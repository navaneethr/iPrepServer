import 'dotenv/config'
import express from 'express';
import authenticateToken from './src/utils/authenticateToken.js';
import getTodos from './src/routes/todos/getTodos.js';
import { sequelize } from './src/utils/authenticatePostgres.js';

const app = express();
// Authenticate RDB
(async () => {
  try {
    await sequelize.authenticate();
    console.log('-----> DB Connected')
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }

})()

app.use(express.json());
app.get('/todos', authenticateToken, getTodos)
app.listen(3000);