const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://dbTommy:90-0250th@cluster0-nf8sn.mongodb.net/memory?retryWrites=true&w=majority';

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connection: ${conn.connection.host}`);
};

module.exports = connectDB;
