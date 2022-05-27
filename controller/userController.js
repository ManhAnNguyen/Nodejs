const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.createNewUser = async (req, res, next) => {
  try {
    const { name, password, role } = req.body;
    const user = new User(name, password, role);
    await user.signUp();
    res.status(200).json("Sign up successfully");
  } catch (err) {
    res.status(401).json("failed");
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { name, password } = req.body;

    const data = await User.logIn(name, password);

    const accessToken = jwt.sign(data, process.env.USER_SECRET_KEY);

    const user = { ...data, accessToken };

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(401).json("failed");
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const data = await User.getAllUser();
    res.status(200).json({ data });
  } catch (err) {
    res.status(401).json("failed");
  }
};

exports.deleteUser = async (req, res, body) => {
  try {
    await User.deleteUserById(req.body.id);
    res.status(200).json("Delete user successfully");
  } catch (err) {
    console.log(err);
    res.status(401).json("failed");
  }
};
