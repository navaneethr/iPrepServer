import 'dotenv/config'
import express from 'express';
import authenticatePostgres from './utils/authenticatePostgres.js';
import register from './routes/authenticate/register.js'
import login from './routes/authenticate/login.js'

const app = express();
// Authenticate RDB
authenticatePostgres();

app.use(express.json());

app.post('/login', login)

app.post('/register', register)

app.listen(4000);