// Given an array of numbers print the square of those numbers

var number = [9, 34,
     56, 72];
number.forEach(function(el){
    console.log(el ** 2);
})

// var squares = numbers.map(function(el){
//     return el ** 2;
// })


// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]

var input = [1, 2];
var double = function(el){
    return el * 2;
}
var double_num = input.map(double);
console.log(double_num);

// Given an array of numbers extract the numbers which are odd
// Sample Input - [1,2,3]
// Sample Output - [1,3]

var nums = [1, 2, 3];
var odd = function(el){
    return el % 2 == 1;
}
var odd_num = nums.filter(odd);
console.log(odd_num);

// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

var num1 = [2, 3, 4];
var product = function(p, e){
    return p * e;
}
var odd_num = num1.filter(odd);
// console.log(odd_num);

var num_product = num1.reduce(product);
console.log(num_product);

// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var arr = [1, 2, 3, 4];
var sum = function(p, e){
    return p + e;
}
var odd_sum = arr.filter(odd).reduce(sum);
console.log(odd_sum);

// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

var numbers = [1, 2, 3, 4, 5, 6];
var mult_3 = function (el){
    return el % 3 == 0;
}
var cubes = function (el) {
    return el ** 3;
}
var mul_3_cube_sum = numbers.filter(mult_3).map(cubes).reduce(sum);
console.log(mul_3_cube_sum)