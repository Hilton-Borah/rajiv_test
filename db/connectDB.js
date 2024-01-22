const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://rajivsuting:3000@dpchaturvedi.gqutobj.mongodb.net/dpc?retryWrites=true&w=majority"
    );
    console.log(
      `MongoDB Connected: ${connection.connection.host} ${connection.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
