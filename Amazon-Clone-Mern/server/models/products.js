const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      data: Buffer,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
