var student = {
    grades : [
        {
            grade: "V",
            students: [
                {name: "Nrupul", marks: [10, 20, 30]},
                {name: "Prateek", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VI",
            students: [
                {name: "Aman", marks: [10, 20, 30]},
                {name: "Albert", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VII",
            students: [
                {name: "Yogesh", marks: [10, 20, 30]},
                {name: "Sandhya", marks: [20, 30, 40]}
            ]
        }
    ],
    totalmarks : function (){
        var sum = 0;
        for (var a = 0; a < this.student.grades.length; a++){
            for (var b = 0; b < this.grade[a].marks.length; b++){
                sum = sum + this.grade[a].marks[b];
            }
        }
        return sum;
    }
    // highest_marks : function (){
    //     var highest = {};
    //     var m = this.students.grade.length;
    //     var n = this.students.grade.students.length;
    //     var o = this.students.grade.students.marks.length;
    //     for (var i = 0; i < m; i++){
    //         for (var j = 0; j < n; j++){
    //             for (var k = 0; k < o; k++){
    //                 if (highest.marks == undefined || this.grade.){

    //             }
    //         }
    //     }
    // }
}
console.log(student.totalmarks())