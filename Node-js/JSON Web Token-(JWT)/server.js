const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");

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
app.use("/uploads", express.static("uploads"));

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

app.post("/signup", upload.single("profilePic"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      confpassword: req.body.confpassword,
      profilePic: req.file.path,
    });
    await User.insertMany([newUser]);
    res.json({ status: "success", msg: "User created successfully" });
  } catch (err) {
    res.json({ status: "error", msg: "Unable to created account", err: err });
  }
});

app.post("/validateLogin", upload.none(), async (req, res) => {
  console.log(req.body);
  let userDetails = await User.find().and({ email: req.body.email });

  if (userDetails.length > 0) {
    if (userDetails[0].password == req.body.password) {
        let token = jwt.sign({ email: req.body.email ,password : req.body.password},"BRNinfotech");

      let details = {
        firstName: userDetails[0].firstName,
        lastName: userDetails[0].lastName,
        userName: userDetails[0].userName,
        email: userDetails[0].email,
        age: userDetails[0].age,
        profilePic: userDetails[0].profilePic,
        token:token,
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

app.post("/validateToken", upload.none(), async (req, res) => {
  console.log(req.body);

  let decryptedToken = jwt.verify(req.body.token,"BRNinfotech");
  console.log(decryptedToken);

  let userDetails = await User.find().and({ email:decryptedToken.email });

  if (userDetails.length > 0) {
    if (userDetails[0].password == decryptedToken.password) {

      let details = {
        firstName: userDetails[0].firstName,
        lastName: userDetails[0].lastName,
        userName: userDetails[0].userName,
        email: userDetails[0].email,
        age: userDetails[0].age,
        profilePic: userDetails[0].profilePic,
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

app.listen(1234, () => {
  console.log("Listening to port 1234");
});

let connectToMDB = async () => {
  try {
    // await mongoose.connect("mongodb+srv://sathwikayadhire:Sathu333.@cluster0.jhqb1n8.mongodb.net/Batch2312?retryWrites=true&w=majority&appName=Cluster0");

    await mongoose.connect("mongodb://localhost:27017");
    console.log("Successfully connected to MDB");
  } catch (err) {
    console.log("Unable to connect to MDB");
  }
};
connectToMDB();
