const todos = [
  {
    username: "Nav",
    title: "Post 1"
  }
]

const getTodos = (req, res) => {
  res.json(todos);
}

export default getTodos;