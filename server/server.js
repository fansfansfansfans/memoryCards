const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const apiRouter = require('./apiRouter');

// connectDB();

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// if (process.env.NODE_ENV === 'production') {
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
// }
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
