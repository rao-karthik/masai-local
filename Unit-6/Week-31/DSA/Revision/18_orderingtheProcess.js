function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let unordered = input[1].trim().split(' ').map(Number);
    
    let ordered = input[2].trim().split(' ').map(Number);
    
    let count = 0;
    
    let i = 0;
    
    while(i < 1){
        if(unordered[0] === ordered[0]){
            unordered.shift();
            ordered.shift();
        }
        if(unordered[0] === undefined){
            unordered.shift();
        }
        else if(unordered[0] !== ordered[0]){
            while(unordered[0] != ordered[0]){
                rotateArr(unordered, 1, N);
                count++;
            }
        }
        if(unordered.length === 0){
            i++;
        }
    }
    console.log(count + N);
}

function rotateArr(A, K, N) {

    if(N < K){
        K = K % N;
    }

    reverseString(A, 0, K-1);
    reverseString(A, K, N-1);
    reverseString(A, 0, N-1);
}

function reverseString (arr, l, r) {
    while (l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}

if (process.env.USER === "kartik") {
    runProgram(`15
    5 11 12 13 15 6 14 2 7 10 4 8 9 3 1
    4 15 8 2 6 9 11 10 7 5 13 14 3 1 12`);
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