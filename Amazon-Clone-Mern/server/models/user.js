const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNo: {
      type: Number,
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
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (name, mobileNo, email, password) {
  const emailExists = await this.findOne({ email });

  if (emailExists) {
    return { message: "email already exists" };
  } else {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(password, salt);

    const user = await this.create({ name, mobileNo, email, password: hash });
    return user;
  }
};

userSchema.statics.signin = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    return { message: "email not found" };
  } else {
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      return user;
    } else {
      return { message: "incorrect password" };
    }
  }
};

module.exports = mongoose.model("User", userSchema);
