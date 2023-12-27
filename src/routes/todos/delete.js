import { Todo } from "../../models/index.js";

const deleteTodos = async (req, res) => {
  try {
    // Body - {todoId}
    if (req?.params?.todoId) {
      const todo = await Todo.findOne({
        where: {
          userId: req.user.userId,
          todoId: req?.params?.todoId,
        }
      });
      await todo.destroy();
      res.json({ data: { message: 'Deleted Todo' }, status: 200 });
    } else {
      res.json({ data: { message: 'Network Error' }, status: 500 });
    }
  } catch (err) {
    res.json({ error: err, status: 500 });
  }

}

export default deleteTodos;