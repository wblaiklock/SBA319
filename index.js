//Init
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Models
const Posts = require('./models/posts');
const Users = require('./models/users');
const Images = require('./models/images');  
//Routers
const postRoutes = require('./routes/postRoutes');   
const userRoutes = require('./routes/userRoutes');  
const imageRoutes = require('./routes/imageRoutes');  

//Connect
const ConnectDB = require('./config/db');
ConnectDB();

//Routes
app.use(express.json())
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes); 
app.use('/api/images', imageRoutes); 






const fs = require('fs');
//Getters
app.get("/", (req, res) => {
    const options = {
      title: "Rendering Views with Express",
      content:
        "Testerino",
    };
    
    res.render("index", options);
  });

  //Template
app.engine("index", (filePath, options, callback) => { // define the template engine
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      // Here, we take the content of the template file,
      // convert it to a string, and replace sections of
      // it with the values being passed to the engine.
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`);
      return callback(null, rendered);
    });
  });


  

app.set("views", "./views"); // specify the views directory
app.set("view engine", "index"); // register the template engine

//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
