import FatherDetails from "./Father";

class DaughterDetails extends FatherDetails{
  
     Name: string;
     Age: number;
     mobileNo: string;
     Gender: string;

   noOfEyes: number=2;
   noOfEars: number=2;
   noOfLegs: number=2;
   noOfHands: number=2;

   // displayDetails(): void{
   //    console.log( ` Name:${this.Name}, Age: ${this.Age},Gender:${this.Gender},Mobileno: ${this.mobileNo}`);
   // }


   constructor(name: string,age: number,gender:string,mobileno: string){
   super();
    console.log("Inside daughter's constructor");
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
    this.mobileNo= mobileno;
  
   }

}

// let fatherDetails=new DaughterDetails("Y.Ramesh", 52,"Male", "1230456789");
//   fatherDetails.displayDetails();

//   let daughterDetails=new DaughterDetails("Y.Sathwika",22,"Female","9874056321");
//   daughterDetails.displayDetails();


export default DaughterDetails;


