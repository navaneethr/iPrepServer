import { Todo } from "../../models/index.js";

const postTodos = async (req, res) => {
  try {
    // Body - {todoText, userId}
    await Todo.create({ todoText: req?.body?.todoText, userId: req.user.userId });
    const todoList = await Todo.findAll({
      where: {
        userId: req.user.userId
      }
    });
    res.json({ data: todoList, status: 200 });
  } catch (err) {
    res.json({ error: err, status: 500 });
  }

}

export default postTodos;