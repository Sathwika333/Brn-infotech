class FatherDetails{
    constructor(name,age,mobileno){
        console.log("Inside father's constructor")
        this.Name=name;
        this.Age=age;
        this.mobileNo= mobileno;
        this.noOfEyes=2;
        this.noOfEars=2;
        this.noOfLegs=2;
        this.noOfHands=2;
    }

    // Name=()=>{
    //     console.log(`Father's name is: ${this.Name}`)
    // }
    // Age=()=>{
    //     console.log(`Father's age is: ${this.Age}`)
    // }
    displayDetails = () => {
        console.log(`Father's Name: ${this.Name}, Father's Age: ${this.Age},Father's Mobileno: ${this.mobileNo}`);
    }
}
export default FatherDetails;