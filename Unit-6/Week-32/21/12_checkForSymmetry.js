function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = [];
        
        for(let i = 0; i < N; i++){
            arr.push(input[line++].trim().split(''));
        }

        let horizontal = checkHorizontal(arr, N);
        
        let vertical = checkVertical(arr, N);
        
        if(vertical && horizontal){
            console.log('BOTH');
        }
        else if(vertical){
            console.log('VERTICAL');
        }
        else if(horizontal){
            console.log('HORIZONTAL');
        }
        else {
            console.log('NO');
        }
    }
}

function checkHorizontal (arr, N){
    let i = 0;
    let j = N-1;

    while(i < j){
        if(arr[i].join('') !== arr[j].join('')){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function transpose(arr) {
    return arr[0].map((col, i) => arr.map(row => row[i]));
}

function checkVertical (arr, N){
    arr = transpose(arr);

    let i = 0;
    let j = N-1;

    while(i < j){
        if(arr[i].join('') !== arr[j].join('')){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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