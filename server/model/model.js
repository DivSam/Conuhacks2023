const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  location: {
    required: true,
    type: String,
  },
  lng: {
    required: true,
    type: Number,
  },
  lat: {
    required: true,
    type: Number,
  },
  disease: {
    required: true,
    type: String,
  },
  verified: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", dataSchema);
