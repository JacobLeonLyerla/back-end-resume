const mongoose = require("mongoose");

// we set a new mongoose schema and name is Message
const Message = new mongoose.Schema({
  /* email is a String and if there is no text sent in it will show "None Given" in side of my data base,
   i did not make anything required on my schema, it's just for sending messages to me directly,
     */

  email: {
    type: String,

    default: "None Given"
  },

  phone: {
    type: String,

    default: "None Given"
  },

  message: {
    type: String,

    default: "None Given"
  },

  company: {
    type: String,

    default: "None Given"
  },

  // this sets the date  that someone send me a message to the current date, so i have an accurate time of the messages

  dateOfMessage: {
    type: Date,

    default: Date.now
  }
});

// exporting the modal it will actually set Message to messages as a third param here, but that is all generated procedurally
module.exports = mongoose.model("Message", Message);