// first we need to require express router and require the model.
const router = require('express').Router();

const Project =require('./project');
// add in route handlers for post and get
router.get('/', (req,res)=>{
    Project
    .find()
    .sort('-rating')
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
router
.post('/',(req,res)=>{
    const project = new Project(req.body)
    project
    .save()
    .then(response=>{
        res.status(201).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})

// export the router
module.exports = router;