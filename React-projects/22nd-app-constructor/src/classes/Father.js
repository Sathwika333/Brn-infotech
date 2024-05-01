class FatherDetails{
    constructor(name,age){
        console.log("Inside father constructor")
        this.Name=name;
        this.Age=age;
    }

    Name=()=>{
        console.log(`Father's name is: ${this.Name}`)
    }
    Age=()=>{
        console.log(`Father's age is: ${this.Age}`)
    }
    displayDetails = () => {
        console.log(`Father's Name: ${this.Name}, Father's Age: ${this.Age}`);
      }
}
export default FatherDetails;