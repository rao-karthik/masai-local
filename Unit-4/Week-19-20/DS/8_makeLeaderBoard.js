  function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = input[0];
    let line = 1;

    let names = [];
    let marks = [];

    for(let i = 0; i < N; i++){
        let [chars, num] = input[line++].trim().split(" ");
        // let str = input[line++].trim();
        // let chars = str.replace(/[0-9]/g, '').trim();
        // let num = +str.match(/\d+$/)[0];
        names.push(chars);

        marks.push(num);
    }
    // console.log(names);
    // console.log(marks);

    for(let i = 0; i < N-1; i++){
        for(let j = 0; j < N-i-1; j++){

            let A = names[j];
            let B = names[j+1];

            let diff = sortNames(A, B);
            
            if (diff > 0){
                let temp = names[j];
                names[j] = names[j+1];
                names[j+1] = temp;

                temp = marks[j];
                marks[j] = marks[j+1];
                marks[j+1] = temp;
            }

            if(marks[j] < marks[j+1]){
                let temp = marks[j];
                marks[j] = marks[j+1];
                marks[j+1] = temp;

                
                temp = names[j];
                names[j] = names[j+1];
                names[j+1] = temp;
            }
        }
    }
    // console.log(names);
    // console.log(marks);

    rankDisp(names, marks);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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

function sortNames(A, B){
    for (let i = 0; i < Math.min(A.length, B.length); i++){
        if(A[i] !== B[i]){
            return A.charCodeAt(i) - B.charCodeAt(i);
        }
    }
    return A.length - B.length;
}

function rankDisp(names, marks){
    let rank = 1;
    let count = 0;
    let prevMarks = -1;

    for(let i = 0; i < marks.length; i++){
        if(marks[i] === prevMarks){
            console.log(rank, names[i]);
        }
        else {
            rank += count;
            count = 0;
            console.log(rank, names[i]);
        }
        count++;
        prevMarks = marks[i];
    }
}