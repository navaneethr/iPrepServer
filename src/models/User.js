import Sequelize from 'sequelize';
import { sequelize } from "../utils/authenticatePostgres.js";

const User = sequelize.define('user', {
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  full_name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  verified: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  last_login: {
    type: Sequelize.DataTypes.DATE,
  }
});

export const syncUser = () => {
  User.sync({ alter: true }).then(() => {
    console.log('Sync Users Table Success');
  }).catch((err) => {
    console.log('Error Syncing Users Table', err);
  })
}

export const dropUser = () => {
  User.drop().then(() => {
    console.log('Users Table Dropped Successfully');
  }).catch((err) => {
    console.log('Error Dropping Users Table', err);
  })
}

export default User;