import FatherDetails from "./Father";

class DaughterDetails extends FatherDetails{

   constructor(name,age,mobileno){
    super();
    console.log("Inside daughter's constructor")
    this.Name=name;
    this.Age=age;
    this.mobileNo= mobileno;
  
   }

//    Name=()=>{
//     console.log(`Daughter's name is: ${this.Name}`)
//    }
//    Age=()=>{
//     console.log(`Daughter's age is: ${this.Age}`)
//    }
   displayDetails = () => {
    console.log(`Daughter's Name: ${this.Name}, Daughter's Age: ${this.Age},Daughter's Mobileno: ${this.mobileNo}`);
  }

}
export default DaughterDetails;