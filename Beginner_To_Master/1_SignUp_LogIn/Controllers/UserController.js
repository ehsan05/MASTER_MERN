import UserModel from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const signup = async (req, res) => {
  //Existing UserCheck
  //Hash Pasword
  //UserCreation
  //Token Creation

  const { username, email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await UserModel.create({
      email: email,
      password: hashPassword,
      username: username,
    });
    // it'll create token by using sign method of jwt and here we work form the data of database.
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_KEY
    );
    //201mean record is craeted successfully
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const signin = (req, res) => {};

export { signin, signup };
