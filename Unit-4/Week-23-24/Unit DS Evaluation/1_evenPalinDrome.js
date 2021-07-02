function runProgram(input){
    input = input.split("\n")
    let N = +input[0].trim();
    let arr = input[1].trim().split("")
    let newArr = []
    for(let i=0 ; i<arr.length;i++){
        newArr.push(arr[i])
        i++
    }
   newArr = newArr.join('')
    
    let revArr=[]
    for(let j=newArr.length-1; j>=0;j--){
        revArr.push(newArr[j])
    }
    
    revArr=revArr.join('')
    if (newArr==revArr){
        console.log("yes")
    }
    else{
        console.log("no")
    } 

}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    abcdcfa`);
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