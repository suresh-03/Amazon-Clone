const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNo: {
      type: mongoose.Schema.Types.Number,
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 10,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      min: 10,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (name, mobileNo, email, password) {
  const emailExists = await this.findOne({ email });
  const mobileExists = await this.findOne({ mobileNo });
  if (emailExists) {
    throw new Error("email already exists");
  } else {
    if (!email || !password || !name || !mobileNo) {
      throw new Error("all fields are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("enter valid email");
    }
    if (mobileNo.toString().length < 10 || mobileNo.toString().length > 10) {
      throw new Error("enter valid mobile number!");
    }
    if (mobileExists) {
      throw new Error("moblile number already exists");
    }
    // if (!validator.isStrongPassword(password)) {
    //   throw new Error("password is weak");
    // }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(password, salt);

    const user = await this.create({ name, mobileNo, email, password: hash });
    return user;
  }
};

userSchema.statics.signin = async function (email, password) {
  if (!email || !password) {
    throw new Error("all fields are required");
  }
  if (!validator.isEmail(email)) {
    throw new Error("enter valid email");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("email not found");
  } else {
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      return user;
    } else {
      throw new Error("incorrect password");
    }
  }
};

module.exports = mongoose.model("User", userSchema);
