function decimal(input){
    var place = 1;
    var rem, binary = 0;
    while(input > 0){
        rem =input % 2;
        binary = binary + (rem * place);
        input = parseInt(input/2);
        place = place*10
    }
    return binary;
} 

function reverseString(input){
    var revName = "";
    var length = input.length;
    for (var i = length-1; i >=0; i--){
        revName += input[i]
    }
    return(revName)
}
var arr = [1, 2, 3];
// // var arr = "name"
// for (var i = 0; i < arr.length; i++){
//     var sub_arr = [];
//     for (var j = i; j < arr.length; j++){
//         for (var k = j; k < arr.length; j++){
//             sub_arr.push(arr[k])
//         }
//     }
//     console.log(sub_arr)
// }


//     for (var i = 0; i < set.length; i++){
//         for (var y = 0; y < set.length-i; y++){
//             var c_subset = set.substring(y, y+i);
//                 if(subsets.indexOf(c_subset) == -1){
//                     if(c_subset[0] % 2 == 0 && C_subset[c_subset.length-1] % 2 == 1){
                    
//                     subsets.push(  c_subset);
//                 }
//             }
//         }
//     }
//     console.log(subsets)

// var combi = [];
// var temp= "";
// var letLen = letters.length ** 2;

// for (var i = 0; i < letLen ; i++){
//     temp= "";
//     for (var j=0;j<letters.length;j++) {
//         if (i & 2**j){ 
//             temp += letters[j]
//         }
//     }
//     if (temp !== "") {
//         combi.push(temp);
//     }
// }

// console.log(combi);