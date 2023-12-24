import bcrypt from 'bcrypt';
import User from '../../models/User.js';

const register = async (req, res) => {
  // Register User
  const salt = await bcrypt.genSalt();
  const fullName = req?.body?.fullName;
  const email = req?.body?.email;
  const password = await bcrypt.hash(req?.body?.password, salt);
  // password, email, created_on, last_login, verified, full_name
  User.findOrCreate({
    where: { email: email },
    defaults: {
      full_name: fullName,
      email,
      password
    }
  }).then(function ([user, created]) {
    console.log('---------> ', user, created)
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
}

export default register;