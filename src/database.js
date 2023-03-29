const mongoose = require("mongoose");

function configureDatabase({ url = "", options = {} }) {
  mongoose
    .connect(url, options)
    .then(() => {
      console.log("Connect to MongoDB success");
    })
    .catch((err) => {
      console.log("Connect to MongoDB fail", err);
    });
}
module.exports = configureDatabase;
