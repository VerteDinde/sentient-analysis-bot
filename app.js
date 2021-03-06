const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});