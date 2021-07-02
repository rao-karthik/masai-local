function runProgram(input){

    var data = input.trim().split(/[\r\n]+/);
    // console.log(data)

    var data_1 = data[0].trim().split(" ");
    var data_2 = data[1].trim().split(" ");
    // console.log(data_1);
    // console.log(data_2);
    // var total_price = 0;
    // total_price = total_price + Number(data_1[0]) * Number(data_2[0]) + Number(data_1[1]) * Number(data_2[1]) + Number(data_1[2]) * Number(data_2[2])
    // console.log(total_price)
    var total = 0;
    for (var i = 0; i < price.length; i++){
        total = total + price[i] * ticket[i];
    }
    console.log(total);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});