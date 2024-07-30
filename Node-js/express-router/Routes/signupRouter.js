const mongoose = require("mongoose");
const connectToMDB = require("./connectDB");
const express = require("express");
const cors = require("cors");
const router = express.Router();
const multer = require("multer");
const bcrypt=require("bcrypt");
const dotenv=require("dotenv");
dotenv.config();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      console.log(file);
  
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  
  const upload = multer({ storage: storage });

  let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

  
connectToMDB();

  let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    age: Number,
    email: String,
    password: String,
    confpassword: String,
    profilePic: String,
  });
  let User = new mongoose.model("user", userSchema);


router.post("/signup", upload.single("profilePic"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
      let hashedPassword=await bcrypt.hash(req.body.password,10);
      let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        age: req.body.age,
        email: req.body.email,
        password: hashedPassword,
        confpassword: req.body.confpassword,
        profilePic: req.file.path,
      });
  
      let usersList = await User.find().and({email:req.body.email})
      if(usersList.length>0){
        res.json({ status: "failure", msg: "User already exists" });
  
      }else{
        await User.insertMany([newUser]);
        res.json({ status: "success", msg: "User created successfully" });
  
      }
    } catch (err) {
      res.json({ status: "error", msg: "Unable to created account", err: err });
    }
  });

  app.listen(process.env.port, () => {
    console.log("Listening to port 1234");
  });

  module.exports = router;