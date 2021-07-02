function runProgram(input){
    let [currentDay, N] = input.trim().split(/[\r\n]+/);
    N = Number(N);
    // console.log(currentDay, N)

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    // for(var i = 0; i < days.length; i++){
    //     let extraDays = N%7;
    //     if (currentDay == days[i]){
    //         i = i + extraDays;
    //         if(i > 6){
    //             i = i - 7;
    //             console.log(days[i]);
    //             break;
    //         }
    //         else {
    //             console.log(days[i]);
    //         }
    //     }
    // }

    let i = 0;

    while (i < days.length){
        let extraDays = N%7;
        if (currentDay == days[i]){
            i = i + extraDays;
            if(i > 6){
                i = i - 7;
                console.log(days[i]);
                break;
            }
            else {
                console.log(days[i]);
            }
        }
        i++;
    }
    
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`Wednesday
    13`);
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