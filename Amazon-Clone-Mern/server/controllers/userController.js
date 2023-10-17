const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name, mobileNo, email, password } = req.body;
  const user = await User.signup(name, mobileNo, email, password);

  if (user) {
    return res.json({ user });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.signin(email, password);
  if (user) {
    return res.json({ user });
  }
};
