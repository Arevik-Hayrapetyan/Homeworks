class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  toString() {
    return `
        FIRSTNAME LASTNAME:: ${this.firstName} ${this.lastName}
        AGE :: ${this.age} years old
        `;
  }
}
let user1 = new Person("Arevik", "Hayrapetyan", "female", 22);
console.log(user1.toString());

class Student extends Person {
  constructor(firstName, lastName, fee, program) {
    super({ firstName, lastName });
    this._year = 0;
    this._fee = fee;
    this._program = program;
   this._grade = grade

  }
  
  passExam(programName, grade) {
    if (grade >= 50) {
     
        this._year++;
    }
  }
  isAllPassed() {
    if (grade >= 50) return "All passed";
    else return "Not passed ";
  }
  toString() {}
}
let  programs =  [
  { programName: "math", grade: 10 },
  { programName: "english", grade: undefined }];

  let student1 = new Student("Arevik", "Hayrapetyan", 200, 
programs);
  programs.forEach((element) => {
    student1.passExam(element.programName, element.grade);
  });
  console.log(student1);
  console.log(student1.isAllPassed());