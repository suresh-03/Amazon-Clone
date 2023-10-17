const mongoose = require("mongoose");

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = connect;
