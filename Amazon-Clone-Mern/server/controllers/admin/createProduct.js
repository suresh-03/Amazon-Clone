const Product = require("../../models/products");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/images/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

exports.upload = multer({ storage: storage });

exports.createProduct = async (req, res) => {
  const product = {
    name: req.body.name,
    categories: [
      {
        category: req.body.category,
        subCategories: [
          {
            subCategory: req.body.subCategory,
            brands: [
              {
                brandName: req.body.brandName,
                products: [
                  {
                    prodName: req.body.prodName,
                    prodDetails: req.body.prodDetails,
                    prodReview: req.body.prodReview,
                    prodImage: path.join("/images/" + req.file.filename),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  Product.create(product)
    .then(() => {
      res.json("image uploaded");
    })
    .catch((err) => console.log(err));
};
