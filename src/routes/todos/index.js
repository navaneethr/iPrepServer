import authenticateToken from '../../utils/authenticateToken.js';
// Route Handlers
import getTodos from './get.js';
import postTodos from './post.js';
import putTodos from './put.js';
import deleteTodos from './delete.js';

const todoRoutes = (app) => {
  app.post('/todos', authenticateToken, postTodos)
  // Get all Todos by the User
  app.get('/todos', authenticateToken, getTodos)
  // Get Todo by todoId
  app.get('/todos/:todoId', authenticateToken, getTodos)
  // Update Todo
  app.put('/todos/:todoId', authenticateToken, putTodos)
  // Delete Todo
  app.delete('/todos/:todoId', authenticateToken, deleteTodos)
}

export default todoRoutes;