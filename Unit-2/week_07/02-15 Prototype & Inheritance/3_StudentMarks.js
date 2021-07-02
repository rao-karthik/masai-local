function calPer(marksObtained, marksOutOf) {
    this.percentage = (this.marksObtained/this.marksOutOf)*100;
    console.log(this.percentage.toFixed(2));
}

function Student(marksObtained, marksOutOf){
    this.marksObtained = marksObtained;
    this.marksOutOf =marksOutOf;
}

var marks = [
    {
      marksObtained:362,
      marksOutOf: 500
    },
    {
        marksObtained: 470,
        marksOutOf: 500
    },
    {
        marksObtained: 453,
        marksOutOf: 500
    },
    {
        marksObtained: 275,
        marksOutOf: 500
    },
    {
        marksObtained: 389,
        marksOutOf: 500
    },
    {
        marksObtained: 482,
        marksOutOf: 500
    },
    {
        marksObtained: 463,
        marksOutOf: 500
    },
    {
        marksObtained: 302,
        marksOutOf: 500
    },
    {
        marksObtained: 415,
        marksOutOf: 500
    },
    {
        marksObtained: 482,
        marksOutOf: 500
    },
];

for(var i = 0; i < marks.length; i++){
    var marksOb = new Student(marks[i].marksObtained, marks[i].marksOutOf);

    calPer.call(marksOb);
    // var newFunc = calPer.bind(marksOb);
    // console.log(marksOb);
    // newFunc()
}