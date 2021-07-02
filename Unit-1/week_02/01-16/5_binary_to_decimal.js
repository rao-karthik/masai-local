var binary = 1010;

function binarytodecimal(input){
    var decimal = 0;
    var count = 0;
    input = input.toString();
    var i = input.length -1;
    while(i >= 0){
        if (input[0] == 0){
            // console.log(input)
            break;
        } else {
            decimal = (Number(input[i]) * (2 ** count)) + decimal;
            count++
            // console.log(decimal)
        }
        i--;
    }
    // console.log(i,"i")
    return decimal;
}
console.log(binarytodecimal(binary))