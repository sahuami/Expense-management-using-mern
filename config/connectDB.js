const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`DB server running On ${mongoose.connection.host} database connected successful`.bgGreen.black);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;