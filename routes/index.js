var express = require('express');
var router = express.Router();
var ToDoCollection = require('../models/ToDoCollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Kenn's Page" });
});

router.get('/results', (req,res)=>{

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

router.get('/find', (req, res)=>{
  res.render('find')
});

router.get('/findById/', (req,res)=>{
  ToDoCollection.find({userId: req.query.findId},
      (error, results)=>{
        if(error) res.send(error);
        else {
          console.log(results);
          res.render("results", {entries: results});
        }
      })
});

module.exports = router;
