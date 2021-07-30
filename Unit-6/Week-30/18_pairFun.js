function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        let i = 0;
        let j = N-1;


        let equal =checkEquals(arr, N);

        if(equal){
            console.log(arr.length);
        }
        else {
            let count = 0;
    
            for(let i = 0; i < N; i++){
                for(let j = 0; j < N; j++){
                    if(i !== j){
                        if(4 * arr[i] === 5 * arr[j]){
                            count++;
                        }
                    }
                }
            }
            console.log(count);
        }

    }
}


function checkEquals  (arr, N){
    let j = 1;
    let i = 0;

    while(j < N){
        if(arr[i] !== arr[j]){
            return false;
        }
        i++;
        j++;
    }
    return true;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    6
    5 5 5 4 4 4
    3
    0 0 0`);
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