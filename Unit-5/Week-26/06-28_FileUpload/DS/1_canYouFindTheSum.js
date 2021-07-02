function runProgram(input){
    input=input.trim().split(/[\r\n]+/);
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let stack1 = []
    let stack2 = []
    let index2 = []
    let index1 = []
    let x = []
    let y= []
    for(let i=0; i<arr.length; i++){
        if(stack1 == ""){
            x.push(-1)
        }else {
            if(stack1[stack1.length-1] > arr[i]){
                x.push(index1[index1.length-1] + 1)
            }else {
                while(stack1[stack1.length-1] <= arr[i] && stack1.length > 0){
                    stack1.pop()
                    index1.pop()
                }
                if(stack1 == ""){
                    x.push(-1)
                }else {
                    x.push(index1[index1.length-1] + 1)
                }
            }
        }
        stack1.push(arr[i])
        index1.push(i)
    }
    for(let i=arr.length-1; i>=0; i--){
        if(stack2 == ""){
            y.push(-1)
        }else {
            if(stack2[stack2.length-1] > arr[i]){
                y.push(index2[index2.length-1]+1)
            }else {
                while(stack2[stack2.length-1] <= arr[i] && stack2.length > 0){
                    stack2.pop()
                    index2.pop()
                }
                if(stack2 == ""){
                    y.push(-1)
                }else {
                    y.push(index2[index2.length-1]+1)
                }
            }
        }
        index2.push(i)
        stack2.push(arr[i])
    }
    let y2= y.reverse()
    let ans = []
    for(let i=0; i<arr.length; i++){
        ans.push(x[i] + y[i])
    }
    console.log(ans.join(" "))
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    5 4 1 3 2`);
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