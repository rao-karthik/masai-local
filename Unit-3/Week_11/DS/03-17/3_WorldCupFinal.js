function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let inputArr = [];
    for (var i = 0; i < input.length; i++){
        inputArr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(inputArr);

    let newZealand = inputArr[0];
    let england = inputArr[1];

    if(newZealand[0] > england[0]){
        console.log("New Zealand");
    }

    else if(newZealand[0] < england[0]){
        console.log("England");
    }

    else if(newZealand[1] > england[1]){
        console.log("New Zealand");
    }

    else if(newZealand[1] < england[1]){
        console.log("England");
    }

    else if(newZealand[2] > england[2]){
        console.log("New Zealand");
    }
    
    else {
        console.log("England")
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`241 15 21
    241 15 26`);
} else {
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