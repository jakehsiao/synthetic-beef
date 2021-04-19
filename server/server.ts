const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Even I don't know what this line is for, two tutorials use that so I add it
app.use(cors());

app.get('/test_api', (req, res) => {
  return res.json({message: "Hello, API!"});
});

app.listen(port, () => console.log(`App is on port ${port}`));