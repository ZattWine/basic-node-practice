const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const errorsController = require("./controllers/errors");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);

app.use((req, res, next) => {
  User.findById("60b7cd94c3b2bb703429043d")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorsController.get404Page);

mongoose
  .connect(
    "mongodb+srv://zattwine:q1lm5aP1EQbh1GpV@cluster0.c5muj.mongodb.net/shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected!");

    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Zatt",
          email: "zatt@test.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
