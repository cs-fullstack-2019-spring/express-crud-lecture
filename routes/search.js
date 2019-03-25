var express = require('express');
var router = express.Router();
var ToDoCollection = require('../models/ToDoCollection');

router.get('/findByUserId/:id', (req,res)=>{

    ToDoCollection.find({userId: req.params.id}, (errors, results)=>{
       if(errors) res.send(errors);
       else res.send(results);
    });
});

router.get('/findByUserIdAndNotComplete/:id', (req,res)=>{

    ToDoCollection.find({userId: req.params.id, completed:false}, (errors, results)=>{
        if(errors) res.send(errors);
        else res.send(results);
    });
});


module.exports = router;