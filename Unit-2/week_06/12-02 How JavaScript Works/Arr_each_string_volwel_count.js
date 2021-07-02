var arr = ["apple", "mango", "rst" ];
var countVow = [];
for(var j = 0; j < arr.length; j++){
    var count = 0;
    for(var k = 0; k < arr[j].length; k++){
        if (arr[j][k] == "a" || arr[j][k] == "e" || arr[j][k] == "i" || arr[j][k] == "o" || arr[j][k] == "u"){
            count++;
        }
    }
    countVow.push(count)
}

console.log(countVow)

// or

// var count = 0;
// for(var j = 0; j < arr.length; j++){
//     for(var k = 0; k < arr[j].length; k++){
//         if (arr[j][k] == "a" || arr[j][k] == "e" || arr[j][k] == "i" || arr[j][k] == "o" || arr[j][k] == "u"){
//             count++;
//         }
//     }
//     countVow.push(count)
//     count = 0;
// }

// console.log(countVow)