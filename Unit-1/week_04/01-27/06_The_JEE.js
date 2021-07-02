function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var student_1 = input[0].trim().split(" ").map(Number);
    var student_2 = input[1].trim().split(" ").map(Number);
    // console.log(student_1);
    // console.log(student_2);
    var total_stu_1 = 0;
    var total_stu_2 = 0;
    for (var i =0; i < student_1.length; i++){
        total_stu_1 = total_stu_1 + student_1[i];
        total_stu_2 = total_stu_2 + student_2[i]
    }
    // console.log(total_stu_1);
    // console.log(total_stu_2);
    if (total_stu_1 > total_stu_2){
        console.log("First")
    }
    else if (total_stu_2 > total_stu_1){
        console.log("Second")
    }
    else if (total_stu_1 == total_stu_2 && total_stu_1[2] > total_stu_2[2]){
        console.log("First")
    }
    else if (total_stu_1 == total_stu_2 && total_stu_1[1] > total_stu_2[1]){
        console.log("First")
    }
    else {
        console.log("Second")
    }
}

if (process.env.USER === "rao") {
    runProgram(`120 90 70
    90 80 110`);
} 
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}