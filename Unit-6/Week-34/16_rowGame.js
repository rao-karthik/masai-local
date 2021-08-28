function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
  	let tests = +input[0];
  	let line = 1;
  
  	for(let i = 0; i < tests; i++){
      	let [row, col] = input[line++].trim().split(' ');
      	
      	let arr = [];
      
      	for(let i = 0; i < row; i++){
          	arr.push(input[line++].trim().split(' ').map(Number));
        }
          
        let keys = [];
      
      	for(let i = 0; i < row; i++){
          	let obj = {};
          	for(let j = 0; j < col; j++){
              	if(obj[arr[i][j]]){
                  	obj[arr[i][j]]++;
                }
              	else {
                  	obj[arr[i][j]] = 1;
                }
            }
          	keys.push(Object.keys(obj).join(''));
        }
                      
       	console.log(keys);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3`);
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