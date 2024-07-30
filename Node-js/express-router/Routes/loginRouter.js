const mongoose = require("mongoose");
const connectToMDB = require("./connectDB");
const express = require("express");
const cors = require("cors");
const router = express.Router();
const multer = require("multer");
const jwt = require("jsonwebtoken");
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

router.post("/validateLogin", upload.none(), async (req, res) => {
    console.log(req.body);
    let userDetails = await User.find().and({ email: req.body.email });
  
    if (userDetails.length > 0) {
      let isPasswordCorrect=await bcrypt.compare(req.body.password,userDetails[0].password);
      if ( isPasswordCorrect==true) {
        let token = jwt.sign(
          { email: req.body.email, password: req.body.password },
          "BRNinfotech"
        );
  
        let details = {
          firstName: userDetails[0].firstName,
          lastName: userDetails[0].lastName,
          userName: userDetails[0].userName,
          email: userDetails[0].email,
          age: userDetails[0].age,
          profilePic: userDetails[0].profilePic,
          token: token,
        };
  
        res.json({ status: "success", data: details });
      } else {
        res.json({ status: "failure", msg: "Invalid password" });
      }
    } else {
      res.json({ status: "failure", msg: "User doesnot exist" });
    }
  
    console.log(userDetails);
  });

  app.listen(process.env.port, () => {
    console.log("Listening to port 1234");
  });

  module.exports = router;