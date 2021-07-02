function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var ref_dim = input[0].trim().split(" ").map(Number);
    var dim = input[1].trim().split(" ").map(Number);
    // console.log(ref_dim);
    // console.log(dim);
    if (dim[0] > ref_dim[0] && dim[1]>ref_dim[1]){
        console.log("Upload")
    }
    else if (dim[0] < ref_dim[0]){
        console.log("Increase Length");
    }
    else if (dim[1] < ref_dim[1]){
        console.log("Increase Width")
    }
}

if (process.env.USER === "rao") {
    runProgram(`12 14
    8 19`);
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