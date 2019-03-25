var express = require('express');
var router = express.Router();
var ToDoCollection = require('../models/ToDoCollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Kenn's Page" });
});

router.get('/results', (req,res)=>{

  // console.log(req.query.idLabel);
  // userId: Number,
  //     id: Number,
  //     title: String,
  //     completed: {type:Boolean, default: false},

  ToDoCollection.create(
      {
        userId: req.query.idLabel,
        id: req.query.todoid,
        title: req.query.todotitle,
        completed: req.query.todocomplete,
      }, (errors)=>{
        if (errors) res.send(errors);
        else res.send("Added!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      }
  );

});

module.exports = router;
