import bcrypt from 'bcrypt';
import generateAccessToken from '../../utils/generateAccessToken.js';

const login = async (req, res) => {
  // Authentication User
  const username = req?.body?.username;
  // find the user using the username
  // get the userDetails object and compare the gotten password with the body password
  const foundPassword = ''; // Get this from DB 
  const password = req?.body?.password;
  // const auth = await bcrypt.compare(foundPassword, password)
  // Uncomment this later
  // if (auth) {
  //   const user = { name: username };
  //   const accessToken = generateAccessToken(user);
  //   res.json({ accessToken })
  // }
  console.log('hey')
  res.json({ value: 'XYZ' })
};

export default login;