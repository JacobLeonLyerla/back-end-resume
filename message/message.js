const mongoose = require("mongoose");

const Message = new mongoose.Schema({
  email: {
    type: String,
    default:"None Given"
  },
  phone: {
    type: String,
    default:"None Given"
  },
  message: {
    type: String,
    default:"None Given"
  },
  dateOfMessage: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Message", Message);
