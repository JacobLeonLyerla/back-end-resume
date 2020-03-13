const router = require("express").Router();

const Message = require("./message");

//********************************** ROUTE HANDLERS
// this is a get request, that  will give me the messages sorted by date so that i get the newest first.

router.get("/", (req, res) => {
  // running a fin on the Message object model to seach the database

  Message.find()

    .sort("-dateOfMessage")

    //if the find was successfull then we will  get a status of 200, and the response will be sent in json,

    .then(response => {
      res.status(200).json(response);
    })
    // if the find promise did work the catch will give a 500 status and send a json error message

    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// this is a post and this will be called when an axios post is called

router.post("/", (req, res) => {
  // so this uses the Message modal passing in the request body, that is the text that is sent into the post from the axios or other type of request

  const messages = new Message(req.body);

  // the new message is then saved using .save and should be added into the database if the promise is accepted

  messages
    .save()

    .then(response => {
      res.status(201).json(response);
    })

    .catch(err => {
      res.status(500).json({
        err: "This response could not be added check their status and try again."
      });
    });
});

// here we export the router

module.exports = router;