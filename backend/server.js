const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const connectDB = require("./config/config");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
// importing routes
const plotCategoryRoute = require(`./routes/plotCategoryRoute`);
const paymentMethodRoute = require(`./routes/paymentMethodRoute`);
const townPlanningRoute = require(`./routes/townPlanningRoutes`);

dotenv.config();
app.use(cors());
app.use(express.json());
connectDB();

// Routnig
app.use(`/categories`, plotCategoryRoute);
app.use(`/paymentMethods`, paymentMethodRoute);
app.use(`/townPlanning`, townPlanningRoute);

app.listen(port, () => {
  console.log("app works");
});
