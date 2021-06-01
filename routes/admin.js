const express = require("express");

const route = express.Router();

const adminController = require("../controllers/admin");

// /admin/add-product => GET
route.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
route.get("/products", adminController.getProducts);

// /admin.add-product => POST
route.post("/add-product", adminController.postAddProduct);

route.get("/edit-product/:productId", adminController.getEditProduct);

route.post("/edit-product", adminController.postEditProduct);

module.exports = route;
