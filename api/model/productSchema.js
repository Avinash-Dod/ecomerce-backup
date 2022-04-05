const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  productname: {
    type: String,
    required: [true, "Please include the product name"],
  },
  productId: {
    type: Number,
  },

  price: {
    type: String,
    required: [true, "Please include the product price"],
  },
  description: {
    type: String,
    required: true,
  },
  categoryname: {
    type: String,
    required: true,
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
