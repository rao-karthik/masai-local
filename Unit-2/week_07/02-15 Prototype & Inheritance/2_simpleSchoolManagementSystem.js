function newTeacher(name, bio){
    this.name = name;
    this.bio = bio
}
function newStudent(name, bio){
    this.name = name;
    this.bio = bio;
}
function newCompetetion(comp, newCom){
    this.comp = comp;
    this.newCom = newCom
}

newTeacher.prototype.bioT = function (bio) {
    console.log(this.bio);
}

newStudent.prototype.bioS = function (bio) {
    console.log(this.bio);
}

newCompetetion.prototype.newComp = function(newCom){
    console.log(this.newCom);
}


var teacher = new newTeacher("Monis", "This is teachers bio");
// console.log(teacher);

var student = new newStudent("Kartik", "This is students bio");
// console.log(student);

var comptetion = new newCompetetion("coding", "debate");

teacher.bioT()
student.bioS()
comptetion.newComp()