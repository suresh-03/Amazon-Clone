const Product = require("../../models/products");

exports.dashboard = async (req, res) => {
  const product = await Product.find();
  res.json({
    image:
      product[0].categories[0].subCategories[0].brands[0].products[0].prodImage,
  });
};
