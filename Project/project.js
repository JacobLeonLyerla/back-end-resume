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
  webpage:{
type:String,
default:"This code is not deployed."
  },
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
    default: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
  },
  addedOn: {
    type: Date,
    default: Date.now
  },
  technologies:{
    type:Array,
    required:true,
  },
  
});

// export the mongoose model
module.exports = mongoose.model("Project", Project);
