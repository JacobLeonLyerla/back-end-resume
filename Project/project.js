// first were going to need to import in mongoose or require
const mongoose = require("mongoose");
// set a new variable, that will be set to a new mongoose schema.
const Project = new mongoose.Schema({
  // declare the modal variables.
  title: {
    type: String,
    required: true
  },
  description: String,
  github: {
    type: String,
    required: true
  },
  rating:{
      type:Number,
      required:true
  },
  youtube: String,
  img: {
    type: String,
    default: "test url"
  },
  addedOn: {
    type: Date,
    default: Date.now
  }
});

// export the mongoose model
module.exports = mongoose.model("Project", Project);
