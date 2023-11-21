const express = require("express");
const addProduct = require("../controllers/AddProduct");
const allProducts = require("../controllers/allProducts");
const updateProduct = require("../controllers/updateProduct");
const deleteProduct = require("../controllers/deleteProduct");

const router=express.Router();

//create Product
router.route("/api/product/new").post(addProduct);

//Read Products
router.route("/api/products").get(allProducts);

//Update Product
router.route("/api/product/update/:id").put(updateProduct);

//delete Product
router.route("/api/product/delete/:id").delete(deleteProduct);


module.exports=router;