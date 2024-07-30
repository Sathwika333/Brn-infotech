const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();




let connectToMDB = async () => {
    try {
      // await mongoose.connect("mongodb+srv://sathwikayadhire:Sathu333.@cluster0.jhqb1n8.mongodb.net/Batch2312?retryWrites=true&w=majority&appName=Cluster0");
  
      await mongoose.connect(process.env.mdburl);
      console.log("Successfully connected to MDB");
    } catch (err) {
      console.log("Unable to connect to MDB");
    }
  };
  connectToMDB();


  module.exports = connectToMDB ;