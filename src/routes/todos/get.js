import { Todo } from "../../models/index.js";

const getTodos = async (req, res) => {
  const findByTodoId = req?.params?.todoId && { todoId: req.params.todoId };
  let whereClause = {
    userId: req.user.userId,
  };
  if (findByTodoId) {
    whereClause = { ...whereClause, ...findByTodoId }
  }
  try {
    // Body - {todoText, userId}
    const todoList = await Todo.findAll({
      where: whereClause
    });
    res.json({ data: todoList, status: 200 });
  } catch (err) {
    res.json({ error: err, status: 500 });
  }
}

export default getTodos;