import User from "./User.js";
import Todo from "./Todos.js";

User.hasMany(Todo, {
  foreignKey: 'userId'
});
Todo.belongsTo(User);

export { User, Todo };