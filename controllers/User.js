const UserClass = require("../services/User");
const jwt = require("jsonwebtoken");

exports.createNewUser = async (req, res, next) => {
  try {
    const { name, password, role } = req.body;
    const user = new UserClass(name, password, role);
    const data = await user.handleRegister();

    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(404).json("Something went wrong");
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const data = await UserClass.handleLogIn(name, password);
    const accessToken = jwt.sign(data, process.env.USER_SECRET_KEY);
    if (!data) {
      return res.status(400).json("Incorrect Value");
    }
    res.status(200).json({ ...data, accessToken });
  } catch (err) {
    console.log(err);
    res.status(404).json("Something went wrong");
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const data = await UserClass.handleGetAllUser();
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json("Something went wrong");
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const response = await UserClass.handleDeleteUser(req.body.id);
    if (response) {
      res.status(200).json({ message: "Delete user successfully" });
    } else {
      res
        .status(404)
        .json({ message: `User with id ${req.body.id} doesn't exist` });
    }
  } catch (err) {
    res.status(404).json("Something went wrong");
  }
};
