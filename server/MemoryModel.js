const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://dbTommy:90-0250th@cluster0-nf8sn.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'memory',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const { Schema } = mongoose;

const quizSchema = new Schema({
  question: String,
  answer: String,
  category: { type: String, required: true },
  level: Number,
});
const Quiz = mongoose.model('quiz', quizSchema);
// You must export your model through module.exports
// The collection name should be 'memory'
console.log('Quiz zzzz =', Quiz);

const personSchema = new Schema({
  name: { type: String, required: true },
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  species: String,
  species_id: { type: Schema.Types.ObjectId, ref: 'species' },
  homeworld: String,
  homeworld_id: { type: Schema.Types.ObjectId, ref: 'planet' },
  height: Number,
  films: [
    {
      title: String,
      id: { type: Schema.Types.ObjectId, ref: 'film' },
    },
  ],
});
const Person = mongoose.model('person', personSchema);

const planetSchema = new Schema({
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: Number,
});
const Planet = mongoose.model('planet', planetSchema);

module.exports = {
  Quiz,
  Person,
  Planet,
};
