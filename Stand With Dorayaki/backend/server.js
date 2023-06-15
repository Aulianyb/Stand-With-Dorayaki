const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully"); 
})

const menuRouter = require('./routes/menu');
const storeRouter = require('./routes/store');
const resepRouter = require('./routes/resep');

app.use('/store', storeRouter);
app.use('/menu', menuRouter); 
app.use('/resep', resepRouter); 

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`); 
});