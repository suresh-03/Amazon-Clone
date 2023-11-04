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
  const image = {
    name: req.body.name,
    description: req.body.description,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/images/" + req.file.filename)
      ),
    },
  };
  Product.create(image)
    .then(() => {
      res.json("image uploaded");
    })
    .catch((err) => console.log(err));
};
