const { Quiz, Person, Planet } = require('./MemoryModel');

const ApiController = {};
// Get a student from the database and send it in the response
// Their first name will be in the request parameter 'name'
// This should send the found student
ApiController.getCards = async (req, res, next) => {
  // Quiz.find({ category: req.query.category }, (err, cards) => {
  try {
    const cards = await Quiz.find({});
    console.log(
      `req.query.category = ***${req.query.category}***,`,
      ', cards =',
      cards
    );
    res.locals.cards = cards;
    return next();
  } catch (err) {
    res.status(418).send('There was an error, pls check server logs');
    return next(err);
  }
};

module.exports = ApiController;
