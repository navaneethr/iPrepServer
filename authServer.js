import 'dotenv/config'
import express from 'express';
import { authenticatePostgres, sequelize } from './src/utils/authenticatePostgres.js';
import register from './src/routes/authenticate/register.js'
import login from './src/routes/authenticate/login.js'
import { syncUser } from './src/models/User.js';

const authApp = express();
// Authenticate RDB
authenticatePostgres();
if (process.env.ENV === 'dev') {
  // syncs all the models
  // syncUser()
}
authApp.use(express.json());

authApp.post('/login', login)

authApp.post('/register', register)

authApp.listen(4000);