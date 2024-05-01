class TenthStudent{
    constructor(englishMarks,telMarks,hindiMarks,mathsMarks,sciMarks,sociMarks,studentName){
       this.englishMarks=englishMarks;
       this.telMarks=telMarks;
       this.hindiMarks=hindiMarks;
       this.mathsMarks=mathsMarks;
       this.sciMarks=sciMarks;
       this.sociMarks=sociMarks;
       this.studentName=studentName;

    }
    calculateResult=()=>{
        if(this.englishMarks>=35&&this.telMarks>=35&&this.hindiMarks>=35&&this.mathsMarks>=35&&this.sciMarks>=35&&this.sociMarks>=35){
          console.log(`${this.studentName} passed  in SSC exam`);
        }else{
            console.log(`${this.studentName} failed in SSC exam`);
        }
    }
}
export default TenthStudent;