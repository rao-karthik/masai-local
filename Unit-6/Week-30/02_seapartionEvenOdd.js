function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let T = +input[0];
    let line = 1;

    for(let i = 0; i < T; i++){
        let N = +input[line++].trim();

        let A = input[line++].trim().split(' ').map(Number);

        let Q = +input[line++].trim();

        order(N, A, Q);
    }
}

function order(N, A, Q){
    let even=[]

    let odd=[]

    for(let i=0;i<N;i++){

        if(A[i]%2===0){
            even.push(A[i])
        }
        if(A[i]%2!==0){
            odd.push(A[i])
        }
    }
    
    even.sort((a,b) => a-b )
    odd.sort((a,b) => a-b )

    if(Q===1){
        console.log([...even, ...odd].join(" "))
    }
    else if (Q===2){
        console.log([...odd, ...even].join(" "))
    }
}


if (process.env.USER === "kartik") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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