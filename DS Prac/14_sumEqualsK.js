function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);

    let tests = +input[0];

    let line = 1;

    for(let i = 0; i < tests; i++){
        let [ N, K ] = input[line++].trim().split(" ").map(Number);

        let arr = input[line++].trim().split(" ").map(Number);

        let sumCheck = sumPair(arr, N, K);
        console.log(sumCheck)
    }
}

// using two pointer approach
// O(N logN)

function sumPair ( arr, N, K){ 
    arr = arr.sort((a, b)=> a-b)
    i = 0
    j = N -1 
    while (i < j) {
        if(arr[i] + arr[j] == K)
            return 1
        else if(arr[i] + arr[j] < K)
            i++
        else
            j--
    } 
    return -1
}

// using hash Set
// O(N)

function sumPair(arr, N, K){
    let hashSet = {};

    for(let i = 0; i < N; i++){
        let diff = K - arr[i];
        if (hashSet[arr[i]]){
            return 1;
        }
        else {
            hashSet[diff] = 1;
        }
    }
    return -1;
}

// or

function sumPair(arr, N, K){
    let hashSet = [];
    let i = 0;
    while(i < N){
        let diff = K - arr[i];
        if(!hashSet.includes(diff)){
            hashSet.push(arr[i]);
        }
        else {
            return 1;
        }
        i++;
    }
    return -1;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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