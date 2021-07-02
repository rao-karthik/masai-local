// Creating Random Array
var arr = [];
// for(let i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random()*101));
// }



// multiple of 10

var mul10 = arr.filter((el)=>{
    return el % 10 == 0;
})
console.log(mul10);

//less than 50

var less50 = arr.filter((el)=>{
    return el < 50;
})
console.log(less50);

// sum of Array

var sum = arr.reduce((ac, val)=>{
    return (ac+val)
})
console.log(sum);