function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let names = [];
    let height = [];
    let weight = [];
    let iq = [];

    for(let i = 1; i <= N; i++){
        let marks = input[i].trim().split(" ");
        names.push(marks[0]);
        height.push(+marks[1]);
        weight.push(+marks[2]);
        iq.push(+marks[3]);
    }

    for(let i = 0; i < N-1; i++){
        for(let j = 0; j < N-i-1; j++){

            if(iq[j] === iq[j+1]){
                let htDiff = sortHWI(height[j], height[j+1]);

                if(htDiff < 0){
                    let temp = names[j];
                    names[j] = names[j+1];
                    names[j+1] = temp;

                    temp = height[j];
                    height[j] = height[j+1];
                    height[j+1] = temp;

                    temp = weight[j];
                    weight[j] = weight[j+1];
                    weight[j+1] = temp;

                    temp = iq[j];
                    iq[j] = iq[j+1];
                    iq[j+1] = temp;
                }
                if(height[j] === height[j+1]){
                    let wtDiff = sortHWI(weight[j], weight[j+1]);

                    if(wtDiff > 0){
                        let temp = names[j];
                        names[j] = names[j+1];
                        names[j+1] = temp;

                        temp = height[j];
                        height[j] = height[j+1];
                        height[j+1] = temp;

                        temp = weight[j];
                        weight[j] = weight[j+1];
                        weight[j+1] = temp;

                        temp = iq[j];
                        iq[j] = iq[j+1];
                        iq[j+1] = temp;
                    }

                    if(weight[j] === weight[j+1]){
                        let nameDiff = sortNames(names[j], names[j+1]);

                        if(nameDiff > 0){
                            let temp = names[j];
                            names[j] = names[j+1];
                            names[j+1] = temp;

                            temp = height[j];
                            height[j] = height[j+1];
                            height[j+1] = temp;

                            temp = weight[j];
                            weight[j] = weight[j+1];
                            weight[j+1] = temp;

                            temp = iq[j];
                            iq[j] = iq[j+1];
                            iq[j+1] = temp;
                        }
                    }
                }
            }
            else {
                let iqDiff = sortHWI(iq[j], iq[j+1]);

                if(iqDiff < 0){
                    let temp = names[j];
                    names[j] = names[j+1];
                    names[j+1] = temp;

                    temp = height[j];
                    height[j] = height[j+1];
                    height[j+1] = temp;

                    temp = weight[j];
                    weight[j] = weight[j+1];
                    weight[j+1] = temp;

                    temp = iq[j];
                    iq[j] = iq[j+1];
                    iq[j+1] = temp;
                }
            }
        }
    }
    for(let i = 0; i < 8; i++){
        console.log(names[i]);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`8
    jack 158 85 112
    john 168 74 124
    arti 148 65 120
    bhuvan 182 84 124
    navi 182 80 124
    vijay 175 89 115
    amit 175 89 115
    kevin 182 77 128`);
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
    for(let i = 0; i < Math.min(A.length, B.length); i++){
        if(A[i] !== B[i]){
            return A.charCodeAt(i) - B.charCodeAt(i);
        }
    }
    return A.length - B.length;
}

function sortHWI(h1, h2){
    if(h1 !== h2){
        return h1 - h2;
    }
    return h1-h2;
}