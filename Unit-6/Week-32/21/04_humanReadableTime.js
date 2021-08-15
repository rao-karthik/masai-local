function runProgram(input){
    input = +input;

    if(input < 60){
        console.log(`00hrs ${input}mins`);
    }
    else {
        let hrs = parseInt(input/60);

        let mins = input % 60;

        if(mins == 0){
            hrs == 1? console.log(`1hr 00mins`) : console.log(`${hrs}hrs 00mins`)
        }
        else {
            hrs == 1? console.log(`1hr ${mins}mins`) : console.log(`${hrs}hrs ${mins}mins`)
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`60`);
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