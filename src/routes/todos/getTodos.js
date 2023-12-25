const todos = [
  {
    username: "Nav",
    title: "Post 1"
  }
]

const getTodos = (req, res) => {
  res.json({ todos, user: req.user });
}

export default getTodos;