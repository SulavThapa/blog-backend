const FirstBlog = require('../models/firstblog.js');


//to get the blog data from the database
exports.findAll = (req, res) => {
  FirstBlog.find()
  .then(data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send({
      message: err.message || 'Internal Server error while retriving data'
    });
  });
};

//to post the data into the blog database
exports.create = (req, res) =>{
  if(!req.body.name && !req.body.title){
    return res.status(400).send({
      message: 'Blog cannot be empty'
    });
  }

  //creating the blog object
  const firstblog = new FirstBlog({
    name : req.body.name,
    date : req.body.date,
    title: req.body.title,
    first_para : req.body.first_para,
    second_para : req.body.second_para,
    third_para : req.body.third_para,
    fourth_para : req.body.fourth_para,
  });

  firstblog.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occured while creating the Blog"
    });
  });
}