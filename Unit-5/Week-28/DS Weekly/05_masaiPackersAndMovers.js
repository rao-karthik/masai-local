function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    
    let [Wt, trkAvailable] = input[0].trim().split(' ').map(Number);
    console.log(Wt, trkAvailable)

    let capacity = input[1].trim().split(' ').map(Number);
    console.log(capacity)

    let ways = subSequence(capacity.join(''), '', [])
    console.log(ways)

    let count = 0;
    for(let i = 0; i < ways.length; i++){
        if(sum(ways[i], ways[i].length-1) === Wt){
            count++;
        }
    }
    console.log(count);
}

function subSequence (str, res, ans) {
    if(str.length === 0){
        ans.push(res);
        return ans;
    }
    subSequence(str.substring(1), res, ans);
    return subSequence(str.substring(1), res + str.charAt(0), ans);
}

function sum (str, len){
    console.log(len)
    if(len == 0){
        return 0;
    };
    return str[len] + sum(str, len-1);
}

if (process.env.USER === "kartik") {
    runProgram(`3 3
    1 2 3`);
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