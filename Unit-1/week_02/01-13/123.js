var student = {
    name : "Kartik",
    markslist : [
        {subject: "English", marks :42},
        {subject: "Science", marks :65},
        {subject: "Hindi", marks :55}
    ],
    addmarks : function(s, m){
        var item = {subject: s, marks: m};
        this.markslist.push(item);
    },
    leastmarks : function(){
        var least = {};
        for (var i = 0; i < this.markslist.length; i++){
            if (least.marks == undefined || this.markslist[i].marks < least.marks){
                least = this.markslist[i];
            }
        }
        return least;
    },
    highmarks : function(){
        var high = {};
        for (var j = 0; j < this.markslist.length; j++){
            if (high.marks == undefined || this.markslist[j].marks > high.marks){
                high = this.markslist[j]
            }
        }
        return high;
    },
    totalmarks : function(){
        var sum = 0;
        for (var k = 0; k < this.markslist.length; k++){
            sum = sum + this.markslist[k].marks;
        }
        return sum;
    }
}

student.addmarks("Math", 85);
console.log(student.markslist);
console.log(student.leastmarks());
console.log(student.highmarks());
console.log(student.totalmarks());