const router = require('express').Router();

const Messages = require('./message');


// add endpoints here
router.get('/',(req,res)=>{
    Message
    .find()
    .sort('-dateOfMessage')
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json({err: "The collection of notes could not be obtained."})
    })
    })
router
.post('/',(req,res)=>{
    const messages = new Messages(req.body);

    messages
    .save()
    .then(response =>{
        res.status(201).json(response)
    }).catch(err =>{
        res.status(500).json({err:"This response could not be added check their status and try again."})
    })
})
module.exports = router;
