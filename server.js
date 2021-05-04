require("dotenv").config();
require("colors");
const express = require("express");

const cors = require("cors");
const connectDB = require("./dbinit");
const animals = require("./api/animals");

const errorHandler = require("./middlewares/error");

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => res.send("hello!!!"));
app.use("/animals", animals);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Started server on port ${PORT}`.rainbow.bold.inverse)
);
