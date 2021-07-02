function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);

    let tests = +input[0];

    let line = 1;

    for(let i = 0; i < tests; i++){
        let [ N, K ] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        // arr = arr.sort((a, b)=> a-b);

        let l = 0;
        let r = arr.length-1;
        let flag = false;
        // while(l < r){
        //     if(arr[l] + arr[r] === K){
        //         flag = true;
        //         break;
        //     }
        //     else if( arr[l] + arr[r] > K){
        //         r--;
        //     }
        //     else {
        //         l++
        //     }
        // }

        let hashSet = [];
        let i = 0;
        while(i < N){
            let diff = K - arr[i];
            if(!hashSet.includes(diff)){
                hashSet.push(arr[i]);
            }
            else {
                flag = true;
                break;
            }
            i++;
        }
        
        if(flag === true){
            console.log(1);
        }
        else {
            console.log(-1);
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
} 
else if (process.env.USERNAME === "kartik") {
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