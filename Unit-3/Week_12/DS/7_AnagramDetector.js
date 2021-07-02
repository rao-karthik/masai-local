function runProgram(input){
    let [word, checkWord] = input.trim().split(/[\r\n]+/);
    // console.log(input);

    // let count = {};
    // for(let i = 0; i < word.length; i++){
    //     if(word[i] in count){
    //         count[word[i]]++
    //     }
    //     else {
    //         count[word[i]] = 1;
    //     }
    // }
    // console.log(count)

    let obj1 = []
    for(let i = 0; i < word.length; i++){
        if(word[i] == " "){
            continue;
        }
        else if (obj1[word[i]]){
            obj1[word[i]]++
        }
        else {
            obj1[word[i]] = 1;
        }
    }
    obj1 = obj1.sort();
    console.log(obj1);

    let obj2 = []
    for(let i = 0; i < checkWord.length; i++){
        if(checkWord[i] == " "){
            continue;
        }
        else if (obj2[checkWord[i]]){
            obj2[checkWord[i]]++
        }
        else {
            obj2[checkWord[i]] = 1;
        }
    }
    obj2 = obj2.sort();
    console.log(obj2)

    let flag = true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        flag = false;
    }
    else {
        for(key in obj1){
            for(key in obj2){

            }
        }
    }
    if(flag == false){
        console.log("False");
    }
    else {
        console.log("True")
    }    
}

if (process.env.USER === "kartik") {
    runProgram(`sachin tendulkar is sachin tendulkar
    si sachin hsacin tendulkar tedulkad`);
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