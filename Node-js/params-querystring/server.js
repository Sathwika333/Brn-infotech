const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors") ;

let app=express();
app.use(cors());

app.get("/getGenders",async(req,res)=>{
    let gendersList = await Student.find().distinct("gender");
    res.json(gendersList)
});

app.get("/getAddress",async(req,res)=>{
    let addressList = await Student.find().distinct("addres");
    res.json(addressList)
});

app.get("/getCountry",async(req,res)=>{
    let countriesList = await Student.find().distinct("country");
    res.json(countriesList)
});

app.get("/getStudents",async(req,res)=>{
    let studentsData= await Student.find().and([{gender:req.query.gender},{addres:req.query.addres},{country:req.query.country}]);
    console.log(req.query)
    res.json(studentsData)
});
app.listen(2345,()=>{
    console.log("Listening to port 2345");
});

let studentSchema = new mongoose.Schema({
    
id:Number,
first_name:String,
last_name:String,
email:String,
age:Number,
gender:String,
school_name:String,
country:String,
profilePic:String,
});

let Student = new mongoose.model("student",studentSchema)
 
let connectToMDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://sathwikayadhire:Sathu333.@cluster0.jhqb1n8.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0");
      console.log('successfully connected to MDB');
    }catch(err){
        console.log('unable to connect to MDB');
    }
};
connectToMDB();