const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const multer=require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        console.log(file);
     
      cb(null,`${Date.now()}_${file.originalname}` );
    }
  })
  
  const upload = multer({ storage: storage });


let app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

let userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    gender:String,
    email:String,
    password:String,
    confpassword:String,
    profilePic:String,
    
});
let User = new mongoose.model("user",userSchema);

app.post("/signup",upload.single("profilePic"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    try{
        let newUser=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            userName:req.body.userName,
            gender:req.body.gender,
            email:req.body.email,
           password:req.body.password,
           confpassword:req.body.confpassword,
           profilePic:req.file.path,

        });
        await User.insertMany([newUser]);
      res.json({status:"success",msg:"User created successfully"});
    }catch(err){
        res.json({status:"error",msg:"Unable to created account",err:err}); 
    }

    
});

app.listen(1234,()=>{
    console.log("Listening to port 1234");
});

let connectToMDB=async()=>{

    try{
    await mongoose.connect("mongodb+srv://sathwikayadhire:Sathu333.@cluster0.jhqb1n8.mongodb.net/Batch2312?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Successfully connected to MDB")

    }catch(err){
        console.log("Unable to connect to MDB")
    }
   
}
connectToMDB();