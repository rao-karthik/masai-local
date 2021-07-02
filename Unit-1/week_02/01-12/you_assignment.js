// Given a number write a function to find if it is divisible by 7

function divisibleBy7(input){
    if (input % 7 == 0){
        return true;
    }
    return false;
}
console.log(divisibleBy7("45"))

// Use the function in the above statement find the average of multiples of 7 till the given limit

var limit = 20;
var sum = 0;
var avg = 0;
var count = 0;
for (var i = 1; i <= limit; i++){
    if (divisibleBy7(i)){
        count++
    }
}
// console.log(count);
for (var j = 0; j <= limit; j++){
    if (divisibleBy7(j)){
        sum = sum + j;
    }
}
// // console.log(sum);
avg = sum / count;
console.log("Average = " + avg)

// Given a word in upper case convert to lower case (Don't use inbuilt functions)

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function tolower(input){
    for (var i = 0; i < upper.length; i++){
        if (upper[i] == input){
            return lower[i];
        }
    }
    return input;
}
console.log(tolower("C"));

// Write a function to remove even numbers from the given array of numbers

function evennum(input){
    if (input % 2 == 1){
        return true;
    }
    return false;
}

var numbers = [22, 15, 19, 52, 54, 33, 7];
var odd = "";
for (var i = 0; i < numbers.length; i++){
    if (evennum(numbers[i])){
        odd = odd + numbers[i] + " ";
    }
}
console.log(odd);

// Given an array of numbers find how many times the minimum and maximum value occurs

var num = [5, 6, 8, 3, 7, 3, 8, 4, 3, 8, 8];
function min(input){
    var low = input[0];
    for (var i = 1; i < input.length; i++){
        if (input[i] < low){
            low = input[i];
        }
    }
    return low;
}
// console.log(min(num));

function minocc(input, match){
    var count = 0;
    for (var i = 0; i < input.length; i++){
        if (input[i] == match){
            count++;
        }
    }
    return count;
}
var low_elem = min(num);
var low_count = minocc(num, low_elem);
console.log("Minimum Count - " + low_count);

function max(input){
    var high = input[0];
    for (var i = 1; i < input.length; i++){
        if (input[i] > high){
            high = input[i];
        }
    }
    return high;
}
// console.log(max(num));

function maxocc(input, match){
    var count = 0;
    for (var i = 0; i < input.length; i++){
        if (input[i] == match){
            count++;
        }
    }
    return count;
}

var high_elem = max(num);
var high_count = maxocc(num, high_elem);
console.log("Maximum Count - " + high_count);

// Given a string remove a given character from the string

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
var to_remove = "K";
console.log(removechar(name,to_remove));