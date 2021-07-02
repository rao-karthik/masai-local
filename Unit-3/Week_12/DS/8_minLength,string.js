function runProgram(input){
    input = input.trim();
    // console.log(input);

    let subStrArr = subString(input);
    // console.log(subStrArr)

    let subDistArr = [];
    for(let i = 0; i < subStrArr.length; i++){
        subDistArr.push(distinctChars(subStrArr[i]))
    }
    // console.log(subDistArr)

    let max = 0;
    for (let i = 0; i < subDistArr.length; i++){
        if(Object.keys(subDistArr[max]).length < Object.keys(subDistArr[i]).length){
            max = i;
        }
    }
    // console.log(subDistArr[max])

    let sortedArr = []
    for (let i = 0; i < subDistArr.length; i++){
        if (Object.keys(subDistArr[i]).length === Object.keys(subDistArr[max]).length){
            sortedArr.push(subDistArr[i]);
        }
    }
    // console.log(sortedArr)

    let sumArr = [];
    for(let i = 0; i < sortedArr.length; i++){
        let sum = 0;
        for(let j = 0; j < Object.values(sortedArr[i]).length; j++){
            sum += Object.values(sortedArr[i])[j]
        }
        sumArr.push(sum);
    }

    let min = Math.min(...sumArr)
    console.log(min)
}

if (process.env.USER === "kartik") {
    runProgram(`zoomsessionmooz`);
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

function subString(input){
    let subStrArr = []
    for(let i = 0; i < input.length; i++){
        let str = "";
        for(let j = i; j < input.length; j++){
            str += input[j];
            subStrArr.push(str)
        }
    }
    return subStrArr;
}

function distinctChars(input){
    let obj = {};
    for(let i = 0; i < input.length; i++){
        if (obj[input[i]]){
            obj[input[i]]++
        }
        else {
            obj[input[i]] = 1;
        }
    }
    return obj;
}