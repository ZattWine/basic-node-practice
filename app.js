const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorsController = require("./controllers/errors");
const mongoConnect = require("./utils/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// this code will only run for incoming request.
// perform as Middleware
app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     // send user to all via req.user as middleware
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorsController.get404Page);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
