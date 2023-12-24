import express from 'express';
import authenticateToken from './utils/authenticateToken.js';
import getTodos from './routes/todos/getTodos.js';

const app = express();

app.use(express.json());

app.get('/todos', authenticateToken, getTodos)

app.listen(3000);