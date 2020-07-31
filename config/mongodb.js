const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:27017/docker-node-mongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
