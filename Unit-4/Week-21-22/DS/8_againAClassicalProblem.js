function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let bracs = input[i].trim().split("");
        // console.log(bracs)

        let newBracs = bracs.filter(item=> item.charCodeAt(0) === 40 || item.charCodeAt(0) === 41 || item.charCodeAt(0) === 91 || item.charCodeAt(0) === 93 || item.charCodeAt(0) === 123 || item.charCodeAt(0) === 125 )
        // console.log(newBracs)

        if(newBracs.length % 2 !== 0){
            console.log('not balanced');
        }
        else {
            console.log(bracsCheck(newBracs));
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    {([])}
    ()
    ()[]`);
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

function bracsCheck(bracs){
    let stack = [];
    let flag = true;
    for(let j = 0; j < bracs.length; j++){
        if(bracs[j] === '(' || bracs[j] === '{' || bracs[j] === '[' ){
            stack.push(bracs[j]);
        }
        else {
            if(bracs[j] === ')' && stack[stack.length-1] !== '('){
                flag = false;
                break;
            }
            else if(bracs[j] === '}' && stack[stack.length-1] !== '{'){
                flag = false;
                break;
            }
            else if(bracs[j] === ']' && stack[stack.length-1] !== '['){
                flag = false;
                break;
            }
            stack.pop();
        }
    }
    if(flag){
        return 'balanced';
    }
    else {
        return 'not balanced';
    }
}