const express = require("express");
const {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animals");

const api = express.Router();

api.route("/").get(getAnimals).post(createAnimal);

api.route("/:id").get(getAnimal).put(updateAnimal).delete(deleteAnimal);

module.exports = api;
