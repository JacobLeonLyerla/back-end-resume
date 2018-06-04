const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const messageRouter = require('./message/messageRouter')
const server = express();
server.use(cors())
server.use(express.json());

server.use('/messages',messageRouter)

mongoose
.connect('mongodb://JacobLeonLyerla:server1122@ds147030.mlab.com:47030/resume')
.then(open=>{
    console.log('connected to db')
})
.catch(err=>{
    console.log('Could not connect to mongodb',err)
})
server.get('/', (req, res) => {
    res.status(200).json({ api: `api running on port ${port}` });
  });
  const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
