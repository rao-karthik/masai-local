var strings = "instagram"
var string_1= "gst"


// function issubstring(input, check){
//     var count = 0;
//     var position = input.indexOf(check)
//     while(position !== -1){
//         count ++;
//         position = input.indexOf(check, position + 1)
//     }
//     if (count == 1){
//         return true;
//     } else {
//         return false;
//     }
// }

function issubstring(input, check){
    var count = 0;
    var position = input.indexOf(check)
    if (position != -1){
        return true;
    } else {
        return false;
    }
}

// console.log(strings + " " + string_1)
console.log(issubstring(strings, string_1))

