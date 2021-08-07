function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0 ; i < tests; i++){
        let N = +input[line++];
        
        let arr = input[line++].trim().split(' ').map(Number);

        let h = 0;
        let j = N-1;
        let sumH = 0;
        let sumY = 0;
        let prevWt = arr[0];

        while(h <= j){
            let hwt = 0;
            let jwt = 0;

            while(hwt <= prevWt){
                hwt += arr[h];
                if(h < j){
                    sumH += arr[h];
                }
                h++;
            }
            prevWt = hwt;

            while(jwt <= prevWt){
                jwt += arr[j];
                if(h < j){
                    sumY += arr[j];
                }
                j--;
            }
            preWt = jwt;
        }
    
        console.log(sumH + " " + sumY)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    11
    3 1 4 1 5 9 2 6 5 3 5`);
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