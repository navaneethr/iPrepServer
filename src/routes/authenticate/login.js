import bcrypt from 'bcrypt';
import generateAccessToken from '../../utils/generateAccessToken.js';
import { User } from '../../models/index.js';

const login = async (req, res) => {
  // Authentication User
  const email = req?.body?.email;
  // find the user using the username
  User.findOne({ where: { email } }).then(async (user) => {
    // get the userDetails object and compare the gotten password with the body password
    if (user) {
      const foundPassword = user.password; // Get this from DB 
      const password = req?.body?.password;
      const auth = await bcrypt.compare(password, foundPassword);
      if (auth) {
        delete user.dataValues.password;
        const accessToken = generateAccessToken(user.dataValues);
        res.json({ accessToken })
      } else {
        res.json({ err: "Please check your username & password", status: 500 })
      }
    } else {
      res.json({ err: "Please check your username", status: 500 })
    }
  }).catch((err) => {
    console.log(err);
    res.json({ err: "Internal Server Error", status: 500 })
  })
};

export default login;