import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc register user
const signup = asyncHandler(async (req, res) => {
  const { name, mobile, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  } else {
    const user = await User.create({
      name,
      mobile,
      email,
      password,
    });
    if (user) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("invalid user input");
    }
  }
});

// @desc sign in user
const signin = (req, res) => {
  res.status(200).json({ msg: "signin" });
};

// @desc logout user
const signout = (req, res) => {
  res.status(200).json({ msg: "signout" });
};

// @desc get user profile
const getUserProfile = (req, res) => {
  res.status(200).json({ msg: "user profile" });
};

export { signup, signin, getUserProfile, signout };
