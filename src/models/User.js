import Sequelize from 'sequelize';
import { sequelize } from "../utils/authenticatePostgres.js";
import { checkPassword } from '../utils/validations/index.js';

const User = sequelize.define('user', {
  user_id: {
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

export const syncUser = () => {
  User.sync({ force: true }).then(() => {
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