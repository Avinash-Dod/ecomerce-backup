const Products = require("../model/productSchema");
const multer = require("multer");

const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./upload/product");
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

const addproducts = (req, res) => {
  const products = new Products({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    id: req.body.id,
    price: req.body.price,
    created_by: req.body.created_by,
    Image: req.file.path,
  });

  products
    .save()
    .then((result) => {
      res.status(200).json({
        responceData: result,
        msg: "success",
        error: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
const getproducts = (_req, res) => {
  Products.find({}).then(function (products) {
    res.send(products);
  });
};
module.exports = {
  addproducts,
  getproducts,
  uploadImg,
};
