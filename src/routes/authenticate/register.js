import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';
import { checkPassword } from '../../utils/validations/index.js';

const register = async (req, res) => {
  // Register User
  const salt = await bcrypt.genSalt();
  const fullName = req?.body?.fullName;
  const email = req?.body?.email;
  const password = await bcrypt.hash(req?.body?.password, salt);
  // password, email, created_on, last_login, verified, full_name
  const validPassowrd = checkPassword(req?.body?.password)
  if (validPassowrd) {
    User.findOrCreate({
      where: { email: email },
      defaults: {
        fullName,
        email,
        password
      }
    }).then(function ([user, created]) {
      if (created) {
        const _user = { ...user.dataValues };
        delete _user.password;
        res.json({ data: _user, status: 200 });
        return;
      }
      res.json({ data: { message: 'User already exists' }, status: 200 })
    }).catch(function (err) {
      res.json({ error: err, status: 500 })
    })
  } else {
    res.json({ err: "Your password must be atleast 8 characters long and alpahnumeric with a combination of uppercase and lowercase letters", status: 500 })
  }
}

export default register;