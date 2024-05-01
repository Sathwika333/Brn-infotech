import FatherDetails from "./Father";

class DaughterDetails extends FatherDetails{

   constructor(name,age){
    super(name,age);
    console.log("Inside daughter constructor")
    this.Name=name;
    this.Age=age;
   }

   Name=()=>{
    console.log(`Daughter's name is: ${this.Name}`)
   }
   Age=()=>{
    console.log(`Daughter's age is: ${this.Age}`)
   }
   displayDetails = () => {
    console.log(`Daughter's Name: ${this.Name}, Daughter's Age: ${this.Age}`);
  }

}
export default DaughterDetails;