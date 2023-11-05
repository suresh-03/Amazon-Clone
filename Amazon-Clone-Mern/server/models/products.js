const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: [
      {
        category: String,
        subCategories: [
          {
            subCategory: String,
            brands: [
              {
                brandName: String,
                products: [
                  {
                    prodName: String,
                    prodImage: String,
                    prodDetails: String,
                    prodReview: String,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
