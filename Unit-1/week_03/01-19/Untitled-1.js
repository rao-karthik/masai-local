var name = "Kartik";
function removechar(input, remove){
    var new_1 = "";
    for(var i = 0; i < input.length; i++){
        if (input[i] != remove){
            new_1 = new_1 + input[i];
        }
    }
    return new_1;
}
var to_remove = "a";
console.log(removechar(name,to_remove));


// var new_1 = "";

// for(var i = 0; i < input.length; i++){
//     if (input[i] != remove){
//         new_1 = new_1 + input[i]
//     }
// }
// console.log(new_1)