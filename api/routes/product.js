const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/", productController.addproducts);
router.get("/", productController.getproducts);

router.get("/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Product.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("user")
    .then(function (dbProduct) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(dbProduct);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports = router;
