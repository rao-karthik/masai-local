function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let line = 1;

    let nameArr = [];
    let htArr = [];
    let wtArr = [];
    let iqArr = [];

    for(let i = 0; i < N; i++){
        let [nam, ht, wt, iq] = input[line++].trim().split(" ");

        nameArr.push(nam);
        htArr.push(+ht);
        wtArr.push(+wt);
        iqArr.push(+iq);
    }

    // console.log(htArr)

    for(let i = 0; i < N-1; i++){
        for(let j = 0; j < N-i-1; j++){
            let A = nameArr[j];
            let B = nameArr[j+1];

            let namDiff = sortNames(A, B);
            let htDiff = htArr[j] - htArr[j+1];
            let wtDiff = wtArr[j] - wtArr[j+1];
            let iqDiff = iqArr[j] - iqArr[j+1];


            if(iqArr[j] === iqArr[j+1] && htDiff > 0){
                let temp = iqArr[j];
                iqArr[j] = iqArr[j+1];
                iqArr[j+1] = temp;
    
                temp = nameArr[j];
                nameArr[j] = nameArr[j+1];
                nameArr[j+1] = temp;
    
                temp = htArr[j];
                htArr[j] = htArr[j+1];
                htArr[j+1] = temp;
    
                temp = wtArr[j];
                wtArr[j] = wtArr[j+1];
                wtArr[j+1] = temp;
            }
            else if(iqArr[j] === iqArr[j+1] && htArr[j] === htArr[j+1] && wtDiff < 0){
                let temp = iqArr[j];
                iqArr[j] = iqArr[j+1];
                iqArr[j+1] = temp;
    
                temp = nameArr[j];
                nameArr[j] = nameArr[j+1];
                nameArr[j+1] = temp;
    
                temp = htArr[j];
                htArr[j] = htArr[j+1];
                htArr[j+1] = temp;
    
                temp = wtArr[j];
                wtArr[j] = wtArr[j+1];
                wtArr[j+1] = temp;
            }
            else if(iqArr[j] === iqArr[j+1] && htArr[j] === htArr[j+1] && wtArr[j] === wtArr[j+1] && namDiff > 0){
                let temp = iqArr[j];
                iqArr[j] = iqArr[j+1];
                iqArr[j+1] = temp;
    
                temp = nameArr[j];
                nameArr[j] = nameArr[j+1];
                nameArr[j+1] = temp;
    
                temp = htArr[j];
                htArr[j] = htArr[j+1];
                htArr[j+1] = temp;
    
                temp = wtArr[j];
                wtArr[j] = wtArr[j+1];
                wtArr[j+1] = temp;
            }
            else if(iqDiff[j] > 0) {
                let temp = iqArr[j];
                iqArr[j] = iqArr[j+1];
                iqArr[j+1] = temp;
    
                temp = nameArr[j];
                nameArr[j] = nameArr[j+1];
                nameArr[j+1] = temp;
    
                temp = htArr[j];
                htArr[j] = htArr[j+1];
                htArr[j+1] = temp;
    
                temp = wtArr[j];
                wtArr[j] = wtArr[j+1];
                wtArr[j+1] = temp;
            }
        }
    }

    for(let i = 0; i < 8; i++){
        console.log(nameArr[i])
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`10
    jack 158 85 112
    john 168 74 124
    arti 148 65 120
    bhuvan 182 84 124
    navi 182 84 124
    vijay 175 88 115
    amit 180 89 119
    kevin 182 77 120
    rohit 174 85 100
    vivek 184 75 111`);
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

function sortNames(A, B){
    for (let i = 0; i < Math.min(A.length, B.length); i++){
        if(A[i] !== B[i]){
            return A.charCodeAt(i) - B.charCodeAt(i);
        }
    }
    return A.length - B.length;
}