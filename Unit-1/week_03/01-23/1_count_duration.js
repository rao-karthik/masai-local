// function runProgram(input) {
//     arr1 = input.trim().split(/[\r\n]+/);
//     console.log(arr1);
//     var arr2 = 0;
//     for (var i = 1; i < arr1.length; i++){
//         arr2 = arr1[i].trim().split(" ")
//         console.log(arr2)
//         var num1 = Number(arr2[0]);
//         var num2 = Number(arr2[1]);
//         var num3 = Number(arr2[2]);
//         var num4 = Number(arr2[3]);
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num4)
//     //     var difference = ((num3 * 60) + num4) - ((num1 * 60) + num2);
//     //     // console.log(difference)
//     //     if (difference > 60){
//     //         var dif1 = difference % 60;
//     //         var dif2 = Math.floor(difference/60);
//     //         console.log(dif2 + " " + dif1)
//     //     } else {
//     //         console.log("0"+ " " + difference)
//     //     }
//     }
// }

function runProgram(input) {
    arr1 = input.trim().split(/[\r\n]+/);
    // console.log(arr1);
    var arr2 = 0;
    for (var i = 1; i < arr1.length; i++){
        arr2 = arr1[i].trim().split(" ").map(Number)
        // console.log(arr2)
        var start =((arr2[0] * 60) + arr2[1])
        var end = ((arr2[2] * 60) + arr2[3])
        var difference = Math.abs(start-end);
        // console.log(difference)
        var hours = Math.floor(difference/60);
        var minutes = Math.floor(difference % 60);
        console.log(hours + " " + minutes)
        // if (difference > 60){
        //     var dif1 = difference % 60;
        // //     var a = difference/60;
        // //     a = a.toString();
        // //     // console.log(a)
        // //     var b = [];
        // //     b.push(a);
        // //     // console.log(b)
        // //     b = b[0].trim().split(".").map(Number)
        //     // console.log(b)
        //     var dif2 = Math.floor(difference/60);
        //     console.log(dif2 + " " + dif1);
        //     // console.log(b[0] + " " + dif1)
        // } else {
        //     console.log("0"+ " " + difference);
        // }
    }
}

if (process.env.USER === "rao") {
    runProgram(`2
    1 44 2 14
    2 42 8 23`);
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