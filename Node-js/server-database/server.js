const mongoose=require("mongoose");
let connectToDB =async()=>{
    try{
       await  mongoose.connect("mongodb+srv://sathwikayadhire:Sathu333.@cluster0.6lwwmbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("successfully connected to MDB");
    }catch(err){
        console.log("unable to connect o MDB");

}}
connectToDB();