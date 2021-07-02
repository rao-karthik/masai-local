function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = +input[line++].trim();
        let H = input[line++].trim().split(" ").map(Number);

        signalReach(H, n);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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

function signalReach (H, n){
    let stack = [];
    stack.push(H[0]);
    let index = [0];
    let ans = [1];

    for(let i = 1; i < n; i++){
        let range = 1;
        while(stack.length > 0 && H[i] >= stack[stack.length-1]){
            if (index.length === 1){
                range += index[0] + 1;
            }
            else {
                range += index[index.length-1] - index[index.length-2];
            }
            stack.pop();
            index.pop();
        }
        ans.push(range);
        stack.push(H[i]);
        index.push(i);
    }
    console.log(ans.join(" "));
}

// function signalReach (H, n){
//     let stack = [];
//     let rangeArr = []  ;

//     for(let i = 0; i < n; i++){
//         stack.push(H[i]);
//         let range = 0;
//         let newStack = [...stack];
//         while(newStack[newStack.length-1] <= H[i]){
//             newStack.pop();
//             range++;
//         }
//         rangeArr.push(range);
//     }
//     console.log(rangeArr.join(' '));
// }

// function signalReach (H, n){
    
//     let stack = [];
//     let ans = [];
    
//     for(let i = 0; i < n; i++){
//         let range = 1;
//         while(stack.length > 0 && H[i] >= H[stack.length-1]){
//             let temp = stack.pop();
//             range+= ans[temp]
//         }
//         ans[i] = range;
//         stack.push(i);
//     }
//     console.log(ans);
// }