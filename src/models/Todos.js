import Sequelize from 'sequelize';
import { sequelize } from "../utils/authenticatePostgres.js";

const Todo = sequelize.define('todo', {
  todoId: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  todoText: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  checked: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  paranoid: true,
});

export default Todo;