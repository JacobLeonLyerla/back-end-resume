//*********************************** IMPORTS
const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const messageRouter = require("./message/messageRouter");

const projectRouter = require("./Project/projectRouter");

const {
  username,
  password
} = require("./credentials");
//******************************************* ASSIGNING THE SERVER AND SETTING MIDDLEWARE
const server = express();

server.use(cors());

server.use(express.json());

//********************************************* ROUTERS
// this uses the imported router  and sets the route to /messages so if you type /messages it will go into this router
// allowing access to that routers route handlers
server.use("/messages", messageRouter);

server.use("/projects", projectRouter);

//******************************************* CONNECTING TO DATATBASE
mongoose

  .connect(
    // this is calling my database, it takes my username and my password,
    // the username and password is being stored in another file and imported
    `mongodb://${username}:${password}@ds147030.mlab.com:47030/resume`
  )
  // this will log if the promise was completed and i was connected
  .then(open => {
    console.log("connected to db");
  })

  // this will log and error if the connection failed
  .catch(err => {
    console.log("Could not connect to mlab.com database", err);
  });

// this is just a test route so that you can see if the router is running when you open it without having to type a route in.
server.get("/", (req, res) => {
  res.status(200).json({
    api: `api running on port ${port}`
  });
});

//***************************************** SERVER LISTEN
// this will set the port to the proecess enviorment Port or port 5000 if it is running locally,

const port = process.env.PORT || 5000;

// this will listen to the port that was set above and the log the correct port

server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));