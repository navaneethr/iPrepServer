import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/utils/authenticatePostgres.js';
import register from './src/routes/authenticate/register.js'
import login from './src/routes/authenticate/login.js'
import swaggerUi from 'swagger-ui-express';
import { authOptions as swaggerOptions } from './src/swagger/options.js';
import swaggerJsdoc from 'swagger-jsdoc';
const authApp = express();
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

authApp.use(express.json());

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
authApp.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

authApp.post('/login', login)
authApp.post('/register', register)

authApp.listen(4000);