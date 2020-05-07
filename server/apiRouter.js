const express = require('express');

const apiRouter = express.Router();
const ApiController = require('./ApiController');

// Get a student from the database
// localhost://3000/student/"name"
apiRouter.get('/', ApiController.getCards, (req, res, next) => {
  res.status(200).json(res.locals.cards);
  next();
});

module.exports = apiRouter;
