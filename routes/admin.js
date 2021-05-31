const express = require("express");

const route = express.Router();

const products = [];

// /admin/add-product => GET
route.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formCSS: true,
  });
});

// /admin.add-product => POST
route.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = route;
exports.products = products;
