import Sequelize from 'sequelize';
import { sequelize } from "../utils/authenticatePostgres.js";
import Todo from './Todos.js';

const User = sequelize.define('user', {
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      checkMandatory: (value) => {
        if (!value) {
          throw new Error("Fullname is a mandatory field");
        }
      },
      characterLength: (value) => {
        if (value && (value.length < 3)) {
          throw new Error("Your name must be atleast 3 characters long");
        }
      }
    }
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: {
        msg: 'Please enter your email',
      },
    }
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please enter your password',
      },
    }
  },
  verified: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  lastLogin: {
    type: Sequelize.DataTypes.DATE,
  }
}, {
  paranoid: true,
});

export default User;