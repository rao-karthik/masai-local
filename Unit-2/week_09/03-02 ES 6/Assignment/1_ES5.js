// Creating Random Array
var arr = [];
for(var i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random()*101));
}
console.log(arr);

// New array- multiples of 10

var arrMul10 = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 10 == 0){
        arrMul10.push(arr[i]);
    }
}
console.log(arrMul10);

// New array - less than 50

var less50 = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] < 50){
        less50.push(arr[i]);
    }
}
console.log(less50);

// Sum of array

var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);