import { Todo } from "../../models/index.js";

const putTodos = async (req, res) => {
  try {
    // Body - {todoText}
    const todo = await Todo.findOne({
      where: {
        userId: req.user.userId,
        todoId: req.params.todoId,
      }
    });
    const todoTextBody = req?.body?.todoText ? { todoText: req?.body?.todoText } : {};
    const checkedBody = typeof req?.body?.checked === 'boolean' ? { checked: req?.body?.checked } : {};
    await todo.update({ ...checkedBody, ...todoTextBody });
    res.json({ data: todo, status: 200 });
  } catch (err) {
    res.json({ error: err, status: 500 });
  }

}

export default putTodos;