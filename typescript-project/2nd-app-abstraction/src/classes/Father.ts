
abstract class FatherDetails{

    abstract Name:string;
    abstract Age:Number;
    abstract mobileNo:string;
    abstract Gender:string;

    abstract noOfEyes: number;
    abstract noOfEars: number;
    abstract noOfLegs: number;
    abstract noOfHands: number;

    // abstract displayDetails():void;

    displayDetails=()=>{
        console.log( ` Name:${this.Name}, Age: ${this.Age},Gender:${this.Gender},Mobileno: ${this.mobileNo}`);
  
     }
    
    
    constructor(){
        console.log("Inside father's constructor");
    }
    
}

export default FatherDetails;