function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];

    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();
        // console.log(N)
        let S = input[line++].trim();
        // console.log(S)
        
        let i = 0;
        let subStr = "";
        let obj = {};
        let totSubStr = 0;

        while(i < N){
            subStr += S[i];
            if(obj[S[i]]){
                obj[S[i]]++;
            }
            else {
                obj[S[i]] = 1;
            }
            if(obj[S[i]] > 2){
                obj[S[i]]--;
            }
            console.log(obj)
            
            let vals = Object.values(obj);
            // console.log(vals)
            let valSum = ValsSum(vals);
            console.log("valSum "+ valSum)

            totSubStr = (valSum*(valSum+1))/2;
            // console.log("totS " + totSubStr)
            i++;
        }
        // console.log(totSubStr);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    7
    ftswkld
    7
    hhsdfhh
    7
    bgvwqzi`);
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

function ValsSum (valArr){
    let len = valArr.length;
    let sum = 0;

    for(let i = 0; i < len; i++){
        sum += valArr[i];
    }
    return sum;
}