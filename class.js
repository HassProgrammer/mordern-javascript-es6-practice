class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kilbiliya School";
    }

}

const student1 = new Student(12, "Khan");
const student2 = new Student(13, "Araf");
console.log(student1, student2);
console.log(student1.name, student2.school);