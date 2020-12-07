const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const { prototype } = require('stream');
const app = express()


mongoose.connect('mongodb://localhost:27017/courseDB',{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true})    
.then(() => {
  console.log("Mongo connection open!!")
})
.catch(err => {
  console.log("OH NO MONGO CONNECTION ERROR!!!!")
  console.log(err)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride('_method'))


//Course routes

//courses
app.get('/', (req, res) => {
  const { test } = 3000
  console.log(port)
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});