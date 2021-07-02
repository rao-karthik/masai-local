function runProgram(input){
    input = input.trim();
    // console.log(input);

    // let vowArr = [];
    // let uniq = [];
    // for (let i = 0; i < input.length; i++){
    //     if(input[i] === 'a'|| input[i] === 'e'|| input[i] === 'i'|| input[i] === 'o'|| input[i] === 'u'){
    //         vowArr.push(input[i]);
    //     }
    // }
    // for(let i = 0; i < vowArr.length; i++){
    //     if(uniq.indexOf(vowArr[i]) === -1){
    //         uniq.push(vowArr[i]);
    //     }
    // }
    // console.log(uniq)
    
    let strArr = [];
    for (let i = 0; i < input.length; i++){
        let str = "";
        for (let j = i; j < input.length; j++){
            str += input[j];
            strArr.push(str)
        }
    }
    // console.log(strArr)

    let splitArr = []
    for(let i = 0; i < strArr.length; i++){
        splitArr.push(strArr[i].split(""))
    }
    // console.log(splitArr);

    const vowels = ["a", "i", "o", "u"];
    
    let count = 0;
    for(let i = 0; i < splitArr.length; i++){
        let flag = true;``
        for(let j = 0; j < vowels.length; j++){
            if(splitArr[i].includes(vowels[j]) === false){
                flag = false;
                break;
            }
        }
        if (flag === true){
            count++;
        }
    }
    console.log(count)
}

if (process.env.USER === "kartik") {
    runProgram(`pandemicsituation`);
} else {
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
