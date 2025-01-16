//Init
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//Data
const starterFruits = require('./config/seed');         
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

//Home route
app.get('/', async (req,res) => {
    await res.send('Home page');
})



//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})




