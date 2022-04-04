const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    unique: true,

    required: [true, "Please include the product name"],
  },
  id: {
    type: Number,
  },

  price: {
    type: String,
    required: [true, "Please include the product price"],
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
// module.exports = productSchema;
