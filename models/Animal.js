const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Only max 50 chars are allowed for the name"],
  },
  latinName: {
    type: String,
    required: [true, "Please add a latin name"],
    maxlength: [50, "Only max 50 chars are allowed for the latin name"],
  },
  img: {
    type: String,
    required: [true, "Please add a URL"],
    maxlength: [255, "Only max 255 chars are allowed for the URL"],
  },
});

module.exports = mongoose.model("Animal", AnimalSchema);
