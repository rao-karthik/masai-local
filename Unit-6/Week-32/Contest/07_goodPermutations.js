function runProgram(input){
    input = +input;

    let str = '';
    for(let i = 1; i <= input; i++){
        str += i;
    }

    let res = [];
    console.log(str)
    generatePermutation(str, 0, input, res)


    // let count = 0;
    // let flag = true;
    // for(let i = 0; i < res.length; i++){
    //     if(i!== 0 && res[i].toString() !== res[i-1].toString()){
    //         for(let j = 0; j < res[i].length; j++){
    //             if(res[j] % j === 0 || j % res[j] === 0){
    //                 flag = true
    //             }
    //         }
    //         if(flag){
    //             count++;
    //         }
    //     }
    //     else {
    //         for(let j = 0; j < res[i].length; j++){
    //             if(res[j] % j === 0 || j % res[j] === 0){
    //                 flag = true
    //             }
    //         }
    //         if(flag){
    //             count++;
    //         }
    //     }
    // }
    // console.log(count)
}

function generatePermutation (str, left, right){
    if(left === right){
        console.log(str.split('').join(' '));
        return;
    }
    for (let i = left; i <= right; i++){
            str = swap(str, left ,i);
            generatePermutation(str, left+1, right);
        }
}

function swap(str, i, j){

    str = str.split('');

    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return str.join('');
}  

if (process.env.USER === "kartik") {
    runProgram(`2`);
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