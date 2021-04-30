const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Even I don't know what this line is for, two tutorials use that so I add it
app.use(cors());




app.get('/test_api', (req, res) => {
  return res.json({message: "Hello, API!"});
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/articles', (req, res) => {
});

app.post('/add_article', (req, res) => {
})

app.listen(port, () => console.log(`App is on port ${port}`));