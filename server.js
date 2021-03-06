const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
//importing the required controller
const firstblog = require('./controller/firstblog.controller.js');
//to get the firstblog data
app.get('/blognp', firstblog.findAll);
// to post the data into the firstblog
app.post('/blognp', firstblog.create);
//to delete the data into the firstblog
app.delete('/blognp'. firstblog.delete);
//to update the data into the firstblog
app.update('/blognp'. firstblog.update);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
