const mongoose = require("mongoose");
const Categories = require("./categories");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Categories",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
