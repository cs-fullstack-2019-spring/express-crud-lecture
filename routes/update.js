var express = require('express');
var router = express.Router();
var ToDoCollection = require('../models/ToDoCollection');

/* GET home page. */
router.get('/updateCompletedById/:id', (req, res)=>{
    ToDoCollection.findOneAndUpdate({id:req.params.id}, {completed:true}, (error, results)=>{
        if(error) res.send(error);
        else res.send("Update complete!");
    } )
});

module.exports = router;