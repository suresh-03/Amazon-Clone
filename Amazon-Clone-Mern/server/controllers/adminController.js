const User = require("../models/user");


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
        return res.json({ email });
      }
    } else {
      res.json({ message: "access denied" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};
