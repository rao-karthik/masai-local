function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++) {
        let [ CMajor, CMinor, CPatch ] = input[line++].trim().split('.').map(Number);

        let [ NMajor, NMinor, NPatch ] = input[line++].trim().split('.').map(Number);

        if( NMajor < CMajor ){
            console.log('False');
        }
        else if ( NMajor === CMajor && NMinor < CMinor ){
            console.log('False');
        }
        else if ( NMajor === CMajor && NMinor === CMinor && NPatch < CPatch ) {
            console.log('False');
        }
        else {
            console.log('True');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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