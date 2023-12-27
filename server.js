import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/utils/authenticatePostgres.js';
import todoRoutes from './src/routes/todos/index.js';
import swaggerUi from 'swagger-ui-express';
import { options as swaggerOptions } from './src/swagger/options.js';
import swaggerJsdoc from 'swagger-jsdoc';
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

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

// TODOS Routes
todoRoutes(app);

app.listen(3000);