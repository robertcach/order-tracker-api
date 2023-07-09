require("dotenv").config();

const mongoose = require("mongoose");
const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");

const app = express();

app.use(express.json());
app.use(logger("dev"));

// Routes
const routes = require("./config/routes");
app.use("/", routes);

// Errors
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Ready! Listen on port ${port}`);
});
