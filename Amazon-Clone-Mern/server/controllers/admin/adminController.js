const User = require("../../models/user");
const jwt = require("jsonwebtoken");

function createToken(_id, role) {
  const token = jwt.sign({ user: _id, role: role }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
}

// exports.signup = async (req, res) => {
//   const { name, mobileNo, email, password } = req.body;
//   try {
//     const user = await User.signup(name, mobileNo, email, password);
//     user.role = "admin";
//     user.save();

//     if (user) {
//       return res.json({ user });
//     }
//   } catch (err) {
//     res.json({ error: err.message });
//   }
// };

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);
    if (user.role === "admin") {
      if (user) {
        const token = createToken(user._id, user.role);
        req.headers.authorization = token;
        return res.json({ email, token });
      }
    } else {
      res.json({ message: "access denied" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.signout = async (req, res) => {};
