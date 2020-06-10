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