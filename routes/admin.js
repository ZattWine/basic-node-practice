const express = require("express");

const route = express.Router();

const productsController = require("../controllers/products");

// /admin/add-product => GET
route.get("/add-product", productsController.getAddProduct);

// /admin.add-product => POST
route.post("/add-product", productsController.postAddProduct);

module.exports = route;
