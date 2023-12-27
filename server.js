import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/utils/authenticatePostgres.js';
import register from './src/routes/authenticate/register.js'
import login from './src/routes/authenticate/login.js'
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
    if (process.env.ENV === 'dev') {
      console.log('-----> DB Synced')
      await sequelize.sync();
    }
  } catch (error) {
    console.log(error);
  }
})()

app.use(express.json());

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api-docs", // -> https:localhost:3000/api-docs
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);
app.post('/login', login)
app.post('/register', register)
// TODOS Routes
todoRoutes(app);

app.listen(3000);