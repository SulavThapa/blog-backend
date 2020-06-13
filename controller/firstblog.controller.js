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

//delete the note with the noteId
exports.delete = (req, res) => {
  FirstBlog.findByIdAndRemove(req.params.blogId)
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Blog not found with id " + req.params.blogId
        });
      }
      res.send({message: "Bus deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Blog not found with id " + req.params.blogId
      });
    }
    return res.status(500).send({
      message: "Blog not delete Bus with id " + req.params.blogId
    });
  });
};

//to update the note with the noteId
exports.update = (req, res) => {
  // Validate Request
  if(!req.body.id) {
    return res.status(400).send({
      message: "Blog content can not be empty"
    });
  }

  // Find note and update it with the request body
  FirstBlog.findByIdAndUpdate(req.params.blogId, {
    id : req.body.id,
    title: req.body.title,
    name: req.body.name,
    first_para: req.body.first_para,
    second_para: req.body.second_para,
    third_para: req.body.third_para,
    fourth_para: req.body.fourth_para
  }, {new: true})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "Blog not found with id " + req.params.blogId
        });
      }
      res.send(data);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Blog not found with id " + req.params.blogId
      });
    }
    return res.status(500).send({
      message: "Blog updating Driver with id " + req.params.blogId
    });
  });
};
