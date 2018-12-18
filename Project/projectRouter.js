// first we need to require express router and require the model.
const router = require('express').Router();

const Project =require('./project');
// add in route handlers for post and get
router.get('/:id',(req,res)=>{
    const{id}=req.params
    Project
    .findById(id)
    .then(response=>{
        res.status(202).json(response);
 })
 .catch(err=>{
     res.status(500).json({errorMessage: "The Project information could not be retrieved."})
 })
})
router.get('/', (req,res)=>{
    Project
    .select("-title")
    .find()
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