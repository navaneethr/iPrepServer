import bcrypt from 'bcrypt';

const register = async (req, res) => {
  // Register User
  const salt = await bcrypt.genSalt();
  const username = req.body.username;
  const email = req.body.email;
  const password = await bcrypt.hash(req?.body?.password || 'password', salt);
  const fullName = req.body.fullName;
  // username, password, email, created_on, last_login, verified, full_name
  res.json({ username, fullName, email, password })
}

export default register;