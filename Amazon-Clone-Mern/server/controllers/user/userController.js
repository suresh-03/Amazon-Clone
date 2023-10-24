const User = require("../../models/user");
const jwt = require("jsonwebtoken");

function createToken(_id, role) {
  const token = jwt.sign({ user: _id, role: role }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
}

exports.signup = async (req, res) => {
  const { name, mobileNo, email, password } = req.body;
  try {
    const user = await User.signup(name, mobileNo, email, password);
    user.role = "user";
    user.save();

    if (user) {
      const token = createToken(user._id, user.role);
      return res.json({ email, token });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);
    if (user.role === "user") {
      if (user) {
        const token = createToken(user._id, user.role);
        return res.json({ email, token });
      }
    } else {
      res.json({ message: "access denied" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};
