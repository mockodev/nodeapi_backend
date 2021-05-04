const Animal = require("../models/Animal");

const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getAnimals = async (req, res, next) => {
  try {
    const animals = await Animal.find();
    res.json({ success: true, msg: "show all animals", data: animals });
  } catch (err) {
    next(err);
  }
};

const getAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const animal = await Animal.findById(id);
    res.json({ success: true, msg: "show selected animal", data: animal });
  } catch (err) {
    next(err);
  }
};

const createAnimal = async (req, res, next) => {
  try {
    const { name, latinName, img } = req.body;
    const animal = await Animal.create({ name, latinName, img });

    res.json({ success: true, msg: "show new animal", data: animal });
  } catch (err) {
    next(err);
  }
};

const deleteAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;

    const animal = await Animal.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `animal with id ${id} deleted`,
      data: animal,
    });
  } catch (err) {
    next(err);
  }
};

const updateAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, latinName, img } = req.body;

    const animal = await Animal.findByIdAndUpdate(
      id,
      { name, latinName, img },
      { new: true }
    );
    res.json({
      success: true,
      msg: `animal with id ${id} updated`,
      data: animal,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
