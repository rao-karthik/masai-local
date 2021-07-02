// Given a number write a function to find if it is divisible by 5
function divBy5(input){
    if (input % 5 == 0){
        return true;
    } 
    else {
        return false;
    }
    // return false;
}
// console.log(divBy5(18));

// Use the function in the above statement find the sum of multiples of 5 till the given limit

var limit = 10;
var sum = 0;
for (i = 0; i <= limit; i++){
    if (divBy5(i)){
        sum = sum + i;
    }
}
console.log(sum);

// Given a single character in upper case convert to lower case (Don't use inbuilt functions

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper  ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function tolower(input){
    for ( var i = 0; i < upper.length; i++){
        if (upper[i] == input){
            return lower[i];
        }
    }
    return input;
}
console.log(tolower("A"));

// Write a function to check if a number is not a prime

function isComposite(input){
    var factors = 0;
    for (var i = 1; i <= input; i++);
    if (input % i == 0){
        factors++;
    }
    if (factors > 2){
        return true;
    }
    else {
        return false;
    }
}
console.log(isComposite("10"))

// Given an array of numbers find how many times the minimum value occurs

var nums = [4, 5, 6, 9, 10, 4, 5, 4];
function lowElement(input){
    var low = input[0];
    for (var i = 1; i < input.length; i++){
        if (input[i] < low){
            low = input[i];
        }
    }
    return low;
}
// console.log(lowElement(nums))

function findoccurance(input , match){
    var count = 0;
    for (var i = 0; i < input.length; i++){
        if(input[i] == match){
            count++;
        }
    }
    return count;
}

var low_elem = lowElement(nums);
var low_count = findoccurance(nums, low_elem);
console.log(low_count);

// Given a string remove the consonants from the string

var vowels = 'aeiouAEIOU';
function isvowel(input){
    for (var i = 0; i < vowels.length; i++){
        if (vowels[i] == input) {
            return true;
        }
    }
    return false;
}

var nm = "Masai NRUPUL SchOol";
var out = "";
for (var i = 0; i < nm.length; i++){
    if (isvowel(nm[i]) || nm[i] == ' '){
        out = out + nm[i];
    }
}
console.log(out);