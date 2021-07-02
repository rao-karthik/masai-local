function runProgram(input) {
    // Write code here
    input = input.trim().split(/[\r\n]+/)
    var arr=[]
    for(var i=2;i<input.length;i=i+2){
        arr.push(input[i].trim().split(""))
    }
    for(var i=0;i<arr.length;i++){
        var str=""
        for(var j=arr[i].length-1 ;j>= 0;j--){
            if(arr[i][j]=="a"||arr[i][j]=="e" ||arr[i][j]=="i"||arr[i][j]=="o"||arr[i][j]=="u" )
            str+=arr[i][j]
        }
        for(var j=arr[i].length-1 ;j>= 0;j--){
            if(arr[i][j]!=="a"&&arr[i][j]!=="e" &&arr[i][j]!=="i"&&arr[i][j]!=="o"&&arr[i][j]!=="u" )
            var a= str+=arr[i][j]  
        }
        console.log(str)
    }
}
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });