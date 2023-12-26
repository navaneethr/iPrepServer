import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/utils/authenticatePostgres.js';
import register from './src/routes/authenticate/register.js'
import login from './src/routes/authenticate/login.js'

const authApp = express();
// Authenticate RDB
(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log('-----> DB Connected')
})()

authApp.use(express.json());

authApp.post('/login', login)

authApp.post('/register', register)

authApp.listen(4000);