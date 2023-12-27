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
    validate: {
      notEmpty: {
        msg: 'userId is missing',
      },
    }
  },
  todoText: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Todo Item cannot be empty',
      },
    },
    unique: false
  },
  checked: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  paranoid: true,
});

export default Todo;